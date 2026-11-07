/** Wishlist and recently viewed trips, stored in this browser only. */
const KEY = 'wishlist';
const RECENT = 'recent';

const read = (k: string): string[] => {
  try { return JSON.parse(localStorage.getItem(k) ?? '[]'); } catch { return []; }
};
const write = (k: string, v: string[]) => {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch {}
};

export const getWishlist = () => read(KEY);
export function toggleWish(slug: string): boolean {
  const list = read(KEY);
  const on = !list.includes(slug);
  write(KEY, on ? [slug, ...list] : list.filter((s) => s !== slug));
  window.dispatchEvent(new CustomEvent('wishlistchange'));
  return on;
}

export const getRecent = () => read(RECENT);
export function addRecent(slug: string) {
  write(RECENT, [slug, ...read(RECENT).filter((s) => s !== slug)].slice(0, 8));
}

/** Sync every heart button on the page with the stored list. */
export function syncHearts() {
  const list = read(KEY);
  document.querySelectorAll<HTMLButtonElement>('[data-wish]').forEach((b) => {
    const on = list.includes(b.dataset.wish!);
    b.setAttribute('aria-pressed', String(on));
    b.setAttribute('aria-label', (on ? b.dataset.labelOn : b.dataset.labelOff) ?? '');
  });
}
