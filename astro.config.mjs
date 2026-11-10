// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://hikingtoatlas.com'; // keep in sync with src/config.ts

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  // Inline CSS: no render-blocking stylesheet requests (pages are small).
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // hreflang alternates are declared in each page's <head> (translated slugs
      // like /fr/circuits/ can't be paired automatically by the sitemap plugin).
      filter: (page) =>
        page !== `${SITE}/` && // language redirect
        !/\/(wishlist|favoris|favoritos|merkliste)\/$/.test(page), // personal page, noindex
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
