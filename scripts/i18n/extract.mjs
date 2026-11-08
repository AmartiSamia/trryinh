// Collects every unique English text from trips, FAQ and photo alt texts.
// node scripts/i18n/extract.mjs > strings-en.json
import { readFileSync, readdirSync } from 'node:fs';
import YAML from 'yaml';
const seen = new Map();
const add = (en) => { if (!seen.has(en)) seen.set(en, `s${String(seen.size + 1).padStart(3, '0')}`); };
const walk = (o) => {
  if (o && typeof o === 'object') {
    if (typeof o.en === 'string' && typeof o.fr === 'string') return add(o.en);
    Object.values(o).forEach(walk);
  }
};
for (const f of readdirSync('src/content/trips')) walk(YAML.parse(readFileSync(`src/content/trips/${f}`, 'utf8')));
walk(YAML.parse(readFileSync('src/content/faq.yaml', 'utf8')));
walk(JSON.parse(readFileSync('src/content/photos.json', 'utf8')).map((p) => p.alt));
console.log(JSON.stringify(Object.fromEntries([...seen].map(([en, id]) => [id, en])), null, 0));
