/** Sends a request by email through Web3Forms (no backend needed). */
import { forms } from '../config';

export const emailConfigured = () => !!forms.accessKey;

export async function sendEmail(subject: string, fields: Record<string, string>): Promise<boolean> {
  if (!forms.accessKey) return false;
  try {
    const res = await fetch(forms.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: forms.accessKey, subject, from_name: 'Iberdan website', ...fields }),
    });
    const json = await res.json().catch(() => ({}));
    return res.ok && json.success !== false;
  } catch {
    return false;
  }
}

/** Shows an error under a field and links it with aria-describedby. */
export function fieldError(input: HTMLInputElement | HTMLTextAreaElement, message: string | null) {
  const id = `${input.id}-err`;
  let el = document.getElementById(id);
  if (!message) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    el?.remove();
    return true;
  }
  if (!el) {
    el = document.createElement('p');
    el.id = id;
    el.className = 'field-error';
    input.insertAdjacentElement('afterend', el);
  }
  el.textContent = message;
  input.setAttribute('aria-invalid', 'true');
  input.setAttribute('aria-describedby', id);
  return false;
}

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
