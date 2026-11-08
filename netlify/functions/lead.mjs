/**
 * Forwards a call-back lead to the agency's WhatsApp through CallMeBot.
 * The API key stays secret on the server (Netlify env vars):
 *   CALLMEBOT_PHONE   agency number in international format, e.g. 212668395368
 *   CALLMEBOT_APIKEY  key received from CallMeBot (see README)
 * Enable the call from the site with PUBLIC_LEAD_RELAY=1.
 */
const clean = (v, max) => String(v ?? '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);

export default async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const phone = process.env.CALLMEBOT_PHONE;
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (!phone || !apikey) return new Response('Relay not configured', { status: 503 });

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response('Bad request', { status: 400 });
  }
  const lead = {
    name: clean(body.name, 80),
    phone: clean(body.phone, 20),
    channel: clean(body.channel, 12),
    trip: clean(body.trip, 120),
    language: clean(body.language, 4),
  };
  if (!lead.name || !/^\+\d{6,15}$/.test(lead.phone)) return new Response('Invalid lead', { status: 422 });

  const text = [
    '📞 New call-back request (website)',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Contact by: ${lead.channel}`,
    `Trip: ${lead.trip || '-'}`,
    `Language: ${lead.language}`,
    `WhatsApp: https://wa.me/${lead.phone.slice(1)}`,
  ].join('\n');

  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&apikey=${encodeURIComponent(apikey)}&text=${encodeURIComponent(text)}`;
  const res = await fetch(url).catch(() => null);
  return new Response(res?.ok ? 'ok' : 'relay failed', { status: res?.ok ? 200 : 502 });
};
