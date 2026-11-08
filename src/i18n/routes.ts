export const locales = ['en', 'fr', 'ar'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

export const langMeta: Record<Lang, { label: string; short: string; dir: 'ltr' | 'rtl'; ogLocale: string; intl: string }> = {
  en: { label: 'English', short: 'EN', dir: 'ltr', ogLocale: 'en_GB', intl: 'en-GB' },
  fr: { label: 'Français', short: 'FR', dir: 'ltr', ogLocale: 'fr_FR', intl: 'fr-FR' },
  // Latin digits keep prices and times readable for every visitor.
  ar: { label: 'العربية', short: 'ع', dir: 'rtl', ogLocale: 'ar_MA', intl: 'ar-MA-u-nu-latn' },
};

export const isLang = (v: unknown): v is Lang => locales.includes(v as Lang);

/**
 * Localised path segments for each page. French gets French slugs;
 * Arabic keeps Latin slugs so links stay readable when shared on WhatsApp.
 */
export const routes = {
  home: { en: '', fr: '', ar: '' },
  trips: { en: 'trips', fr: 'circuits', ar: 'trips' },
  tailorMade: { en: 'tailor-made', fr: 'sur-mesure', ar: 'tailor-made' },
  reviews: { en: 'reviews', fr: 'avis', ar: 'reviews' },
  guide: { en: 'guide', fr: 'guide', ar: 'guide' },
  faq: { en: 'faq', fr: 'faq', ar: 'faq' },
  contact: { en: 'contact', fr: 'contact', ar: 'contact' },
  wishlist: { en: 'wishlist', fr: 'favoris', ar: 'wishlist' },
  credits: { en: 'photo-credits', fr: 'credits-photos', ar: 'photo-credits' },
  privacy: { en: 'legal/privacy', fr: 'mentions/confidentialite', ar: 'legal/privacy' },
  terms: { en: 'legal/terms', fr: 'mentions/conditions', ar: 'legal/terms' },
  cancellation: { en: 'legal/cancellation', fr: 'mentions/annulation', ar: 'legal/cancellation' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Build a localised URL path, always with a trailing slash. */
export function url(lang: Lang, key: RouteKey, slug?: string): string {
  const seg = routes[key][lang];
  const parts = [lang, seg, slug].filter(Boolean);
  return `/${parts.join('/')}/`;
}

/** The same page in every language, for hreflang and the language switcher. */
export function alternates(key: RouteKey, slug?: string | Partial<Record<Lang, string>>): Record<Lang, string> {
  const out = {} as Record<Lang, string>;
  for (const l of locales) {
    const s = typeof slug === 'string' ? slug : slug?.[l];
    out[l] = url(l, key, s);
  }
  return out;
}
