/** Schema.org JSON-LD builders. */
import { contact, site, social, legal } from '../config';
import { t } from '../i18n/ui';
import { url, type Lang } from '../i18n/routes';

const abs = (p: string) => new URL(p, site.url).href;

export function orgJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${site.url}/#agency`,
    name: site.name,
    alternateName: [site.nameTifinagh, site.nameAr],
    url: abs(url(lang, 'home')),
    logo: abs('/logo.svg'),
    description: t(lang).meta.description,
    founder: { '@type': 'Person', name: site.founder },
    telephone: contact.phone.replace(/\s/g, ''),
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      postalCode: contact.address.postalCode,
      addressCountry: contact.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: contact.geo.lat, longitude: contact.geo.lng },
    areaServed: { '@type': 'Country', name: 'Morocco' },
    knowsLanguage: ['en', 'fr', 'ar'],
    sameAs: Object.values(social).filter(Boolean),
    ...(legal.agencyRegistration ? { identifier: legal.agencyRegistration } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
  };
}

/** TouristTrip with an Offer per option (prices in EUR for search engines). */
export function tripJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image: string;
  itinerary: string[];
  offers: { name: string; priceEur: number }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    touristType: 'Travellers to Morocco',
    provider: { '@id': `${site.url}/#agency` },
    itinerary: {
      '@type': 'ItemList',
      itemListElement: opts.itinerary.map((name, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'TouristAttraction', name } })),
    },
    offers: opts.offers.map((o) => ({
      '@type': 'Offer',
      name: o.name,
      price: o.priceEur,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: opts.url,
      seller: { '@id': `${site.url}/#agency` },
    })),
  };
}
