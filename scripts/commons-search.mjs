// Search Wikimedia Commons for photos with commercial-use licences.
// node scripts/commons-search.mjs out.json "query 1" "query 2" ...
import { writeFileSync } from 'node:fs';
const [out, ...queries] = process.argv.slice(2);
const OK = /^(CC BY(-SA)? [0-9.]+|CC0|Public domain|PD)/i;
const UA = 'IberdanSiteBuilder/0.1 (photo licence lookup)';
const res = {};
for (const q of queries) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({
    action: 'query', format: 'json', generator: 'search', gsrnamespace: '6', gsrlimit: '14',
    gsrsearch: `${q} filetype:bitmap`, prop: 'imageinfo', iiprop: 'url|size|extmetadata', iiurlwidth: '400',
  }).forEach(([k, v]) => u.searchParams.set(k, v));
  let j;
  for (let a = 0; a < 5; a++) {
    const r = await fetch(u, { headers: { 'User-Agent': UA } });
    const txt = await r.text();
    try { j = JSON.parse(txt); break; } catch { await new Promise((ok) => setTimeout(ok, 4000 * (a + 1))); }
  }
  await new Promise((ok) => setTimeout(ok, 1500));
  if (!j) { console.log('FAILED', q); continue; }
  const pages = Object.values(j.query?.pages ?? {});
  res[q] = pages
    .map((p) => {
      const ii = p.imageinfo?.[0]; const m = ii?.extmetadata ?? {};
      const strip = (s) => (s ?? '').replace(/<[^>]+>/g, '').trim();
      return { title: p.title, w: ii?.width, h: ii?.height, licence: strip(m.LicenseShortName?.value), author: strip(m.Artist?.value).slice(0, 80), thumb: ii?.thumburl, page: ii?.descriptionurl };
    })
    .filter((p) => OK.test(p.licence) && p.w >= 1600 && p.w >= p.h);
  console.log(`\n## ${q}`);
  res[q].forEach((p, i) => console.log(`${i}. ${p.title.replace('File:', '')} | ${p.w}x${p.h} | ${p.licence} | ${p.author}`));
}
writeFileSync(out, JSON.stringify(res, null, 1));
