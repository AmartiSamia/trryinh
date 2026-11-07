import type { Lang } from './routes';

/*
 * Interface strings. English is the reference: TypeScript makes sure
 * French and Arabic define every key.
 * TODO(review-ar): every Arabic string in this file needs a native review.
 */

const en = {
  meta: {
    tagline: 'Morocco, the local way',
    description:
      'Treks, desert trips, day trips and tailor-made journeys across Morocco, organised from Imlil by a licensed mountain guide. Youssef answers himself on WhatsApp.',
  },
  a11y: {
    skip: 'Skip to content',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    currency: 'Currency',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    home: 'Iberdan, home page',
    breadcrumb: 'Breadcrumb',
    footer: 'Footer',
  },
  nav: {
    trips: 'Trips',
    tailorMade: 'Tailor-made',
    guide: 'Travel guide',
    about: 'About',
    reviews: 'Reviews',
    faq: 'FAQ',
    contact: 'Contact',
    wishlist: 'My wishlist',
    credits: 'Photo credits',
    privacy: 'Privacy',
    terms: 'Terms',
    cancellation: 'Cancellation & refunds',
  },
  common: {
    whatsapp: 'WhatsApp',
    chatWhatsapp: 'Chat on WhatsApp',
    whatsappHello: 'Hello Youssef, I have a question about a trip in Morocco.',
    email: 'Email',
    phone: 'Phone',
    from: 'from',
    perPerson: 'per person',
    viewDetails: 'View details',
    seeAll: 'See all trips',
    readMore: 'Read more',
    backHome: 'Back to the home page',
  },
  footer: {
    about:
      'A small Moroccan travel agency based in Imlil, in the High Atlas. Treks, desert, day trips and journeys across the country, with people who live here.',
    explore: 'Explore',
    company: 'Agency',
    legal: 'Legal',
    contact: 'Contact',
    licence: 'Guide licence',
    registration: 'Agency registration',
    answers: 'Youssef answers himself, usually within a few hours.',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'This path does not exist',
    text: 'The page you are looking for has moved or never existed. Try the trips list, or write to us on WhatsApp.',
  },
};

export type UI = typeof en;

const fr: UI = {
  meta: {
    tagline: 'Le Maroc, avec ceux qui y vivent',
    description:
      'Treks, désert, excursions et voyages sur mesure dans tout le Maroc, organisés depuis Imlil par un guide de montagne diplômé. Youssef répond lui-même sur WhatsApp.',
  },
  a11y: {
    skip: 'Aller au contenu',
    mainNav: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    currency: 'Devise',
    themeToDark: 'Passer au thème sombre',
    themeToLight: 'Passer au thème clair',
    home: 'Iberdan, page d’accueil',
    breadcrumb: 'Fil d’Ariane',
    footer: 'Pied de page',
  },
  nav: {
    trips: 'Circuits',
    tailorMade: 'Sur mesure',
    guide: 'Guide de voyage',
    about: 'À propos',
    reviews: 'Avis',
    faq: 'FAQ',
    contact: 'Contact',
    wishlist: 'Mes favoris',
    credits: 'Crédits photos',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    cancellation: 'Annulation et remboursement',
  },
  common: {
    whatsapp: 'WhatsApp',
    chatWhatsapp: 'Écrire sur WhatsApp',
    whatsappHello: 'Bonjour Youssef, j’ai une question sur un voyage au Maroc.',
    email: 'E-mail',
    phone: 'Téléphone',
    from: 'à partir de',
    perPerson: 'par personne',
    viewDetails: 'Voir le détail',
    seeAll: 'Voir tous les circuits',
    readMore: 'Lire la suite',
    backHome: 'Retour à l’accueil',
  },
  footer: {
    about:
      'Une petite agence marocaine basée à Imlil, dans le Haut Atlas. Treks, désert, excursions et voyages dans tout le pays, avec ceux qui y vivent.',
    explore: 'Explorer',
    company: 'Agence',
    legal: 'Mentions',
    contact: 'Contact',
    licence: 'Licence de guide',
    registration: 'Immatriculation de l’agence',
    answers: 'Youssef répond lui-même, en général en quelques heures.',
    rights: 'Tous droits réservés.',
  },
  notFound: {
    title: 'Ce chemin n’existe pas',
    text: 'La page que vous cherchez a été déplacée ou n’a jamais existé. Essayez la liste des circuits, ou écrivez-nous sur WhatsApp.',
  },
};

const ar: UI = {
  meta: {
    tagline: 'المغرب مع أهله',
    description:
      'رحلات مشي في الجبال، رحلات إلى الصحراء، رحلات يومية ورحلات حسب الطلب في كل أنحاء المغرب، ينظمها من إمليل مرشد جبلي معتمد. يوسف يجيبكم بنفسه على واتساب.',
  },
  a11y: {
    skip: 'انتقل إلى المحتوى',
    mainNav: 'القائمة الرئيسية',
    openMenu: 'افتح القائمة',
    closeMenu: 'أغلق القائمة',
    language: 'اللغة',
    currency: 'العملة',
    themeToDark: 'التبديل إلى الوضع الداكن',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    home: 'إيبردان، الصفحة الرئيسية',
    breadcrumb: 'مسار التنقل',
    footer: 'تذييل الصفحة',
  },
  nav: {
    trips: 'الرحلات',
    tailorMade: 'رحلة حسب الطلب',
    guide: 'دليل السفر',
    about: 'من نحن',
    reviews: 'الآراء',
    faq: 'الأسئلة الشائعة',
    contact: 'اتصل بنا',
    wishlist: 'المفضلة',
    credits: 'حقوق الصور',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    cancellation: 'الإلغاء والاسترداد',
  },
  common: {
    whatsapp: 'واتساب',
    chatWhatsapp: 'راسلنا على واتساب',
    whatsappHello: 'مرحبا يوسف، لدي سؤال عن رحلة في المغرب.',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    from: 'ابتداءً من',
    perPerson: 'للشخص',
    viewDetails: 'عرض التفاصيل',
    seeAll: 'كل الرحلات',
    readMore: 'اقرأ المزيد',
    backHome: 'العودة إلى الصفحة الرئيسية',
  },
  footer: {
    about:
      'وكالة أسفار مغربية صغيرة مقرها إمليل في الأطلس الكبير. رحلات مشي، صحراء، رحلات يومية وجولات في كل أنحاء البلد، مع أناس يعيشون هنا.',
    explore: 'اكتشف',
    company: 'الوكالة',
    legal: 'معلومات قانونية',
    contact: 'اتصل بنا',
    licence: 'رخصة المرشد',
    registration: 'تسجيل الوكالة',
    answers: 'يوسف يجيب بنفسه، عادة في غضون ساعات قليلة.',
    rights: 'جميع الحقوق محفوظة.',
  },
  notFound: {
    title: 'هذا الطريق غير موجود',
    text: 'الصفحة التي تبحث عنها نُقلت أو لم تكن موجودة أصلاً. جرّب قائمة الرحلات، أو راسلنا على واتساب.',
  },
};

export const ui: Record<Lang, UI> = { en, fr, ar };
export const t = (lang: Lang): UI => ui[lang];
