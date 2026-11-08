export const locales = ['en', 'fr', 'es', 'de', 'pt', 'ar'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

export const langMeta: Record<Lang, { label: string; short: string; dir: 'ltr' | 'rtl'; ogLocale: string; intl: string }> = {
  en: { label: 'English', short: 'EN', dir: 'ltr', ogLocale: 'en_GB', intl: 'en-GB' },
  fr: { label: 'Français', short: 'FR', dir: 'ltr', ogLocale: 'fr_FR', intl: 'fr-FR' },
  es: { label: 'Español', short: 'ES', dir: 'ltr', ogLocale: 'es_ES', intl: 'es-ES' },
  de: { label: 'Deutsch', short: 'DE', dir: 'ltr', ogLocale: 'de_DE', intl: 'de-DE' },
  pt: { label: 'Português', short: 'PT', dir: 'ltr', ogLocale: 'pt_PT', intl: 'pt-PT' },
  // Latin digits keep prices and times readable for every visitor.
  ar: { label: 'العربية', short: 'ع', dir: 'rtl', ogLocale: 'ar_MA', intl: 'ar-MA-u-nu-latn' },
};

export const isLang = (v: unknown): v is Lang => locales.includes(v as Lang);

/**
 * Localised path segments for each page. European languages get their own
 * slugs; Arabic keeps Latin slugs so links stay readable when shared on WhatsApp.
 */
export const routes = {
  home: { en: '', fr: '', es: '', de: '', pt: '', ar: '' },
  trips: { en: 'trips', fr: 'circuits', es: 'viajes', de: 'reisen', pt: 'viagens', ar: 'trips' },
  book: { en: 'book', fr: 'reserver', es: 'reservar', de: 'buchen', pt: 'reservar', ar: 'book' },
  tailorMade: { en: 'tailor-made', fr: 'sur-mesure', es: 'a-medida', de: 'individuell', pt: 'a-medida', ar: 'tailor-made' },
  reviews: { en: 'reviews', fr: 'avis', es: 'opiniones', de: 'bewertungen', pt: 'avaliacoes', ar: 'reviews' },
  guide: { en: 'guide', fr: 'guide', es: 'guia', de: 'reisefuehrer', pt: 'guia', ar: 'guide' },
  faq: { en: 'faq', fr: 'faq', es: 'preguntas-frecuentes', de: 'faq', pt: 'perguntas-frequentes', ar: 'faq' },
  contact: { en: 'contact', fr: 'contact', es: 'contacto', de: 'kontakt', pt: 'contacto', ar: 'contact' },
  wishlist: { en: 'wishlist', fr: 'favoris', es: 'favoritos', de: 'merkliste', pt: 'favoritos', ar: 'wishlist' },
  credits: { en: 'photo-credits', fr: 'credits-photos', es: 'creditos-fotos', de: 'bildnachweise', pt: 'creditos-fotos', ar: 'photo-credits' },
  privacy: { en: 'legal/privacy', fr: 'mentions/confidentialite', es: 'legal/privacidad', de: 'rechtliches/datenschutz', pt: 'legal/privacidade', ar: 'legal/privacy' },
  terms: { en: 'legal/terms', fr: 'mentions/conditions', es: 'legal/condiciones', de: 'rechtliches/agb', pt: 'legal/termos', ar: 'legal/terms' },
  cancellation: { en: 'legal/cancellation', fr: 'mentions/annulation', es: 'legal/cancelacion', de: 'rechtliches/stornierung', pt: 'legal/cancelamento', ar: 'legal/cancellation' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** A text in every site language (content, page copy). */
export type Text = Record<Lang, string>;

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
