// Accessibility check: node scripts/axe.mjs /en/ /fr/trips/ ...  (THEME=dark for dark mode)
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
const base = process.env.BASE ?? 'http://localhost:4321';
const browser = await chromium.launch();
let total = 0;
for (const theme of (process.env.THEME ?? 'light,dark').split(',')) {
  const ctx = await browser.newContext({ colorScheme: theme, viewport: { width: Number(process.env.W ?? 1280), height: 900 } });
  const page = await ctx.newPage();
  for (const p of process.argv.slice(2)) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-in')));
    await page.waitForTimeout(900); // let the hero animation finish
    const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    total += r.violations.length;
    console.log(`${theme} ${p}: ${r.violations.length} violation(s)`);
    for (const v of r.violations) {
      console.log(`  - [${v.impact}] ${v.id}: ${v.help}`);
      for (const n of v.nodes.slice(0, 4)) console.log(`      ${n.target.join(' ')} ${n.failureSummary?.split('\n')[1] ?? ''}`);
    }
  }
  await ctx.close();
}
await browser.close();
process.exit(total ? 1 : 0);
