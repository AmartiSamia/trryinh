/**
 * Site-wide settings. Change contact details, prices and rates here only.
 * Anything marked TODO(youssef) must be confirmed before launch.
 */

export const site = {
  name: 'Hiking to Atlas',
  /** Short name used in the logo. */
  short: 'HTA',
  /** Production URL, used for canonical links, sitemap and Open Graph. */
  url: 'https://hikingtoatlas.com', // domain from the business card
} as const;

export const contact = {
  /** International format, digits only — used for wa.me links. */
  whatsapp: '212694379415', // from the business card (+212 694-379415). TODO(youssef): confirm it is on WhatsApp
  phone: '+212 694 379 415', // from the business card
  email: 'contact@hikingtoatlas.com', // TODO(youssef): confirm this mailbox exists
  address: {
    street: 'Elhaous', // TODO(youssef): confirm exact address
    locality: 'Imlil',
    region: 'Al Haouz, Marrakech-Safi',
    postalCode: '40000', // TODO(youssef): confirm postal code (taken from hikingtoatlas.com)
    country: 'MA',
  },
  geo: { lat: 31.1366, lng: -7.9196 }, // Imlil village centre — TODO(youssef): exact office position
  /** Opening hours shown on the contact page (local time, Africa/Casablanca). */
  /** Open every day, around the clock (answers on WhatsApp). */
  hours: { alwaysOpen: true },
} as const;

export const social = {
  instagram: 'https://instagram.com/hikingtoatlas', // from the business card
  facebook: '', // TODO(youssef)
  tiktok: '', // TODO(youssef)
  googleBusiness: '', // TODO(youssef): Google Business profile link (for reviews)
  tripadvisor: '', // TODO(youssef): TripAdvisor page link (for reviews)
} as const;

export const legal = {
  guideLicence: '', // TODO(youssef): mountain guide licence number
  agencyRegistration: '', // TODO(youssef): agency registration / RC / ICE / tourism licence number
  /** Shows a 'draft' notice on the legal pages until Youssef has validated them. */
  draft: true, // TODO(youssef): set to false once privacy, terms and cancellation texts are confirmed
} as const;

/**
 * Prices are stored in MAD (the currency Youssef quotes in).
 * Rates = how many MAD for 1 unit of the currency.
 * EUR rate 10.5 matches the conversion used on hikingtoatlas.com (1450 MAD ≈ €138).
 */
export const currency = {
  default: 'EUR' as Currency,
  ratesToMad: {
    MAD: 1,
    EUR: 10.5, // TODO(youssef): confirm the rate you want to use
    USD: 9.6, // TODO(youssef): confirm the rate you want to use
    GBP: 12.4, // TODO(youssef): confirm the rate you want to use
    CHF: 11.3, // TODO(youssef): confirm the rate you want to use
    CAD: 6.9, // TODO(youssef): confirm the rate you want to use
  },
} as const;

export type Currency = 'EUR' | 'MAD' | 'USD' | 'GBP' | 'CHF' | 'CAD';
export const currencies: Currency[] = ['EUR', 'USD', 'GBP', 'MAD', 'CHF', 'CAD'];
/** Symbol shown next to the code in the currency menu. */
export const currencySymbol: Record<Currency, string> = { EUR: '€', USD: '$', GBP: '£', MAD: 'DH', CHF: 'Fr', CAD: 'C$' };

/** Email form endpoint (Web3Forms). The key is public by design but kept in env. */
export const forms = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '', // TODO(youssef): create a free key at web3forms.com with the agency email
} as const;

/**
 * Call-back leads ("leave your number"). Always emailed through Web3Forms when the key is set.
 * relay: also forward each lead as a WhatsApp message to the agency phone through
 * netlify/functions/lead.mjs. Needs Netlify env vars PUBLIC_LEAD_RELAY=1,
 * CALLMEBOT_PHONE and CALLMEBOT_APIKEY (free key: see README).
 */
export const leads = {
  relay: import.meta.env.PUBLIC_LEAD_RELAY === '1',
} as const;

/** Privacy-friendly analytics, off by default. */
export const analytics = {
  plausibleDomain: '', // set to e.g. 'hikingtoatlas.com' to enable Plausible
} as const;

/** Booking estimate settings. */
export const booking = {
  /** Child price as a share of the adult price (1 = full price). */
  /** Private trips are for groups of at least this many people. */
  privateMin: 6,
  childFactor: 1, // TODO(youssef): child discount (e.g. 0.5 for half price) and the age limit
} as const;
