/**
 * Site-wide settings. Change contact details, prices and rates here only.
 * Anything marked TODO(youssef) must be confirmed before launch.
 */

export const site = {
  name: 'Iberdan',
  /** Tifinagh spelling of the name ("paths" in Tamazight). */
  nameTifinagh: 'ⵉⴱⵔⴷⴰⵏ',
  nameAr: 'إيبردان',
  /** Production URL, used for canonical links, sitemap and Open Graph. */
  url: 'https://iberdan.com', // TODO(youssef): register iberdan.com (+ iberdan.ma) and confirm the final domain
  founder: 'Youssef Ait Taguem',
  foundingYear: 2026, // TODO(youssef): year the agency started
} as const;

export const contact = {
  /** International format, digits only — used for wa.me links. */
  whatsapp: '212668395368', // TODO(youssef): confirm this is the agency WhatsApp (taken from hikingtoatlas.com)
  phone: '+212 6 68 39 53 68', // TODO(youssef): confirm
  email: 'contact@iberdan.com', // TODO(youssef): create this mailbox once the domain is registered
  address: {
    street: 'Elhaous', // TODO(youssef): confirm exact address
    locality: 'Imlil',
    region: 'Al Haouz, Marrakech-Safi',
    postalCode: '40000', // TODO(youssef): confirm postal code (taken from hikingtoatlas.com)
    country: 'MA',
  },
  geo: { lat: 31.1366, lng: -7.9196 }, // Imlil village centre — TODO(youssef): exact office position
  /** Opening hours shown on the contact page (local time, Africa/Casablanca). */
  hours: { days: 'Mon–Sun', open: '08:00', close: '20:00' }, // TODO(youssef): confirm hours
} as const;

export const social = {
  instagram: 'https://instagram.com/hk_atlas20', // TODO(youssef): new account for Iberdan?
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
  },
} as const;

export type Currency = 'EUR' | 'MAD' | 'USD';
export const currencies: Currency[] = ['EUR', 'MAD', 'USD'];

/** Email form endpoint (Web3Forms). The key is public by design but kept in env. */
export const forms = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '', // TODO(youssef): create a free key at web3forms.com with the agency email
} as const;

/** Privacy-friendly analytics, off by default. */
export const analytics = {
  plausibleDomain: '', // set to e.g. 'iberdan.com' to enable Plausible
} as const;

/** Booking estimate settings. */
export const booking = {
  /** Child price as a share of the adult price (1 = full price). */
  childFactor: 1, // TODO(youssef): child discount (e.g. 0.5 for half price) and the age limit
} as const;
