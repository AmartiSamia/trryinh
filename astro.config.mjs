// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iberdan.com', // keep in sync with src/config.ts
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !/\/(wishlist|favoris)\/$/.test(page),
      i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr', ar: 'ar' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
