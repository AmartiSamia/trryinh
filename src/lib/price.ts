import { currency, type Currency } from '../config';
import { langMeta, type Lang } from '../i18n/routes';

/** Convert a MAD amount to another currency and round so it looks natural. */
export function convert(mad: number, to: Currency): number {
  const v = mad / currency.ratesToMad[to];
  if (to === 'MAD') return Math.round(v / 10) * 10; // nearest 10 MAD
  return Math.round(v); // whole euros / dollars
}

export function formatMoney(amount: number, cur: Currency, lang: Lang): string {
  return new Intl.NumberFormat(langMeta[lang].intl, {
    style: 'currency',
    currency: cur,
    // € and £ are unambiguous; $ needs "US$"/"CA$" so keep the regional symbol there.
    currencyDisplay: cur === 'MAD' ? 'code' : cur === 'EUR' || cur === 'GBP' ? 'narrowSymbol' : 'symbol',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);
}

export const formatPrice = (mad: number, cur: Currency, lang: Lang): string => formatMoney(convert(mad, cur), cur, lang);
