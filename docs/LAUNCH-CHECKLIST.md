# Iberdan: launch checklist

Status on 7 November 2026. Site built locally (`npm run build`: 0 type errors, 140 pages).
Not deployed yet: connect the repository to Netlify or Vercel (see README).

## Quality results

### Lighthouse (mobile, simulated 4G, local preview)

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS |
|---|---|---|---|---|---|---|
| `/en/` home | 99 | 100 | 100 | 100 | 2.1 s | 0 |
| `/fr/` home | 99 | 100 | 100 | 100 | 2.1 s | 0 |
| `/ar/` home | 99 | 100 | 100 | 100 | 2.0 s | 0 |
| `/en/trips/` | 99 | 100 | 100 | 100 | 1.9 s | 0 |
| `/ar/trips/` | 99 | 100 | 100 | 100 | 1.7 s | 0 |
| `/en/trips/toubkal-summit-3-days/` | 98 | 100 | 100 | 100 | 2.2 s | 0.001 |
| `/ar/trips/marrakech-merzouga-3-days/` | 98 | 100 | 100 | 100 | 2.1 s | 0.037 |
| `/fr/sur-mesure/` | 100 | 100 | 100 | 100 | 1.7 s | 0 |
| `/en/guide/toubkal-what-to-expect/` | 98 | 100 | 100 | 69* | 2.3 s | 0 |

\* Guide articles are deliberately `noindex` while they are drafts. SEO goes to 100 once
`reviewed: true` is set. Scores on the live host (with HTTP/2 + compression) should be similar or better.

### Accessibility (axe-core, WCAG 2.0/2.1/2.2 A + AA)

- **0 violations** on 20 pages × light and dark theme (home, trips list, 3 trip pages, tailor-made,
  about, reviews, FAQ, contact, wishlist, photo credits, guide, article, legal, 404), in en/fr/ar.
- Mobile (390 px): 0 violations on trips list, trip page (Arabic) and tailor-made.
- Reflow at 320 px (= 400 % zoom): no horizontal scrolling on 11 checked pages.
- Keyboard: skip link first; filters, tabs (arrow keys, RTL-aware), gallery lightbox
  (arrows, Escape), dialogs (focus trapped, Escape closes, focus returns), steppers.
- `prefers-reduced-motion`: animations off; content never waits for an animation.

### RTL check (Arabic)

| Page | Result |
|---|---|
| Home `/ar/` | Layout mirrored, arrows flipped, Readex Pro Arabic, prices/temperatures stay LTR and readable |
| Trips list `/ar/trips/` | Filters, chips, sort and Arabic plural counts ("5 رحلات", "30 رحلة") correct |
| Trip page `/ar/trips/toubkal-summit-3-days/` | Timeline line on the right, times LTR, place names in Arabic, bottom sheet and steppers mirrored |

### Dark / light check

Both themes designed separately (deep indigo night, not inverted). Follows the system on first
visit, toggle remembered, no flash on load. Checked visually on home, trips list and trip pages;
axe contrast checks pass in both.

### Other checks

- Booking: estimate updates with travellers, option and currency; WhatsApp message pre-filled
  in the visitor's language (trip, date, adults, children, option, estimate, language, link).
- Email forms: validation with linked error messages; without a Web3Forms key they fall back to
  the visitor's email app with the request pre-written.
- SEO: translated titles/descriptions, canonical + hreflang on every page, sitemap (126 URLs),
  robots.txt, JSON-LD (TravelAgency, TouristTrip + Offer, FAQPage, BreadcrumbList, Article),
  Open Graph image per trip.

## TODO(youssef): to confirm before launch

Search the code for `TODO(youssef)` to find each one in place.

### Name, domain, accounts
- [ ] Register **iberdan.com** and **iberdan.ma** (both looked free on 7 Nov 2026), then update
      `site.url` in `src/config.ts` and `site` in `astro.config.mjs` if different.
- [ ] Create the mailbox **contact@iberdan.com**.
- [ ] Create a free Web3Forms key with that email and add `PUBLIC_WEB3FORMS_KEY` on the host.
- [ ] Instagram: keep `hk_atlas20` or create an Iberdan account? Facebook and TikTok links.
- [ ] Google Business profile and TripAdvisor page links (for "Leave a review").

### Contact and legal
- [ ] Confirm WhatsApp/phone **+212 668 395 368** (taken from hikingtoatlas.com).
- [ ] Exact address, postal code, office position on the map, opening hours.
- [ ] **Mountain guide licence number** and **agency registration** (RC / ICE / tourism licence).
- [ ] Year the agency started.
- [ ] Payment method and deposit.
- [ ] **Cancellation policy**: deadlines and refund amounts (template has `[to be confirmed]` gaps).
- [ ] Have privacy and terms checked; CNDP declaration number if any (law 09-08).
      Then set `legal.draft = false`.

### Prices and trips
Only **Toubkal 3 days (1,450 MAD)** is a confirmed price. All others are placeholders; the market
range found is written at the top of each trip file.
- [ ] Toubkal 3 days: is 1,450 MAD the shared price? Private price? Max group size?
      Day 2 "08H00 déjeuner à Imlil" was read as **breakfast**: correct?
- [ ] Prices from hikingtoatlas.com to confirm: Ifni & Toubkal 6 days (5,000 MAD; the page also
      says €461), Amsouzart (1,500 MAD), Tamsoult and Tamatert (shown as €138 ≈ 1,450 MAD).
- [ ] Prices for the other 24 trips (shared and private).
- [ ] **Which trips you really run.** Treks marked `verified: false` were written from the standard
      routes: Toubkal 2 days, winter ascent, M'Goun, Imlil & Chamharouch day, and every desert,
      city, circuit and activity trip. Remove or set `draft: true` on any you do not offer.
- [ ] Group size limits, pickup areas and times, child prices and age limit (`booking.childFactor`).
- [ ] Partners: desert camps, balloon operator, hammam, stable, quad operator, city guides in
      Marrakech and Fes, cooking class host.
- [ ] "Ourika & Setti Fatma" and "Ourika valley" were merged into one day trip: OK, or two versions?
- [ ] Exchange rates (EUR 10.5, USD 9.6 MAD).
- [ ] Season temperatures on the home page (approximate averages).

### Photos
- [ ] Your own trip photos to replace the Wikimedia Commons ones over time
      (the original `images/` folder with 16 photos was never received). Photos now come from
      Wikimedia Commons and Unsplash, credited on the Photo credits page.

### Texts to review
- [ ] **Spanish, German, Portuguese** (added 8 Nov 2026): native review recommended (`TODO(review-es/de/pt)`).
- [ ] **Arabic**: every Arabic text needs a native review (`TODO(review-ar)` in `src/i18n/ui.ts`,
      `src/i18n/catalog.ts`, trip files, FAQ, guide, page files).
- [ ] Check the FAQ answers (payment, cancellation, children, group size).

## Not done / out of scope
- Instagram strip on the home page (optional in the brief): skipped. Stock photos presented as
  "our Instagram" would be misleading. Add it once there is a real feed.
- Analytics: off. Set `analytics.plausibleDomain` to enable Plausible (no cookie banner needed).
- The original zip (`index.html` with the `TREKS` array + `images/`) was never received; the 10
  Atlas treks were rebuilt from hikingtoatlas.com and the standard routes.
