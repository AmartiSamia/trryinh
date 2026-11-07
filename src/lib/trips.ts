import { getCollection, getEntries, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/routes';

export type Trip = CollectionEntry<'trips'>;
export type Photo = CollectionEntry<'photos'>;

/** All published trips, most popular first. */
export async function getTrips(): Promise<Trip[]> {
  const trips = await getCollection('trips', (t) => !t.data.draft);
  return trips.sort((a, b) => b.data.popularity - a.data.popularity);
}

/** Lowest per-person price in MAD (shared if offered, else private). */
export const priceFrom = (t: Trip): number =>
  Math.min(...[t.data.price.shared, t.data.price.private].filter((v): v is number => typeof v === 'number'));

export const isPrivateOnly = (t: Trip): boolean => !t.data.price.shared && !!t.data.price.private;

export const tripPhotos = (t: Trip): Promise<Photo[]> => getEntries(t.data.photos);

/* ---------- Plurals (Arabic has dual and "few"/"many" forms) ---------- */
type Forms = { one: string; two?: string; few?: string; many?: string; other: string };
const rules: Partial<Record<Lang, Intl.PluralRules>> = {};
export function plural(lang: Lang, n: number, forms: Forms): string {
  const r = (rules[lang] ??= new Intl.PluralRules(lang));
  const key = r.select(n) as keyof Forms;
  return (forms[key] ?? forms.other).replace('{n}', String(n));
}

const dayForms: Record<Lang, Forms> = {
  en: { one: '1 day', other: '{n} days' },
  fr: { one: '1 jour', other: '{n} jours' },
  ar: { one: 'يوم واحد', two: 'يومان', few: '{n} أيام', many: '{n} يوما', other: '{n} يوم' },
};
const nightForms: Record<Lang, Forms> = {
  en: { one: '1 night', other: '{n} nights' },
  fr: { one: '1 nuit', other: '{n} nuits' },
  ar: { one: 'ليلة واحدة', two: 'ليلتان', few: '{n} ليالٍ', many: '{n} ليلة', other: '{n} ليلة' },
};
export const tripCountForms: Record<Lang, Forms> = {
  en: { one: '1 trip', other: '{n} trips' },
  fr: { one: '1 voyage', other: '{n} voyages' },
  ar: { one: 'رحلة واحدة', two: 'رحلتان', few: '{n} رحلات', many: '{n} رحلة', other: '{n} رحلة' },
};
const halfDay: Record<Lang, string> = { en: 'Half day', fr: 'Demi-journée', ar: 'نصف يوم' };

/** "3 days · 2 nights", "1 day", or "Half day · 3–4 h". */
export function durationLabel(t: Trip, lang: Lang): string {
  const { days, nights, hours } = t.data;
  if (days < 1) return hours ? `${halfDay[lang]} · ${hours}` : halfDay[lang];
  const d = plural(lang, days, dayForms[lang]);
  return nights ? `${d} · ${plural(lang, nights, nightForms[lang])}` : d;
}

/** Bucket used by the duration filter. */
export const durationBucket = (t: Trip): 'day' | 'short' | 'long' =>
  t.data.days <= 1 ? 'day' : t.data.days <= 3 ? 'short' : 'long';
