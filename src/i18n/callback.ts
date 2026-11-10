/**
 * "We call you back" lead form + "What happens next" steps, in the 6 languages.
 * TODO(review-ar/es/de/pt): native review.
 */
import type { Lang } from './routes';

type Strings = {
  eyebrow: string;
  title: string;
  text: string;
  name: string;
  phone: string;
  code: string;
  channel: string;
  viaWa: string;
  viaCall: string;
  submit: string;
  sending: string;
  ok: string;
  err: string;
  invalidPhone: string;
  invalidName: string;
  privacy: string;
  steps: [string, string][];
  stepsTitle: string;
  mailSubject: string;
  waText: string;
};

export const callback: Record<Lang, Strings> = {
  en: {
    eyebrow: 'Free call-back',
    title: 'Rather talk to a real person?',
    text: 'Leave your number. We call or WhatsApp you back, usually within a few hours, and answer every question before you decide.',
    name: 'Your name',
    phone: 'Phone number',
    code: 'Country code',
    channel: 'How should we reach you?',
    viaWa: 'WhatsApp',
    viaCall: 'Phone call',
    submit: 'Call me back',
    sending: 'Sending…',
    ok: 'Thank you, {name}! We have your number and will contact you very soon.',
    err: 'Sending failed. Please write to us on WhatsApp instead.',
    invalidPhone: 'Please enter a valid phone number.',
    invalidName: 'Please enter your name.',
    privacy: 'We use your number only to answer you. No spam, no sharing.',
    stepsTitle: 'What happens next?',
    steps: [
      ['Send your request', 'Through WhatsApp, by email, or just leave your number. Free and with no commitment.'],
      ['A real person answers', 'Usually within a few hours: availability, the final price and honest advice.'],
      ['You confirm, we take care of the rest', 'Programme, pickup time and a direct contact for your trip. You pay nothing online.'],
    ],
    mailSubject: 'Call-back request',
    waText: 'Hello Hiking to Atlas, please contact me: {name}, {phone}.',
  },
  fr: {
    eyebrow: 'Rappel gratuit',
    title: 'Vous préférez parler à quelqu’un ?',
    text: 'Laissez votre numéro. Nous vous rappelons ou vous écrivons sur WhatsApp, en général en quelques heures, et répondons à toutes vos questions avant que vous décidiez.',
    name: 'Votre nom',
    phone: 'Numéro de téléphone',
    code: 'Indicatif',
    channel: 'Comment vous joindre ?',
    viaWa: 'WhatsApp',
    viaCall: 'Appel',
    submit: 'Rappelez-moi',
    sending: 'Envoi…',
    ok: 'Merci, {name} ! Nous avons votre numéro et vous contactons très vite.',
    err: 'L’envoi a échoué. Écrivez-nous plutôt sur WhatsApp.',
    invalidPhone: 'Saisissez un numéro de téléphone valide.',
    invalidName: 'Saisissez votre nom.',
    privacy: 'Votre numéro sert uniquement à vous répondre. Pas de spam, pas de partage.',
    stepsTitle: 'Et ensuite ?',
    steps: [
      ['Envoyez votre demande', 'Par WhatsApp, par e-mail, ou laissez simplement votre numéro. Gratuit et sans engagement.'],
      ['Une vraie personne vous répond', 'En général en quelques heures : disponibilité, prix final et conseils honnêtes.'],
      ['Vous confirmez, on s’occupe du reste', 'Programme, heure de prise en charge et un contact direct pour votre voyage. Rien à payer en ligne.'],
    ],
    mailSubject: 'Demande de rappel',
    waText: 'Bonjour Hiking to Atlas, merci de me contacter : {name}, {phone}.',
  },
  es: {
    eyebrow: 'Le llamamos gratis',
    title: '¿Prefiere hablar con una persona?',
    text: 'Déjenos su número. Le llamamos o le escribimos por WhatsApp, normalmente en pocas horas, y respondemos a todas sus preguntas antes de que decida.',
    name: 'Su nombre',
    phone: 'Número de teléfono',
    code: 'Prefijo',
    channel: '¿Cómo le contactamos?',
    viaWa: 'WhatsApp',
    viaCall: 'Llamada',
    submit: 'Llámenme',
    sending: 'Enviando…',
    ok: '¡Gracias, {name}! Tenemos su número y le contactaremos muy pronto.',
    err: 'No se pudo enviar. Escríbanos por WhatsApp.',
    invalidPhone: 'Introduzca un número de teléfono válido.',
    invalidName: 'Introduzca su nombre.',
    privacy: 'Usamos su número solo para responderle. Sin spam y sin compartirlo.',
    stepsTitle: '¿Y después?',
    steps: [
      ['Envíe su solicitud', 'Por WhatsApp, por correo o dejando su número. Gratis y sin compromiso.'],
      ['Le responde una persona real', 'Normalmente en pocas horas: disponibilidad, precio final y consejos honestos.'],
      ['Usted confirma y nosotros nos ocupamos del resto', 'Programa, hora de recogida y un contacto directo para su viaje. No paga nada en línea.'],
    ],
    mailSubject: 'Solicitud de llamada',
    waText: 'Hola Hiking to Atlas, por favor contáctenme: {name}, {phone}.',
  },
  de: {
    eyebrow: 'Kostenloser Rückruf',
    title: 'Lieber mit einem Menschen sprechen?',
    text: 'Hinterlassen Sie Ihre Nummer. Wir rufen Sie an oder schreiben per WhatsApp, meist innerhalb weniger Stunden, und beantworten alle Fragen, bevor Sie sich entscheiden.',
    name: 'Ihr Name',
    phone: 'Telefonnummer',
    code: 'Vorwahl',
    channel: 'Wie sollen wir Sie erreichen?',
    viaWa: 'WhatsApp',
    viaCall: 'Anruf',
    submit: 'Rufen Sie mich zurück',
    sending: 'Wird gesendet…',
    ok: 'Danke, {name}! Wir haben Ihre Nummer und melden uns sehr bald.',
    err: 'Senden fehlgeschlagen. Bitte schreiben Sie uns stattdessen auf WhatsApp.',
    invalidPhone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
    invalidName: 'Bitte geben Sie Ihren Namen ein.',
    privacy: 'Wir nutzen Ihre Nummer nur, um Ihnen zu antworten. Kein Spam, keine Weitergabe.',
    stepsTitle: 'Wie geht es weiter?',
    steps: [
      ['Anfrage senden', 'Per WhatsApp, per E-Mail oder einfach Ihre Nummer hinterlassen. Kostenlos und unverbindlich.'],
      ['Ein echter Mensch antwortet', 'Meist innerhalb weniger Stunden: Verfügbarkeit, Endpreis und ehrliche Tipps.'],
      ['Sie bestätigen, wir kümmern uns um den Rest', 'Programm, Abholzeit und ein direkter Kontakt für Ihre Reise. Sie zahlen nichts online.'],
    ],
    mailSubject: 'Rückrufbitte',
    waText: 'Hallo Hiking to Atlas, bitte kontaktieren Sie mich: {name}, {phone}.',
  },
  pt: {
    eyebrow: 'Ligamos-lhe grátis',
    title: 'Prefere falar com uma pessoa?',
    text: 'Deixe o seu número. Ligamos ou escrevemos por WhatsApp, normalmente em poucas horas, e respondemos a todas as perguntas antes de decidir.',
    name: 'O seu nome',
    phone: 'Número de telefone',
    code: 'Indicativo',
    channel: 'Como o contactamos?',
    viaWa: 'WhatsApp',
    viaCall: 'Chamada',
    submit: 'Liguem-me',
    sending: 'A enviar…',
    ok: 'Obrigado, {name}! Temos o seu número e entraremos em contacto muito em breve.',
    err: 'O envio falhou. Escreva-nos antes pelo WhatsApp.',
    invalidPhone: 'Introduza um número de telefone válido.',
    invalidName: 'Introduza o seu nome.',
    privacy: 'Usamos o seu número apenas para lhe responder. Sem spam, sem partilha.',
    stepsTitle: 'E depois?',
    steps: [
      ['Envie o seu pedido', 'Por WhatsApp, por e-mail ou deixando apenas o seu número. Grátis e sem compromisso.'],
      ['Responde-lhe uma pessoa real', 'Normalmente em poucas horas: disponibilidade, preço final e conselhos honestos.'],
      ['Confirma e nós tratamos do resto', 'Programa, hora de recolha e um contacto direto para a sua viagem. Não paga nada online.'],
    ],
    mailSubject: 'Pedido de contacto',
    waText: 'Olá Hiking to Atlas, por favor contactem-me: {name}, {phone}.',
  },
  ar: {
    eyebrow: 'نتصل بكم مجانا',
    title: 'تفضلون الحديث مع شخص حقيقي؟',
    text: 'اتركوا رقمكم. نتصل بكم أو نراسلكم على واتساب، عادة خلال ساعات قليلة، ونجيب عن كل أسئلتكم قبل أن تقرروا.',
    name: 'الاسم',
    phone: 'رقم الهاتف',
    code: 'رمز الدولة',
    channel: 'كيف نتواصل معكم؟',
    viaWa: 'واتساب',
    viaCall: 'مكالمة هاتفية',
    submit: 'اتصلوا بي',
    sending: 'جارٍ الإرسال…',
    ok: 'شكرا {name}! توصلنا برقمكم وسنتواصل معكم قريبا جدا.',
    err: 'تعذر الإرسال. راسلونا على واتساب من فضلكم.',
    invalidPhone: 'أدخلوا رقم هاتف صحيحا.',
    invalidName: 'أدخلوا اسمكم.',
    privacy: 'نستعمل رقمكم فقط للرد عليكم. بلا رسائل مزعجة وبلا مشاركة.',
    stepsTitle: 'ماذا بعد؟',
    steps: [
      ['أرسلوا طلبكم', 'عبر واتساب أو البريد الإلكتروني، أو اتركوا رقمكم فقط. مجانا وبدون أي التزام.'],
      ['يجيبكم شخص حقيقي', 'عادة خلال ساعات قليلة: التوفر والسعر النهائي ونصائح صادقة.'],
      ['تؤكدون ونحن نتكفل بالباقي', 'البرنامج وموعد الانطلاق ورقم مباشر خاص برحلتكم. لا تدفعون شيئا عبر الإنترنت.'],
    ],
    mailSubject: 'طلب اتصال',
    waText: 'مرحبا Hiking to Atlas، المرجو التواصل معي: {name}، {phone}.',
  },
};

/** Calling codes offered first (the field also accepts any +code typed by hand). */
export const dialCodes: { region: string; code: string }[] = [
  { region: 'MA', code: '212' },
  { region: 'FR', code: '33' },
  { region: 'ES', code: '34' },
  { region: 'DE', code: '49' },
  { region: 'PT', code: '351' },
  { region: 'GB', code: '44' },
  { region: 'US', code: '1' },
  { region: 'BE', code: '32' },
  { region: 'NL', code: '31' },
  { region: 'CH', code: '41' },
  { region: 'IT', code: '39' },
  { region: 'AT', code: '43' },
  { region: 'BR', code: '55' },
  { region: 'AE', code: '971' },
  { region: 'SA', code: '966' },
];

/** The phone field starts on Morocco (+212) in every language. */
export const defaultRegion: Record<Lang, string> = { en: 'MA', fr: 'MA', es: 'MA', de: 'MA', pt: 'MA', ar: 'MA' };
