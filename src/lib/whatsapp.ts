import { contact } from '../config';

/** wa.me link with a pre-filled message. Works on phone (app) and desktop (web). */
export const waLink = (text: string): string =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
