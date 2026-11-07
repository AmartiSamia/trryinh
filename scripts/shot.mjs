// Screenshot helper: node scripts/shot.mjs <outDir> <path> [path...]
// Env: W (width, default 390), THEME (light|dark), FULL=1 for full page.
import { chromium } from 'playwright';
const [outDir, ...paths] = process.argv.slice(2);
const base = process.env.BASE ?? 'http://localhost:4321';
const width = Number(process.env.W ?? 390);
const theme = process.env.THEME ?? 'light';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: width < 700 ? 844 : 900 }, colorScheme: theme, deviceScaleFactor: 1 });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
for (const p of paths) {
  await page.goto(base + p, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-in')));
  if (process.env.FULL === '1') {
    // Scroll through so lazy images load.
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); } scrollTo(0, 0); });
    await page.waitForLoadState('networkidle');
  }
  await page.waitForTimeout(300);
  const name = `${p.replace(/[\/?=&]+/g, '_').replace(/^_|_$/g, '') || 'root'}-${width}-${theme}.png`;
  await page.screenshot({ path: `${outDir}/${name}`, fullPage: process.env.FULL === '1' });
  console.log('saved', name);
}
if (errors.length) console.log('ERRORS:', errors.join('\n'));
await browser.close();
