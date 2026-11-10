// Builds the web logo from the supplied artwork (brand-src/hta-logo.jpg):
//  public/brand/hta-mask.png   grey/black parts as an alpha mask (drawn in currentColor by CSS)
//  public/brand/hta-color.png  the red and green parts only, in their own colours
//  public/brand/hta-full-*.png the full logo (with "HIKING TO ATLAS" and the star) for light / dark grounds
//  public/favicon.png, public/apple-touch-icon.png
// Run: node scripts/build-logo.mjs
import sharp from 'sharp';
import { mkdirSync, readFileSync } from 'node:fs';

sharp.cache(false);
mkdirSync('public/brand', { recursive: true });
const src = readFileSync('brand-src/hta-logo.jpg');

async function layers(region, outW) {
  const { data, info } = await sharp(src).extract(region).resize({ width: outW }).raw().toBuffer({ resolveWithObject: true });
  const n = info.width * info.height;
  const mask = Buffer.alloc(n * 4);
  const color = Buffer.alloc(n * 4);
  for (let i = 0; i < n; i++) {
    const r = data[i * info.channels], g = data[i * info.channels + 1], b = data[i * info.channels + 2];
    const mn = Math.min(r, g, b), mx = Math.max(r, g, b);
    // "colour to alpha" against white
    const a = 1 - mn / 255;
    const sat = mx - mn;
    if (sat > 60 && a > 0.08) {
      const un = (c) => Math.max(0, Math.min(255, Math.round((c - 255 * (1 - a)) / a)));
      color.set([un(r), un(g), un(b), Math.round(a * 255)], i * 4);
    } else {
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      const alpha = Math.max(0, Math.min(255, Math.round((235 - lum) * (255 / 205))));
      mask.set([0, 0, 0, alpha], i * 4);
    }
  }
  const opts = { raw: { width: info.width, height: info.height, channels: 4 } };
  return { mask: sharp(mask, opts), color: sharp(color, opts), info };
}

// 1) Mark: "HT" + summit + hiker + red swoosh (no text line, no star).
const mark = await layers({ left: 165, top: 20, width: 950, height: 425 }, 380);
await mark.mask.png({ compressionLevel: 9 }).toFile('public/brand/hta-mask.png');
await mark.color.png({ compressionLevel: 9 }).toFile('public/brand/hta-color.png');
console.log('mark', mark.info.width, 'x', mark.info.height);

// 2) Full logo for the footer / social: dark ink version and white ink version.
const full = await layers({ left: 140, top: 15, width: 990, height: 600 }, 600);
for (const [name, ink] of [['dark', [17, 19, 24]], ['light', [255, 255, 255]]]) {
  const m = await full.mask.raw().toBuffer();
  for (let i = 0; i < m.length; i += 4) m.set(ink, i);
  await sharp(m, { raw: { width: full.info.width, height: full.info.height, channels: 4 } })
    .composite([{ input: await full.color.png().toBuffer() }])
    .png({ compressionLevel: 9 })
    .toFile(`public/brand/hta-full-${name}.png`);
}

// 3) Icons: mark on white, square.
const icon = async (size, file) => {
  const inner = Math.round(size * 0.86);
  const m = await mark.mask.clone().resize({ width: inner }).raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < m.data.length; i += 4) m.data.set([17, 19, 24], i);
  const ink = await sharp(m.data, { raw: { width: m.info.width, height: m.info.height, channels: 4 } }).png().toBuffer();
  const col = await mark.color.clone().resize({ width: inner }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: '#ffffff' } })
    .composite([{ input: ink, gravity: 'center' }, { input: col, gravity: 'center' }])
    .png()
    .toFile(file);
};
await icon(180, 'public/apple-touch-icon.png');
await icon(64, 'public/favicon.png');
console.log('done');
