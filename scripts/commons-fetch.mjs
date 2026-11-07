// Download picked Commons photos + licence metadata.
// node scripts/commons-fetch.mjs <picks.json> <outDir> <width> [metaOut.json]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
const [picksFile, outDir, width = '2000', metaOut] = process.argv.slice(2);
const picks = JSON.parse(readFileSync(picksFile, 'utf8'));
mkdirSync(outDir, { recursive: true });
const UA = 'IberdanSiteBuilder/0.1 (photo licence lookup)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const strip = (s) => (s ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const meta = {};
for (const [id, title] of Object.entries(picks)) {
  const out = `${outDir}/${id}.jpg`;
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({ action: 'query', format: 'json', titles: `File:${title}`, prop: 'imageinfo', iiprop: 'url|extmetadata|size', iiurlwidth: width })
    .forEach(([k, v]) => u.searchParams.set(k, v));
  let j;
  for (let a = 0; a < 5 && !j; a++) {
    try { j = await (await fetch(u, { headers: { 'User-Agent': UA } })).json(); } catch { await sleep(4000 * (a + 1)); }
  }
  const p = Object.values(j?.query?.pages ?? {})[0];
  const ii = p?.imageinfo?.[0];
  if (!ii) { console.log('MISSING', id, title); continue; }
  const m = ii.extmetadata ?? {};
  meta[id] = {
    title, author: strip(m.Artist?.value), licence: strip(m.LicenseShortName?.value),
    licenceUrl: m.LicenseUrl?.value ?? '', source: ii.descriptionurl, width: ii.width, height: ii.height,
  };
  if (!existsSync(out)) {
    for (let a = 0; a < 5; a++) {
      const r = await fetch(ii.thumburl, { headers: { 'User-Agent': UA } });
      if (r.ok) { writeFileSync(out, Buffer.from(await r.arrayBuffer())); break; }
      await sleep(5000 * (a + 1));
    }
  }
  console.log('ok', id);
  await sleep(1200);
}
if (metaOut) writeFileSync(metaOut, JSON.stringify(meta, null, 2));
