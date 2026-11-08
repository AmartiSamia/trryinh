import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { itemKeys } from './i18n/catalog';

/** A text in the three site languages. */
const T = z.strictObject({
  en: z.string().min(1),
  fr: z.string().min(1),
  es: z.string().min(1),
  de: z.string().min(1),
  pt: z.string().min(1),
  ar: z.string().min(1),
});
/** A standard item (translated once in i18n/catalog.ts) or a custom text. */
const Item = z.union([z.enum(itemKeys), T]);

export const categories = ['trekking', 'desert', 'day-trip', 'culture', 'circuit', 'activity'] as const;
export const difficulties = ['easy', 'moderate', 'challenging', 'hard'] as const;
export const sleepTypes = ['guesthouse', 'refuge', 'camp', 'tent', 'hotel', 'riad'] as const;
export const meals = ['breakfast', 'lunch', 'dinner'] as const;

const photos = defineCollection({
  loader: file('src/content/photos.json'),
  schema: ({ image }) =>
    z.object({
      file: image(),
      alt: T,
      author: z.string(),
      licence: z.string(),
      licenceUrl: z.string(),
      source: z.url(),
      sourceName: z.string(),
      /** Tiny blurred preview (data URI) shown while the photo loads. */
      placeholder: z.string(),
    }),
});

const trips = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/trips' }),
  schema: z.object({
    category: z.enum(categories),
    /** false = Youssef has not confirmed he runs this trip / its details yet. */
    verified: z.boolean().default(false),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    /** Higher shows first when sorting by "popular". */
    popularity: z.number().default(50),

    title: T,
    summary: T,
    about: T,

    /** Days on the trip; use 0.5 for a half day. */
    days: z.number().positive(),
    nights: z.number().int().min(0).default(0),
    /** Shown instead of days for short activities, e.g. "3–4 h". */
    hours: z.string().optional(),
    difficulty: z.enum(difficulties),
    startCity: z.string(),
    endCity: z.string(),
    maxAltitude: z.number().optional(),
    bestMonths: z.array(z.number().int().min(1).max(12)).default([]),

    /** Per person, in MAD. At least one option is required. */
    price: z
      .object({
        shared: z.number().positive().optional(),
        private: z.number().positive().optional(),
        /** true once Youssef has confirmed the figure. */
        confirmed: z.boolean().default(false),
      })
      .refine((p) => p.shared || p.private, 'Give a shared or a private price'),
    groupMax: z.number().int().positive().optional(),
    /** Drives the "included" badges on trip cards. */
    includes: z.object({ meals: z.boolean(), transport: z.boolean(), nights: z.boolean() }),

    photos: z.array(reference('photos')).min(1),
    highlights: z.array(T).min(1),
    itinerary: z
      .array(
        z.object({
          title: T,
          text: T,
          /** Walking time, e.g. "5–6 h". */
          walk: z.string().optional(),
          /** Driving time, e.g. "1 h 30". */
          drive: z.string().optional(),
          altitude: z.number().optional(),
          sleep: z.object({ type: z.enum(sleepTypes), place: z.string() }).optional(),
          meals: z.array(z.enum(meals)).default([]),
          /** Optional hour-by-hour timeline. */
          schedule: z.array(z.object({ time: z.string(), text: T })).optional(),
        }),
      )
      .min(1),
    included: z.array(Item),
    excluded: z.array(Item),
    pack: z.array(Item).default([]),
    meetingPoint: T,
    pickupTime: z.string().optional(),
    goodToKnow: z.array(T).default([]),
    mapStops: z
      .array(
        z.object({
          name: z.string(),
          lat: z.number(),
          lng: z.number(),
          kind: z.enum(['start', 'stop', 'summit', 'sleep', 'end']).default('stop'),
        }),
      )
      .min(1),
    faq: z.array(z.object({ q: T, a: T })).default([]),
  }),
});

const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: z.object({
    lang: z.enum(['en', 'fr', 'es', 'de', 'pt', 'ar']),
    /** Same key across the three language versions of one article. */
    key: z.string(),
    title: z.string(),
    description: z.string(),
    photo: reference('photos'),
    date: z.coerce.date(),
    /** Articles stay marked as drafts until Youssef reviews them. */
    reviewed: z.boolean().default(false),
    relatedTrips: z.array(reference('trips')).default([]),
  }),
});

const reviews = defineCollection({
  loader: file('src/content/reviews.json'),
  schema: z.object({
    name: z.string(),
    country: z.string().length(2), // ISO code, used for the flag
    trip: reference('trips').optional(),
    date: z.coerce.date(),
    rating: z.number().min(1).max(5),
    text: z.string(),
    lang: z.enum(['en', 'fr', 'es', 'de', 'pt', 'ar']).optional(),
    source: z.enum(['google', 'tripadvisor', 'email', 'whatsapp']),
    sourceUrl: z.url().optional(),
  }),
});

const faq = defineCollection({
  loader: file('src/content/faq.yaml'),
  schema: z.object({
    group: z.enum(['booking', 'payment', 'safety', 'children', 'food', 'weather']),
    q: T,
    a: T,
    home: z.boolean().default(false),
  }),
});

export const collections = { photos, trips, guide, reviews, faq };
