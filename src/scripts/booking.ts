/** Booking card behaviour: estimate, WhatsApp link, mobile sheet, email dialog hand-off. */
import { booking, contact, type Currency } from '../config';
const PRIVATE_MIN = booking.privateMin;
import { convert, formatMoney } from '../lib/price';
import { langMeta, type Lang } from '../i18n/routes';

export interface BookingState {
  title: string;
  url: string;
  date: string;
  adults: number;
  children: number;
  option: 'shared' | 'private';
  totalText: string;
}

let current: BookingState | null = null;
export const getBookingState = () => current;

export function initBooking() {
  const form = document.querySelector<HTMLFormElement>('[data-booking]');
  if (!form) return;
  const root = document.documentElement;
  const lang = root.lang as Lang;
  const s = JSON.parse(form.dataset.s!);
  const totalEl = form.querySelector<HTMLOutputElement>('[data-total]')!;
  const wa = form.querySelector<HTMLAnchorElement>('[data-wa]')!;
  const childNote = form.querySelector<HTMLElement>('[data-child-note]');
  const prices = { shared: Number(form.dataset.shared) || 0, private: Number(form.dataset.private) || 0 };
  const childFactor = Number(form.dataset.child);

  // Today as minimum; pre-fill date/travellers carried from the search.
  const dateInput = form.querySelector<HTMLInputElement>('[name="date"]')!;
  dateInput.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  const qs = new URLSearchParams(location.search);
  if (qs.get('date') && qs.get('date')! >= dateInput.min) dateInput.value = qs.get('date')!;
  const people = Number(qs.get('people'));
  if (people >= 1 && people <= 30) (form.elements.namedItem('adults') as HTMLInputElement).value = String(people);

  const num = (name: string, min: number) => {
    const el = form.elements.namedItem(name) as HTMLInputElement;
    const v = Math.min(30, Math.max(min, Math.round(Number(el.value) || 0)));
    return v;
  };

  function update() {
    let adults = num('adults', 1);
    const children = num('children', 0);
    const option = (new FormData(form!).get('option') as 'shared' | 'private') ?? 'shared';
    // Private groups start at PRIVATE_MIN people.
    if (option === 'private' && adults + children < PRIVATE_MIN) {
      adults = PRIVATE_MIN - children;
      (form!.elements.namedItem('adults') as HTMLInputElement).value = String(adults);
    }
    const perPerson = prices[option] || prices.shared || prices.private;
    const totalMad = perPerson * (adults + children * childFactor);
    const cur = (root.dataset.currency ?? 'EUR') as Currency;
    const totalText = formatMoney(convert(totalMad, cur), cur, lang);
    totalEl.textContent = totalText;
    if (childNote) childNote.hidden = children === 0;

    const date = dateInput.value
      ? new Intl.DateTimeFormat(langMeta[lang].intl, { dateStyle: 'full' }).format(new Date(`${dateInput.value}T12:00`))
      : s.missing;
    current = { title: form!.dataset.title!, url: form!.dataset.url!, date, adults, children, option, totalText };

    const lines = [
      s.hello,
      `*${current.title}*`,
      `${s.date}: ${date}`,
      `${s.adults}: ${adults}`,
      ...(children ? [`${s.children}: ${children}`] : []),
      `${s.option}: ${s[option]}`,
      `${s.total}: ${totalText}`,
      `${s.lang}: ${s.langName}`,
      `${s.link}: ${current.url}`,
    ];
    wa.href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  form.addEventListener('input', update);
  form.addEventListener('change', update);
  window.addEventListener('currencychange', update);
  form.querySelectorAll<HTMLButtonElement>('[data-step]').forEach((b) =>
    b.addEventListener('click', () => {
      const [sign, name] = [b.dataset.step![0], b.dataset.step!.slice(1)];
      const el = form.elements.namedItem(name) as HTMLInputElement;
      el.value = String(Math.min(30, Math.max(Number(el.min), Number(el.value) + (sign === '+' ? 1 : -1))));
      update();
    }),
  );
  // Clamp typed values when leaving the field.
  ['adults', 'children'].forEach((n) =>
    (form.elements.namedItem(n) as HTMLInputElement).addEventListener('blur', (e) => {
      (e.target as HTMLInputElement).value = String(num(n, n === 'adults' ? 1 : 0));
      update();
    }),
  );
  update();

  // Mobile: move the one form into the bottom sheet; back to the sidebar on desktop.
  const home = document.querySelector<HTMLElement>('[data-booking-home]')!;
  const sheet = document.querySelector<HTMLDialogElement>('[data-booking-sheet]')!;
  const slot = sheet.querySelector<HTMLElement>('[data-sheet-slot]')!;
  const mq = matchMedia('(min-width: 64rem)');
  const place = () => {
    if (mq.matches) {
      if (sheet.open) sheet.close();
      home.append(form);
    } else slot.append(form);
  };
  place();
  mq.addEventListener('change', place);
  const opener = document.querySelector<HTMLButtonElement>('[data-sheet-open]');
  opener?.addEventListener('click', () => sheet.showModal());
  sheet.querySelector('[data-sheet-close]')!.addEventListener('click', () => sheet.close());
  sheet.addEventListener('click', (e) => { if (e.target === sheet) sheet.close(); });
  sheet.addEventListener('close', () => opener?.focus());

  // Email: open the dialog with the current request summary.
  form.querySelector('[data-email-open]')!.addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('openemailrequest', { detail: current }));
  });
}
