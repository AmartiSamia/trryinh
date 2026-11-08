// Adds es/de/pt to every { en, fr, ar } text in trips, FAQ and photo alt texts,
// using scripts/i18n/<lang>-*.json (id -> text) and strings-en.json (id -> English).
// Keeps comments and formatting of the YAML files. Re-runnable.
// node scripts/i18n/merge.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import YAML from 'yaml';
const NEW = ['es', 'de', 'pt'];
const en = JSON.parse(readFileSync('scripts/i18n/strings-en.json', 'utf8'));
const byEn = new Map(Object.entries(en).map(([id, text]) => [text, id]));
const tr = {};
for (const l of NEW) {
  tr[l] = {};
  for (const f of readdirSync('scripts/i18n').filter((f) => f.startsWith(`${l}-`) && f.endsWith('.json'))) Object.assign(tr[l], JSON.parse(readFileSync(`scripts/i18n/${f}`, 'utf8')));
}
const missing = new Set();
const lookup = (text, l) => { const id = byEn.get(text); const v = id && tr[l][id]; if (!v) missing.add(`${l}:${id ?? text.slice(0, 40)}`); return v; };

// YAML: walk maps; when a map has en+fr, insert es/de/pt after fr (before ar).
const fixMap = (map) => {
  const get = (k) => map.items.find((p) => p.key?.value === k);
  const enPair = get('en');
  if (enPair && get('fr') && typeof enPair.value?.value === 'string') {
    const text = enPair.value.value;
    for (const l of NEW) {
      const v = lookup(text, l);
      if (!v) continue;
      const existing = get(l);
      if (existing) existing.value.value = v;
      else {
        const arIdx = map.items.findIndex((p) => p.key?.value === 'ar');
        const node = new YAML.Pair(new YAML.Scalar(l), new YAML.Scalar(v));
        if (map.flow) node.value.type = 'QUOTE_DOUBLE';
        map.items.splice(arIdx < 0 ? map.items.length : arIdx, 0, node);
      }
    }
    return;
  }
  for (const p of map.items) visit(p.value);
};
const visit = (node) => {
  if (YAML.isMap(node)) fixMap(node);
  else if (YAML.isSeq(node)) node.items.forEach(visit);
};
const files = [...readdirSync('src/content/trips').map((f) => `src/content/trips/${f}`), 'src/content/faq.yaml'];
for (const f of files) {
  const doc = YAML.parseDocument(readFileSync(f, 'utf8'));
  visit(doc.contents);
  writeFileSync(f, doc.toString({ lineWidth: 0 }));
}
// Photos alt texts (JSON)
const photos = JSON.parse(readFileSync('src/content/photos.json', 'utf8'));
for (const p of photos) {
  const out = {};
  for (const k of ['en', 'fr', ...NEW, 'ar']) out[k] = NEW.includes(k) ? lookup(p.alt.en, k) ?? p.alt[k] : p.alt[k];
  p.alt = out;
}
writeFileSync('src/content/photos.json', JSON.stringify(photos, null, 2) + '\n');
console.log(missing.size ? `MISSING ${missing.size}: ${[...missing].slice(0, 20).join(', ')}` : 'all texts translated');
