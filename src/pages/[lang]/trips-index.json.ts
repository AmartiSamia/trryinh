/** Small static index of trips per language, used by the wishlist and "recently viewed". */
import type { APIRoute, GetStaticPaths } from 'astro';
import { getImage } from 'astro:assets';
import { locales, url, type Lang } from '../../i18n/routes';
import { durationLabel, getTrips, priceFrom, tripPhotos } from '../../lib/trips';

export const getStaticPaths = (() => locales.map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const trips = await getTrips();
  const out = await Promise.all(
    trips.map(async (tr) => {
      const [cover] = await tripPhotos(tr);
      const img = await getImage({ src: cover.data.file, width: 480, format: 'webp' });
      return {
        slug: tr.id,
        title: tr.data.title[lang],
        href: url(lang, 'trips', tr.id),
        duration: durationLabel(tr, lang),
        priceMad: priceFrom(tr),
        image: img.src,
        placeholder: cover.data.placeholder,
      };
    }),
  );
  return new Response(JSON.stringify(out), { headers: { 'Content-Type': 'application/json' } });
};
