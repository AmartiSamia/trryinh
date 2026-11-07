/*
 * Shared vocabulary for trips, translated once.
 * Trip files reference these keys (e.g. `included: [transport-marrakech, guide-mountain]`).
 * TODO(review-ar): Arabic strings need a native review.
 */
type L = { en: string; fr: string; ar: string };

export const items = {
  // Included
  'transport-marrakech': { en: 'Return transport from Marrakech', fr: 'Transport aller-retour depuis Marrakech', ar: 'النقل ذهابا وإيابا من مراكش' },
  'transport-fes': { en: 'Transport from Fes', fr: 'Transport depuis Fès', ar: 'النقل من فاس' },
  transport: { en: 'Transport in an air-conditioned vehicle', fr: 'Transport en véhicule climatisé', ar: 'النقل في سيارة مكيفة' },
  'pickup-hotel': { en: 'Pickup and drop-off at your riad or hotel', fr: 'Prise en charge et retour à votre riad ou hôtel', ar: 'الاستقبال والإرجاع من الرياض أو الفندق' },
  'guide-mountain': { en: 'Licensed mountain guide', fr: 'Guide de montagne diplômé', ar: 'مرشد جبلي معتمد' },
  'guide-local': { en: 'Local guide', fr: 'Guide local', ar: 'مرشد محلي' },
  'guide-city': { en: 'Licensed city guide', fr: 'Guide officiel de la ville', ar: 'مرشد سياحي معتمد للمدينة' },
  driver: { en: 'Driver', fr: 'Chauffeur', ar: 'سائق' },
  'meals-all': { en: 'All meals during the trek', fr: 'Tous les repas pendant le trek', ar: 'جميع الوجبات خلال الرحلة' },
  'breakfast-dinner': { en: 'Breakfasts and dinners', fr: 'Petits-déjeuners et dîners', ar: 'وجبات الفطور والعشاء' },
  dinner: { en: 'Dinner', fr: 'Dîner', ar: 'العشاء' },
  lunch: { en: 'Lunch', fr: 'Déjeuner', ar: 'الغداء' },
  'tea-snacks': { en: 'Mint tea and snacks', fr: 'Thé à la menthe et collation', ar: 'شاي بالنعناع ووجبة خفيفة' },
  accommodation: { en: 'Accommodation as described', fr: 'Hébergement comme décrit', ar: 'الإقامة كما هو موضح' },
  'refuge-night': { en: 'Night at the Toubkal refuge', fr: 'Nuit au refuge du Toubkal', ar: 'المبيت في ملجأ توبقال' },
  muleteer: { en: 'Mule and muleteer for luggage', fr: 'Mule et muletier pour les bagages', ar: 'بغل وبغّال لحمل الأمتعة' },
  cook: { en: 'Mountain cook', fr: 'Cuisinier de montagne', ar: 'طباخ الجبل' },
  camel: { en: 'Camel ride', fr: 'Balade à dos de dromadaire', ar: 'جولة على ظهر الجمل' },
  'desert-camp': { en: 'Night in a desert camp', fr: 'Nuit en camp dans le désert', ar: 'ليلة في مخيم صحراوي' },
  'entrance-fees': { en: 'Entrance fees', fr: 'Droits d’entrée', ar: 'رسوم الدخول' },
  equipment: { en: 'Equipment and safety briefing', fr: 'Équipement et consignes de sécurité', ar: 'المعدات وتعليمات السلامة' },
  'winter-gear': { en: 'Crampons and ice axe', fr: 'Crampons et piolet', ar: 'المسامير الثلجية وفأس الجليد' },
  'water-bottle': { en: 'Bottled water', fr: 'Eau en bouteille', ar: 'مياه معبأة' },

  // Not included
  lunches: { en: 'Lunches', fr: 'Déjeuners', ar: 'وجبات الغداء' },
  'meals-extra': { en: 'Meals not listed', fr: 'Repas non mentionnés', ar: 'الوجبات غير المذكورة' },
  drinks: { en: 'Drinks', fr: 'Boissons', ar: 'المشروبات' },
  tips: { en: 'Tips (optional)', fr: 'Pourboires (facultatifs)', ar: 'البقشيش (اختياري)' },
  insurance: { en: 'Travel insurance', fr: 'Assurance voyage', ar: 'تأمين السفر' },
  personal: { en: 'Personal expenses', fr: 'Dépenses personnelles', ar: 'المصاريف الشخصية' },
  'entrance-fees-ex': { en: 'Monument entrance fees', fr: 'Entrées des monuments', ar: 'رسوم دخول المعالم' },
  'sleeping-bag': { en: 'Sleeping bag (can be rented)', fr: 'Sac de couchage (location possible)', ar: 'كيس النوم (يمكن استئجاره)' },
  'winter-gear-ex': { en: 'Crampons and ice axe (can be rented in Imlil)', fr: 'Crampons et piolet (location possible à Imlil)', ar: 'المسامير الثلجية وفأس الجليد (يمكن استئجارها في إمليل)' },
  flights: { en: 'Flights', fr: 'Vols', ar: 'تذاكر الطيران' },
  'hotel-marrakech': { en: 'Hotel in Marrakech', fr: 'Hôtel à Marrakech', ar: 'الفندق في مراكش' },
  'optional-activities': { en: 'Optional activities', fr: 'Activités optionnelles', ar: 'الأنشطة الاختيارية' },

  // Packing
  boots: { en: 'Walking boots with good grip, already worn in', fr: 'Chaussures de marche à bonne adhérence, déjà portées', ar: 'حذاء مشي بقبضة جيدة ومستعمل من قبل' },
  'comfy-shoes': { en: 'Comfortable shoes', fr: 'Chaussures confortables', ar: 'حذاء مريح' },
  layers: { en: 'Warm layers (fleece, down jacket)', fr: 'Couches chaudes (polaire, doudoune)', ar: 'ملابس دافئة (صوف، سترة منفوخة)' },
  'rain-jacket': { en: 'Waterproof, windproof jacket', fr: 'Veste imperméable et coupe-vent', ar: 'سترة مقاومة للماء والرياح' },
  'sun-kit': { en: 'Sun hat, sunglasses and sunscreen', fr: 'Chapeau, lunettes de soleil et crème solaire', ar: 'قبعة ونظارات شمسية وواقي الشمس' },
  bottle: { en: 'Refillable water bottle (1.5 L)', fr: 'Gourde réutilisable (1,5 L)', ar: 'قارورة ماء قابلة لإعادة التعبئة (1.5 لتر)' },
  headlamp: { en: 'Head torch', fr: 'Lampe frontale', ar: 'مصباح رأس' },
  daypack: { en: 'Daypack (25–35 L)', fr: 'Sac à dos de journée (25–35 L)', ar: 'حقيبة ظهر يومية (25–35 لتر)' },
  'sleeping-bag-pack': { en: 'Sleeping bag or liner', fr: 'Sac de couchage ou drap de sac', ar: 'كيس نوم أو بطانة' },
  'gloves-hat': { en: 'Gloves and warm hat', fr: 'Gants et bonnet', ar: 'قفازات وقبعة صوفية' },
  scarf: { en: 'Scarf to protect from sun and sand', fr: 'Foulard contre le soleil et le sable', ar: 'وشاح للحماية من الشمس والرمل' },
  'warm-night': { en: 'A warm layer for the cold desert night', fr: 'Une couche chaude pour la nuit fraîche du désert', ar: 'ملابس دافئة لليلة الصحراء الباردة' },
  passport: { en: 'Passport (checkpoints and hotels ask for it)', fr: 'Passeport (demandé aux contrôles et hôtels)', ar: 'جواز السفر (يُطلب في نقاط المراقبة والفنادق)' },
  cash: { en: 'Some cash in dirhams', fr: 'Un peu d’argent liquide en dirhams', ar: 'بعض النقود بالدرهم' },
  swimwear: { en: 'Swimwear and a towel', fr: 'Maillot de bain et serviette', ar: 'لباس السباحة ومنشفة' },
  'modest-clothes': { en: 'Clothes covering shoulders and knees', fr: 'Vêtements couvrant épaules et genoux', ar: 'ملابس تغطي الكتفين والركبتين' },
  poles: { en: 'Walking poles (recommended)', fr: 'Bâtons de marche (recommandés)', ar: 'عصي المشي (يُنصح بها)' },
  'winter-clothes': { en: 'Full winter mountain clothing', fr: 'Équipement complet de montagne d’hiver', ar: 'ملابس جبلية شتوية كاملة' },
} as const satisfies Record<string, L>;

export type ItemKey = keyof typeof items;
export const itemKeys = Object.keys(items) as [ItemKey, ...ItemKey[]];

export const categoryLabels: Record<string, L> = {
  trekking: { en: 'Trekking & mountains', fr: 'Treks & montagne', ar: 'المشي والجبال' },
  desert: { en: 'Desert', fr: 'Désert', ar: 'الصحراء' },
  'day-trip': { en: 'Day trips from Marrakech', fr: 'Excursions depuis Marrakech', ar: 'رحلات يومية من مراكش' },
  culture: { en: 'Cities & culture', fr: 'Villes & culture', ar: 'المدن والثقافة' },
  circuit: { en: 'Multi-day circuits', fr: 'Circuits de plusieurs jours', ar: 'جولات لعدة أيام' },
  activity: { en: 'Activities', fr: 'Activités', ar: 'الأنشطة' },
};

export const difficultyLabels: Record<string, L> = {
  easy: { en: 'Easy', fr: 'Facile', ar: 'سهل' },
  moderate: { en: 'Moderate', fr: 'Modéré', ar: 'متوسط' },
  challenging: { en: 'Challenging', fr: 'Soutenu', ar: 'صعب نسبيا' },
  hard: { en: 'Hard', fr: 'Difficile', ar: 'صعب' },
};

export const difficultyHelp: Record<string, L> = {
  easy: { en: 'Open to everyone, little or no walking uphill.', fr: 'Accessible à tous, peu ou pas de montée.', ar: 'مناسب للجميع، مشي قليل أو بدون صعود.' },
  moderate: { en: '3–5 hours of walking a day on mountain paths. Regular exercise is enough.', fr: '3 à 5 h de marche par jour sur sentiers de montagne. Une activité régulière suffit.', ar: 'من 3 إلى 5 ساعات من المشي يوميا على مسالك جبلية. يكفي نشاط بدني منتظم.' },
  challenging: { en: '5–8 hours a day with steep climbs and altitude. Good fitness needed.', fr: '5 à 8 h par jour, fortes montées et altitude. Bonne condition physique nécessaire.', ar: 'من 5 إلى 8 ساعات يوميا مع صعود حاد وارتفاع. تتطلب لياقة جيدة.' },
  hard: { en: 'Long days at high altitude, sometimes on snow. Experience and very good fitness needed.', fr: 'Longues journées en haute altitude, parfois sur neige. Expérience et très bonne condition nécessaires.', ar: 'أيام طويلة على ارتفاع عالٍ وأحيانا على الثلج. تتطلب خبرة ولياقة عالية جدا.' },
};

export const sleepLabels: Record<string, L> = {
  guesthouse: { en: 'Guesthouse', fr: 'Gîte', ar: 'دار ضيافة' },
  refuge: { en: 'Mountain refuge', fr: 'Refuge', ar: 'ملجأ جبلي' },
  camp: { en: 'Desert camp', fr: 'Camp dans le désert', ar: 'مخيم صحراوي' },
  tent: { en: 'Tent', fr: 'Tente', ar: 'خيمة' },
  hotel: { en: 'Hotel', fr: 'Hôtel', ar: 'فندق' },
  riad: { en: 'Riad', fr: 'Riad', ar: 'رياض' },
};

export const mealLabels: Record<string, L> = {
  breakfast: { en: 'Breakfast', fr: 'Petit-déjeuner', ar: 'الفطور' },
  lunch: { en: 'Lunch', fr: 'Déjeuner', ar: 'الغداء' },
  dinner: { en: 'Dinner', fr: 'Dîner', ar: 'العشاء' },
};

/**
 * Display names for cities and places (trip data keeps the Latin name as the key).
 * Places missing here are shown as written. TODO(review-ar): check the Arabic spellings.
 */
const places: Record<string, Partial<L>> = {
  Marrakech: { fr: 'Marrakech', ar: 'مراكش' },
  Fes: { fr: 'Fès', ar: 'فاس' },
  Casablanca: { ar: 'الدار البيضاء' },
  Rabat: { ar: 'الرباط' },
  Meknes: { fr: 'Meknès', ar: 'مكناس' },
  Volubilis: { ar: 'وليلي' },
  Chefchaouen: { ar: 'شفشاون' },
  Essaouira: { ar: 'الصويرة' },
  Ifrane: { ar: 'إفران' },
  Midelt: { ar: 'ميدلت' },
  Imlil: { ar: 'إمليل' },
  Aroumd: { ar: 'أرومد' },
  Asni: { ar: 'أسني' },
  Ouirgane: { ar: 'أوركان' },
  'Sidi Chamharouch': { ar: 'سيدي شمهروش' },
  'Toubkal refuge': { fr: 'Refuge du Toubkal', ar: 'ملجأ توبقال' },
  'Toubkal summit': { fr: 'Sommet du Toubkal', ar: 'قمة توبقال' },
  'Toubkal summit (4,167 m)': { fr: 'Sommet du Toubkal (4 167 m)', ar: 'قمة توبقال (4167 م)' },
  Tacheddirt: { ar: 'تاشديرت' },
  'Tizi Likemt': { ar: 'تيزي ليكمت' },
  'Assif n’Ouarai': { ar: 'أسيف نواراي' },
  Amsouzart: { ar: 'أمسوزارت' },
  'Lake Ifni': { fr: 'Lac d’Ifni', ar: 'بحيرة إفني' },
  'Tizi n’Ouanoums': { ar: 'تيزي نوانومس' },
  'Tizi Mzik': { ar: 'تيزي مزيك' },
  'Azzaden valley': { fr: 'Vallée d’Azzaden', ar: 'وادي أزادن' },
  Tamsoult: { ar: 'تامسولت' },
  'Ighouliden waterfall': { fr: 'Cascade d’Ighouliden', ar: 'شلال إغوليدن' },
  'Tizi n’Tamatert': { ar: 'تيزي نتماترت' },
  'Imnane valley': { fr: 'Vallée d’Imnane', ar: 'وادي إمنان' },
  'Ourika valley': { fr: 'Vallée de l’Ourika', ar: 'وادي أوريكا' },
  'Tnine Ourika': { ar: 'ثلاثاء أوريكا' },
  'Setti Fatma': { ar: 'ستي فاطمة' },
  'Aït Bouguemez': { ar: 'آيت بوكماز' },
  'Tarkeddit plateau': { fr: 'Plateau de Tarkeddit', ar: 'هضبة تاركديت' },
  Tarkeddit: { ar: 'تاركديت' },
  'M’Goun summit': { fr: 'Sommet du M’Goun', ar: 'قمة مكون' },
  'Tizi n’Tichka': { ar: 'تيزي نتيشكا' },
  'Aït Benhaddou': { ar: 'آيت بن حدو' },
  Ouarzazate: { ar: 'ورزازات' },
  'Dades valley': { fr: 'Vallée du Dadès', ar: 'وادي دادس' },
  'Todra gorge': { fr: 'Gorges du Todra', ar: 'مضيق تودغى' },
  'Merzouga, Erg Chebbi': { ar: 'مرزوكة، عرق الشبي' },
  Merzouga: { ar: 'مرزوكة' },
  'Erg Chebbi': { fr: 'Erg Chebbi', ar: 'عرق الشبي' },
  Agdz: { ar: 'أكدز' },
  Zagora: { ar: 'زاكورة' },
  'Agafay desert': { fr: 'Désert d’Agafay', ar: 'صحراء أكفاي' },
  Agafay: { ar: 'أكفاي' },
  'Ouzoud waterfalls': { fr: 'Cascades d’Ouzoud', ar: 'شلالات أوزود' },
  Palmeraie: { ar: 'النخيل' },
  'Marrakech medina': { fr: 'Médina de Marrakech', ar: 'مدينة مراكش العتيقة' },
  'Jemaa el-Fna': { ar: 'جامع الفنا' },
  'Bahia Palace': { fr: 'Palais de la Bahia', ar: 'قصر الباهية' },
  'Bab Boujloud': { ar: 'باب بوجلود' },
  'Al-Qarawiyyin': { fr: 'Al-Qaraouiyine', ar: 'القرويين' },
  'Chouara tannery': { fr: 'Tannerie Chouara', ar: 'دار الدباغة شوارة' },
};
export const placeLabel = (place: string, lang: keyof L): string => places[place]?.[lang] ?? place;
export const cityLabel = placeLabel;
