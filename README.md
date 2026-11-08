# Iberdan

Website of **Iberdan** (ⵉⴱⵔⴷⴰⵏ, "paths" in Tamazight), a small Moroccan travel agency based in
Imlil. Treks, desert, day trips and tailor-made journeys in English, French, Spanish, German,
Portuguese and Arabic (right-to-left).

Built with [Astro](https://astro.build) (static) and Tailwind CSS. No backend: every booking path ends
in a pre-filled WhatsApp message or an email sent through Web3Forms. Nothing is paid online.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build to dist/
npm run preview   # serve dist/
```

Node 22 or newer.

## Change contact details, prices and rates

Everything lives in **`src/config.ts`**: WhatsApp number, phone, email, address, social links,
licence numbers, currency rates, email-form key and analytics.

- **Currency**: trip prices are stored in **MAD**. EUR, USD, GBP, CHF and CAD are converted with
  `currency.ratesToMad` (rounded to whole units, MAD to the nearest 10). To add a currency, add it to
  `Currency`, `currencies`, `currencySymbol` and `ratesToMad` in `src/config.ts`, and one line to the
  currency rules in `src/styles/global.css`. Arabic pages show MAD by default.
- **Children**: `booking.childFactor` (1 = full price, 0.5 = half price).
- **Legal pages**: set `legal.draft` to `false` once the texts are confirmed.

## Add or edit a trip

One YAML file per trip in **`src/content/trips/`**. The file name is the URL slug
(`toubkal-summit-3-days.yaml` → `/en/trips/toubkal-summit-3-days/`).

1. Copy an existing trip of the same kind (e.g. `ouzoud-waterfalls-day.yaml` for a day trip).
2. Change the texts. Every text has `en`, `fr`, `es`, `de`, `pt` and `ar`. **In `{ … }` one-line form, put each text in
   double quotes** (a comma would otherwise cut it).
3. `price` is per person in MAD: `shared`, `private` or both. Set `confirmed: true` once the price
   is final (this removes "indicative price" under the price).
4. `included`, `excluded` and `pack` use standard items from `src/i18n/catalog.ts`
   (e.g. `transport-marrakech`, `guide-mountain`, `meals-all`) or a custom `{ en, fr, ar }` text.
5. `photos` lists photo ids from `src/content/photos.json` (first one is the cover).
6. Run `npm run dev`. If something is missing or misspelled, the error says which field.

`featured: true` puts a trip on the home page (keep six). `draft: true` hides it.

## Add a photo

1. Put the JPEG in `src/assets/photos/` (about 1800 px wide).
2. Add an entry to `src/content/photos.json` with `id`, `file`, `alt` (en/fr/ar), `author`,
   `licence`, `licenceUrl`, `source` and a `placeholder`.
   For Wikimedia Commons photos, `scripts/commons-fetch.mjs` + `scripts/build-photos.mjs` do this
   (see the comments at the top of each script). For Youssef's own photos, write the entry by hand
   with `author: Youssef Ait Taguem`, `licence: All rights reserved`.
3. Use only photos you own or with a licence that allows commercial use (CC BY, CC BY-SA, CC0).
   Credits appear under each gallery and on the Photo credits page automatically.

## Reviews

Add real reviews only, to `src/content/reviews.json`:

```json
[{ "id": "anna-2027-04", "name": "Anna", "country": "de", "trip": "toubkal-summit-3-days",
   "date": "2027-04-12", "rating": 5, "text": "…", "source": "google", "sourceUrl": "https://…" }]
```

While the file is empty, the site shows "Reviews coming soon" with a link to leave one.

## Texts

- Interface texts: `src/i18n/ui.ts` (English, French, Arabic) and `ui-es.ts`, `ui-de.ts`, `ui-pt.ts`. Shared trip vocabulary: `src/i18n/catalog.ts`.
- Page texts: in each page file in `src/views/`.
- FAQ: `src/content/faq.yaml`.
- URLs per language (e.g. `/fr/circuits/`): `src/i18n/routes.ts`.

## Translating new content

When you add a trip in English and French only, `npm run build` tells you which fields miss a language.
For bulk work: `node scripts/i18n/extract.mjs > scripts/i18n/strings-en.json` lists every English text
with an id; put translations in `scripts/i18n/<lang>-*.json` (id → text) and run
`node scripts/i18n/merge.mjs` to write them into the YAML files (comments are kept).

## Admin / editing without code

No admin page is needed to run the site: bookings arrive on WhatsApp and by email, and trips are
files. If someone non-technical will edit trips and prices often, add a free Git-based editor such
as [Pages CMS](https://pagescms.org) or Decap CMS: it gives a login page and forms over the same
YAML files, with no server or database.

## Deploy

**Netlify**: connect the repository; `netlify.toml` already sets the build command and caching.
**Vercel**: import the repository, framework "Astro", no settings needed.

Add the environment variable `PUBLIC_WEB3FORMS_KEY` (free key from web3forms.com, created with the
agency email) to enable the email forms. Without it, the forms fall back to opening the visitor's
email app.

**Call-back leads** ("leave your number, we call you"): the form on the booking, contact and trip pages
emails each lead through Web3Forms. To also receive each lead **as a WhatsApp message** on the agency
phone (Netlify only):
1. From the agency phone, follow the free CallMeBot activation at callmebot.com (WhatsApp API) to get an API key.
2. On Netlify add `PUBLIC_LEAD_RELAY=1`, `CALLMEBOT_PHONE=212668395368` and `CALLMEBOT_APIKEY=<key>`.
   The key stays on the server (`netlify/functions/lead.mjs`), never in the page.
Without any key, the form opens WhatsApp with the visitor's details pre-filled.

Update `site` in `astro.config.mjs` and `site.url` in `src/config.ts` with the final domain.

## Quality checks

With `npm run preview` running in another terminal:

```bash
node scripts/axe.mjs /en/ /fr/circuits/ /ar/trips/toubkal-summit-3-days/   # accessibility (light + dark)
node scripts/shot.mjs <outDir> /ar/                                         # screenshots (W=, THEME=, FULL=1)
```

## Structure

```
src/
  config.ts             contact, prices, rates, keys
  content.config.ts     content schemas (trips, photos, reviews, faq)
  content/              trips/*.yaml, photos.json, faq.yaml, reviews.json
  i18n/                 routes (localised URLs), ui strings, catalog (shared vocabulary)
  pages/[lang]/[...path].astro   one router for every localised page
  views/                one file per page type
  components/           header, trip card, gallery, booking card, map…
  scripts/              small browser scripts (filters, booking, wishlist, email)
```
