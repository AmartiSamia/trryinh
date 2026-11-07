/**
 * Client-side filtering for the trips list. The form state is the single
 * source of truth and is mirrored to the URL query string.
 */
type Forms = Record<string, string>;
const FIELDS = ['q', 'cat', 'dur', 'price', 'diff', 'city', 'private', 'sort'] as const;

export function initTripFilters() {
  const form = document.querySelector<HTMLFormElement>('[data-filters]');
  const grid = document.querySelector<HTMLElement>('[data-grid]');
  if (!form || !grid) return;
  const items = [...grid.querySelectorAll<HTMLElement>('[data-item]')];
  const count = document.querySelector<HTMLElement>('[data-count]')!;
  const empty = document.querySelector<HTMLElement>('[data-empty]')!;
  const badge = document.querySelector<HTMLElement>('[data-active-count]');
  const details = form.querySelector<HTMLDetailsElement>('[data-filter-details]')!;
  const forms: Forms = JSON.parse(count.dataset.forms!);
  const pr = new Intl.PluralRules(document.documentElement.lang);
  const sortSel = document.querySelector<HTMLSelectElement>('#f-sort')!;

  // Filters are always open on large screens.
  const mq = matchMedia('(min-width: 64rem)');
  const syncOpen = () => { if (mq.matches) details.open = true; };
  syncOpen();
  mq.addEventListener('change', syncOpen);

  // ---- Read the URL (also accepts ?where=cat:desert / ?where=q:Toubkal from the home search).
  const params = new URLSearchParams(location.search);
  const where = params.get('where');
  if (where?.startsWith('cat:')) params.set('cat', where.slice(4));
  if (where?.startsWith('q:')) params.set('q', where.slice(2));
  const set = (name: string, value: string) => {
    const els = form.elements.namedItem(name) ?? (name === 'sort' ? sortSel : null);
    if (!els) return;
    if (els instanceof RadioNodeList) {
      [...els].forEach((el) => ((el as HTMLInputElement).checked = (el as HTMLInputElement).value === value));
    } else if (els instanceof HTMLInputElement && els.type === 'checkbox') {
      els.checked = value === '1';
    } else (els as HTMLInputElement | HTMLSelectElement).value = value;
  };
  FIELDS.forEach((f) => params.get(f) && set(f, params.get(f)!));
  if (!form.querySelector('input[name="cat"]:checked')) set('cat', '');

  // Carry date and travellers from the home search into each trip link.
  const carry = new URLSearchParams();
  ['date', 'people'].forEach((k) => params.get(k) && carry.set(k, params.get(k)!));
  if ([...carry].length) {
    grid.querySelectorAll<HTMLAnchorElement>('h2 a').forEach((a) => (a.href += `?${carry}`));
  }

  // Currency-aware labels on the price buckets.
  const priceSel = form.querySelector<HTMLSelectElement>('[data-price-select]')!;
  const relabel = () => {
    const cur = document.documentElement.dataset.currency ?? 'EUR';
    const key = `label${cur[0]}${cur.slice(1).toLowerCase()}`; // data-label-eur -> labelEur
    [...priceSel.options].forEach((o) => { if (o.dataset[key]) o.text = o.dataset[key]!; });
  };
  relabel();
  window.addEventListener('currencychange', relabel);

  const norm = (v: string) => v.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  function apply(pushUrl = true) {
    const fd = new FormData(form!);
    const v = (k: string) => String(fd.get(k) ?? '');
    const q = norm(v('q').trim());
    const opt = priceSel.selectedOptions[0];
    const [min, max] = [Number(opt?.dataset.min ?? 0), Number(opt?.dataset.max ?? 1e9)];
    let shown = 0;
    for (const li of items) {
      const c = li.querySelector<HTMLElement>('[data-trip]')!.dataset;
      const price = Number(c.price);
      const ok =
        (!q || norm(c.search!).includes(q)) &&
        (!v('cat') || c.cat === v('cat')) &&
        (!v('dur') || c.dur === v('dur')) &&
        (!v('price') || (price >= min && price < max)) &&
        (!v('diff') || c.diff === v('diff')) &&
        (!v('city') || c.city === v('city')) &&
        (!v('private') || c.private === '1');
      li.hidden = !ok;
      if (ok) shown++;
    }
    // Sort
    const key = sortSel.value;
    const val = (li: HTMLElement) => li.querySelector<HTMLElement>('[data-trip]')!.dataset;
    const sorted = [...items].sort((a, b) => {
      const A = val(a), B = val(b);
      if (key === 'price-asc') return +A.price! - +B.price!;
      if (key === 'price-desc') return +B.price! - +A.price!;
      if (key === 'duration') return +A.days! - +B.days!;
      return +B.pop! - +A.pop!;
    });
    sorted.forEach((li) => grid!.append(li));

    count.textContent = (forms[pr.select(shown)] ?? forms.other).replace('{n}', String(shown));
    empty.hidden = shown > 0;

    // Active filter count (mobile badge) and URL.
    const out = new URLSearchParams();
    let active = 0;
    FIELDS.forEach((f) => {
      const value = f === 'sort' ? sortSel.value : v(f);
      if (value && !(f === 'sort' && value === 'popular')) {
        out.set(f, value);
        if (f !== 'sort') active++;
      }
    });
    carry.forEach((val, k) => out.set(k, val));
    if (badge) { badge.hidden = !active; badge.textContent = String(active); }
    if (pushUrl) history.replaceState(null, '', `${location.pathname}${out.size ? `?${out}` : ''}`);
  }

  form.addEventListener('input', () => apply());
  form.addEventListener('change', () => apply());
  sortSel.addEventListener('change', () => apply());
  form.addEventListener('submit', (e) => e.preventDefault());
  form.addEventListener('reset', () => setTimeout(() => { sortSel.value = 'popular'; apply(); }));
  apply(false);
}
