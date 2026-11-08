/*
 * Shared vocabulary for trips, translated once.
 * Trip files reference these keys (e.g. `included: [transport-marrakech, guide-mountain]`).
 * TODO(review-ar), TODO(review-es), TODO(review-de), TODO(review-pt): native review.
 */
import type { Text as L } from './routes';

export const items = {
  // Included
  'transport-marrakech': { en: 'Return transport from Marrakech', fr: 'Transport aller-retour depuis Marrakech', es: 'Transporte de ida y vuelta desde Marrakech', de: 'Hin- und Rücktransfer ab Marrakesch', pt: 'Transporte de ida e volta desde Marraquexe', ar: 'النقل ذهابا وإيابا من مراكش' },
  'transport-fes': { en: 'Transport from Fes', fr: 'Transport depuis Fès', es: 'Transporte desde Fez', de: 'Transfer ab Fès', pt: 'Transporte desde Fez', ar: 'النقل من فاس' },
  transport: { en: 'Transport in an air-conditioned vehicle', fr: 'Transport en véhicule climatisé', es: 'Transporte en vehículo con aire acondicionado', de: 'Fahrt im klimatisierten Fahrzeug', pt: 'Transporte em veículo com ar condicionado', ar: 'النقل في سيارة مكيفة' },
  'pickup-hotel': { en: 'Pickup and drop-off at your riad or hotel', fr: 'Prise en charge et retour à votre riad ou hôtel', es: 'Recogida y regreso a su riad u hotel', de: 'Abholung und Rückfahrt zu Ihrem Riad oder Hotel', pt: 'Recolha e regresso ao seu riad ou hotel', ar: 'الاستقبال والإرجاع من الرياض أو الفندق' },
  'guide-mountain': { en: 'Licensed mountain guide', fr: 'Guide de montagne diplômé', es: 'Guía de montaña titulado', de: 'Lizenzierter Bergführer', pt: 'Guia de montanha credenciado', ar: 'مرشد جبلي معتمد' },
  'guide-local': { en: 'Local guide', fr: 'Guide local', es: 'Guía local', de: 'Einheimischer Guide', pt: 'Guia local', ar: 'مرشد محلي' },
  'guide-city': { en: 'Licensed city guide', fr: 'Guide officiel de la ville', es: 'Guía oficial de la ciudad', de: 'Lizenzierter Stadtführer', pt: 'Guia oficial da cidade', ar: 'مرشد سياحي معتمد للمدينة' },
  driver: { en: 'Driver', fr: 'Chauffeur', es: 'Conductor', de: 'Fahrer', pt: 'Motorista', ar: 'سائق' },
  'meals-all': { en: 'All meals during the trek', fr: 'Tous les repas pendant le trek', es: 'Todas las comidas durante el trek', de: 'Alle Mahlzeiten während des Treks', pt: 'Todas as refeições durante o trekking', ar: 'جميع الوجبات خلال الرحلة' },
  'breakfast-dinner': { en: 'Breakfasts and dinners', fr: 'Petits-déjeuners et dîners', es: 'Desayunos y cenas', de: 'Frühstück und Abendessen', pt: 'Pequenos-almoços e jantares', ar: 'وجبات الفطور والعشاء' },
  dinner: { en: 'Dinner', fr: 'Dîner', es: 'Cena', de: 'Abendessen', pt: 'Jantar', ar: 'العشاء' },
  lunch: { en: 'Lunch', fr: 'Déjeuner', es: 'Almuerzo', de: 'Mittagessen', pt: 'Almoço', ar: 'الغداء' },
  'tea-snacks': { en: 'Mint tea and snacks', fr: 'Thé à la menthe et collation', es: 'Té a la menta y aperitivos', de: 'Minztee und Snacks', pt: 'Chá de menta e petiscos', ar: 'شاي بالنعناع ووجبة خفيفة' },
  accommodation: { en: 'Accommodation as described', fr: 'Hébergement comme décrit', es: 'Alojamiento según el programa', de: 'Unterkunft wie beschrieben', pt: 'Alojamento conforme descrito', ar: 'الإقامة كما هو موضح' },
  'refuge-night': { en: 'Night at the Toubkal refuge', fr: 'Nuit au refuge du Toubkal', es: 'Noche en el refugio del Toubkal', de: 'Übernachtung in der Toubkal-Hütte', pt: 'Noite no refúgio do Toubkal', ar: 'المبيت في ملجأ توبقال' },
  muleteer: { en: 'Mule and muleteer for luggage', fr: 'Mule et muletier pour les bagages', es: 'Mula y arriero para el equipaje', de: 'Maultier und Maultiertreiber für das Gepäck', pt: 'Mula e arrieiro para a bagagem', ar: 'بغل وبغّال لحمل الأمتعة' },
  cook: { en: 'Mountain cook', fr: 'Cuisinier de montagne', es: 'Cocinero de montaña', de: 'Bergkoch', pt: 'Cozinheiro de montanha', ar: 'طباخ الجبل' },
  camel: { en: 'Camel ride', fr: 'Balade à dos de dromadaire', es: 'Paseo en dromedario', de: 'Kamelritt', pt: 'Passeio de dromedário', ar: 'جولة على ظهر الجمل' },
  'desert-camp': { en: 'Night in a desert camp', fr: 'Nuit en camp dans le désert', es: 'Noche en un campamento del desierto', de: 'Nacht im Wüstencamp', pt: 'Noite num acampamento no deserto', ar: 'ليلة في مخيم صحراوي' },
  'entrance-fees': { en: 'Entrance fees', fr: 'Droits d’entrée', es: 'Entradas', de: 'Eintrittsgelder', pt: 'Entradas', ar: 'رسوم الدخول' },
  equipment: { en: 'Equipment and safety briefing', fr: 'Équipement et consignes de sécurité', es: 'Equipo e instrucciones de seguridad', de: 'Ausrüstung und Sicherheitseinweisung', pt: 'Equipamento e instruções de segurança', ar: 'المعدات وتعليمات السلامة' },
  'winter-gear': { en: 'Crampons and ice axe', fr: 'Crampons et piolet', es: 'Crampones y piolet', de: 'Steigeisen und Eispickel', pt: 'Crampons e piolet', ar: 'المسامير الثلجية وفأس الجليد' },
  'water-bottle': { en: 'Bottled water', fr: 'Eau en bouteille', es: 'Agua embotellada', de: 'Wasser in Flaschen', pt: 'Água engarrafada', ar: 'مياه معبأة' },

  // Not included
  lunches: { en: 'Lunches', fr: 'Déjeuners', es: 'Almuerzos', de: 'Mittagessen', pt: 'Almoços', ar: 'وجبات الغداء' },
  'meals-extra': { en: 'Meals not listed', fr: 'Repas non mentionnés', es: 'Comidas no mencionadas', de: 'Nicht genannte Mahlzeiten', pt: 'Refeições não mencionadas', ar: 'الوجبات غير المذكورة' },
  drinks: { en: 'Drinks', fr: 'Boissons', es: 'Bebidas', de: 'Getränke', pt: 'Bebidas', ar: 'المشروبات' },
  tips: { en: 'Tips (optional)', fr: 'Pourboires (facultatifs)', es: 'Propinas (opcionales)', de: 'Trinkgelder (freiwillig)', pt: 'Gorjetas (opcionais)', ar: 'البقشيش (اختياري)' },
  insurance: { en: 'Travel insurance', fr: 'Assurance voyage', es: 'Seguro de viaje', de: 'Reiseversicherung', pt: 'Seguro de viagem', ar: 'تأمين السفر' },
  personal: { en: 'Personal expenses', fr: 'Dépenses personnelles', es: 'Gastos personales', de: 'Persönliche Ausgaben', pt: 'Despesas pessoais', ar: 'المصاريف الشخصية' },
  'entrance-fees-ex': { en: 'Monument entrance fees', fr: 'Entrées des monuments', es: 'Entradas a los monumentos', de: 'Eintritt für Sehenswürdigkeiten', pt: 'Entradas nos monumentos', ar: 'رسوم دخول المعالم' },
  'sleeping-bag': { en: 'Sleeping bag (can be rented)', fr: 'Sac de couchage (location possible)', es: 'Saco de dormir (se puede alquilar)', de: 'Schlafsack (kann gemietet werden)', pt: 'Saco-cama (pode ser alugado)', ar: 'كيس النوم (يمكن استئجاره)' },
  'winter-gear-ex': { en: 'Crampons and ice axe (can be rented in Imlil)', fr: 'Crampons et piolet (location possible à Imlil)', es: 'Crampones y piolet (se pueden alquilar en Imlil)', de: 'Steigeisen und Eispickel (in Imlil mietbar)', pt: 'Crampons e piolet (podem ser alugados em Imlil)', ar: 'المسامير الثلجية وفأس الجليد (يمكن استئجارها في إمليل)' },
  flights: { en: 'Flights', fr: 'Vols', es: 'Vuelos', de: 'Flüge', pt: 'Voos', ar: 'تذاكر الطيران' },
  'hotel-marrakech': { en: 'Hotel in Marrakech', fr: 'Hôtel à Marrakech', es: 'Hotel en Marrakech', de: 'Hotel in Marrakesch', pt: 'Hotel em Marraquexe', ar: 'الفندق في مراكش' },
  'optional-activities': { en: 'Optional activities', fr: 'Activités optionnelles', es: 'Actividades opcionales', de: 'Optionale Aktivitäten', pt: 'Atividades opcionais', ar: 'الأنشطة الاختيارية' },

  // Packing
  boots: { en: 'Walking boots with good grip, already worn in', fr: 'Chaussures de marche à bonne adhérence, déjà portées', es: 'Botas de montaña con buen agarre, ya usadas', de: 'Eingelaufene Wanderschuhe mit gutem Profil', pt: 'Botas de caminhada com boa aderência, já usadas', ar: 'حذاء مشي بقبضة جيدة ومستعمل من قبل' },
  'comfy-shoes': { en: 'Comfortable shoes', fr: 'Chaussures confortables', es: 'Calzado cómodo', de: 'Bequeme Schuhe', pt: 'Calçado confortável', ar: 'حذاء مريح' },
  layers: { en: 'Warm layers (fleece, down jacket)', fr: 'Couches chaudes (polaire, doudoune)', es: 'Capas de abrigo (forro polar, plumífero)', de: 'Warme Schichten (Fleece, Daunenjacke)', pt: 'Camadas quentes (polar, casaco de penas)', ar: 'ملابس دافئة (صوف، سترة منفوخة)' },
  'rain-jacket': { en: 'Waterproof, windproof jacket', fr: 'Veste imperméable et coupe-vent', es: 'Chaqueta impermeable y cortavientos', de: 'Wasser- und winddichte Jacke', pt: 'Casaco impermeável e corta-vento', ar: 'سترة مقاومة للماء والرياح' },
  'sun-kit': { en: 'Sun hat, sunglasses and sunscreen', fr: 'Chapeau, lunettes de soleil et crème solaire', es: 'Sombrero, gafas de sol y protector solar', de: 'Sonnenhut, Sonnenbrille und Sonnencreme', pt: 'Chapéu, óculos de sol e protetor solar', ar: 'قبعة ونظارات شمسية وواقي الشمس' },
  bottle: { en: 'Refillable water bottle (1.5 L)', fr: 'Gourde réutilisable (1,5 L)', es: 'Botella reutilizable (1,5 L)', de: 'Nachfüllbare Trinkflasche (1,5 l)', pt: 'Garrafa reutilizável (1,5 L)', ar: 'قارورة ماء قابلة لإعادة التعبئة (1.5 لتر)' },
  headlamp: { en: 'Head torch', fr: 'Lampe frontale', es: 'Linterna frontal', de: 'Stirnlampe', pt: 'Lanterna frontal', ar: 'مصباح رأس' },
  daypack: { en: 'Daypack (25–35 L)', fr: 'Sac à dos de journée (25–35 L)', es: 'Mochila de día (25–35 L)', de: 'Tagesrucksack (25–35 l)', pt: 'Mochila de dia (25–35 L)', ar: 'حقيبة ظهر يومية (25–35 لتر)' },
  'sleeping-bag-pack': { en: 'Sleeping bag or liner', fr: 'Sac de couchage ou drap de sac', es: 'Saco de dormir o sábana de saco', de: 'Schlafsack oder Inlett', pt: 'Saco-cama ou lençol de saco-cama', ar: 'كيس نوم أو بطانة' },
  'gloves-hat': { en: 'Gloves and warm hat', fr: 'Gants et bonnet', es: 'Guantes y gorro', de: 'Handschuhe und Mütze', pt: 'Luvas e gorro', ar: 'قفازات وقبعة صوفية' },
  scarf: { en: 'Scarf to protect from sun and sand', fr: 'Foulard contre le soleil et le sable', es: 'Pañuelo contra el sol y la arena', de: 'Tuch gegen Sonne und Sand', pt: 'Lenço contra o sol e a areia', ar: 'وشاح للحماية من الشمس والرمل' },
  'warm-night': { en: 'A warm layer for the cold desert night', fr: 'Une couche chaude pour la nuit fraîche du désert', es: 'Una capa de abrigo para la noche fría del desierto', de: 'Eine warme Schicht für die kalte Wüstennacht', pt: 'Uma camada quente para a noite fria do deserto', ar: 'ملابس دافئة لليلة الصحراء الباردة' },
  passport: { en: 'Passport (checkpoints and hotels ask for it)', fr: 'Passeport (demandé aux contrôles et hôtels)', es: 'Pasaporte (lo piden en controles y hoteles)', de: 'Reisepass (bei Kontrollen und in Hotels nötig)', pt: 'Passaporte (pedido em controlos e hotéis)', ar: 'جواز السفر (يُطلب في نقاط المراقبة والفنادق)' },
  cash: { en: 'Some cash in dirhams', fr: 'Un peu d’argent liquide en dirhams', es: 'Algo de efectivo en dírhams', de: 'Etwas Bargeld in Dirham', pt: 'Algum dinheiro em dirhams', ar: 'بعض النقود بالدرهم' },
  swimwear: { en: 'Swimwear and a towel', fr: 'Maillot de bain et serviette', es: 'Bañador y toalla', de: 'Badesachen und Handtuch', pt: 'Fato de banho e toalha', ar: 'لباس السباحة ومنشفة' },
  'modest-clothes': { en: 'Clothes covering shoulders and knees', fr: 'Vêtements couvrant épaules et genoux', es: 'Ropa que cubra hombros y rodillas', de: 'Kleidung, die Schultern und Knie bedeckt', pt: 'Roupa que cubra ombros e joelhos', ar: 'ملابس تغطي الكتفين والركبتين' },
  poles: { en: 'Walking poles (recommended)', fr: 'Bâtons de marche (recommandés)', es: 'Bastones de senderismo (recomendados)', de: 'Wanderstöcke (empfohlen)', pt: 'Bastões de caminhada (recomendados)', ar: 'عصي المشي (يُنصح بها)' },
  'winter-clothes': { en: 'Full winter mountain clothing', fr: 'Équipement complet de montagne d’hiver', es: 'Ropa completa de montaña invernal', de: 'Komplette Winter-Bergbekleidung', pt: 'Roupa completa de montanha de inverno', ar: 'ملابس جبلية شتوية كاملة' },
} as const satisfies Record<string, L>;

export type ItemKey = keyof typeof items;
export const itemKeys = Object.keys(items) as [ItemKey, ...ItemKey[]];

export const categoryLabels: Record<string, L> = {
  trekking: { en: 'Trekking & mountains', fr: 'Treks & montagne', es: 'Trekking y montaña', de: 'Trekking & Berge', pt: 'Trekking e montanha', ar: 'المشي والجبال' },
  desert: { en: 'Desert', fr: 'Désert', es: 'Desierto', de: 'Wüste', pt: 'Deserto', ar: 'الصحراء' },
  'day-trip': { en: 'Day trips from Marrakech', fr: 'Excursions depuis Marrakech', es: 'Excursiones desde Marrakech', de: 'Tagesausflüge ab Marrakesch', pt: 'Excursões desde Marraquexe', ar: 'رحلات يومية من مراكش' },
  culture: { en: 'Cities & culture', fr: 'Villes & culture', es: 'Ciudades y cultura', de: 'Städte & Kultur', pt: 'Cidades e cultura', ar: 'المدن والثقافة' },
  circuit: { en: 'Multi-day circuits', fr: 'Circuits de plusieurs jours', es: 'Circuitos de varios días', de: 'Mehrtägige Rundreisen', pt: 'Circuitos de vários dias', ar: 'جولات لعدة أيام' },
  activity: { en: 'Activities', fr: 'Activités', es: 'Actividades', de: 'Aktivitäten', pt: 'Atividades', ar: 'الأنشطة' },
};

export const difficultyLabels: Record<string, L> = {
  easy: { en: 'Easy', fr: 'Facile', es: 'Fácil', de: 'Leicht', pt: 'Fácil', ar: 'سهل' },
  moderate: { en: 'Moderate', fr: 'Modéré', es: 'Moderada', de: 'Mittel', pt: 'Moderada', ar: 'متوسط' },
  challenging: { en: 'Challenging', fr: 'Soutenu', es: 'Exigente', de: 'Anspruchsvoll', pt: 'Exigente', ar: 'صعب نسبيا' },
  hard: { en: 'Hard', fr: 'Difficile', es: 'Difícil', de: 'Schwer', pt: 'Difícil', ar: 'صعب' },
};

export const difficultyHelp: Record<string, L> = {
  easy: { en: 'Open to everyone, little or no walking uphill.', fr: 'Accessible à tous, peu ou pas de montée.', es: 'Para todos, con poca o ninguna subida.', de: 'Für alle geeignet, kaum oder keine Steigungen.', pt: 'Para todos, com pouca ou nenhuma subida.', ar: 'مناسب للجميع، مشي قليل أو بدون صعود.' },
  moderate: { en: '3–5 hours of walking a day on mountain paths. Regular exercise is enough.', fr: '3 à 5 h de marche par jour sur sentiers de montagne. Une activité régulière suffit.', es: '3–5 horas de marcha al día por senderos de montaña. Basta con hacer ejercicio con regularidad.', de: '3–5 Stunden Gehzeit pro Tag auf Bergwegen. Regelmäßige Bewegung genügt.', pt: '3–5 horas de caminhada por dia em trilhos de montanha. Basta fazer exercício regularmente.', ar: 'من 3 إلى 5 ساعات من المشي يوميا على مسالك جبلية. يكفي نشاط بدني منتظم.' },
  challenging: { en: '5–8 hours a day with steep climbs and altitude. Good fitness needed.', fr: '5 à 8 h par jour, fortes montées et altitude. Bonne condition physique nécessaire.', es: '5–8 horas al día con subidas fuertes y altitud. Se necesita buena forma física.', de: '5–8 Stunden am Tag mit steilen Anstiegen und Höhe. Gute Kondition nötig.', pt: '5–8 horas por dia com subidas íngremes e altitude. É precisa boa forma física.', ar: 'من 5 إلى 8 ساعات يوميا مع صعود حاد وارتفاع. تتطلب لياقة جيدة.' },
  hard: { en: 'Long days at high altitude, sometimes on snow. Experience and very good fitness needed.', fr: 'Longues journées en haute altitude, parfois sur neige. Expérience et très bonne condition nécessaires.', es: 'Días largos a gran altitud, a veces sobre nieve. Se necesita experiencia y muy buena forma.', de: 'Lange Tage in großer Höhe, teils auf Schnee. Erfahrung und sehr gute Kondition nötig.', pt: 'Dias longos a grande altitude, por vezes na neve. É precisa experiência e muito boa forma.', ar: 'أيام طويلة على ارتفاع عالٍ وأحيانا على الثلج. تتطلب خبرة ولياقة عالية جدا.' },
};

export const sleepLabels: Record<string, L> = {
  guesthouse: { en: 'Guesthouse', fr: 'Gîte', es: 'Casa de huéspedes', de: 'Gästehaus', pt: 'Casa de hóspedes', ar: 'دار ضيافة' },
  refuge: { en: 'Mountain refuge', fr: 'Refuge', es: 'Refugio de montaña', de: 'Berghütte', pt: 'Refúgio de montanha', ar: 'ملجأ جبلي' },
  camp: { en: 'Desert camp', fr: 'Camp dans le désert', es: 'Campamento en el desierto', de: 'Wüstencamp', pt: 'Acampamento no deserto', ar: 'مخيم صحراوي' },
  tent: { en: 'Tent', fr: 'Tente', es: 'Tienda', de: 'Zelt', pt: 'Tenda', ar: 'خيمة' },
  hotel: { en: 'Hotel', fr: 'Hôtel', es: 'Hotel', de: 'Hotel', pt: 'Hotel', ar: 'فندق' },
  riad: { en: 'Riad', fr: 'Riad', es: 'Riad', de: 'Riad', pt: 'Riad', ar: 'رياض' },
};

export const mealLabels: Record<string, L> = {
  breakfast: { en: 'Breakfast', fr: 'Petit-déjeuner', es: 'Desayuno', de: 'Frühstück', pt: 'Pequeno-almoço', ar: 'الفطور' },
  lunch: { en: 'Lunch', fr: 'Déjeuner', es: 'Almuerzo', de: 'Mittagessen', pt: 'Almoço', ar: 'الغداء' },
  dinner: { en: 'Dinner', fr: 'Dîner', es: 'Cena', de: 'Abendessen', pt: 'Jantar', ar: 'العشاء' },
};

/**
 * Display names for cities and places (trip data keeps the Latin name as the key).
 * Places missing here are shown as written.
 */
const places: Record<string, Partial<L>> = {
  Marrakech: { de: 'Marrakesch', pt: 'Marraquexe', ar: 'مراكش' },
  Fes: { fr: 'Fès', es: 'Fez', de: 'Fès', pt: 'Fez', ar: 'فاس' },
  Casablanca: { ar: 'الدار البيضاء' },
  Rabat: { ar: 'الرباط' },
  Meknes: { fr: 'Meknès', es: 'Mequinez', de: 'Meknès', pt: 'Meknès', ar: 'مكناس' },
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
  'Toubkal refuge': { fr: 'Refuge du Toubkal', es: 'Refugio del Toubkal', de: 'Toubkal-Hütte', pt: 'Refúgio do Toubkal', ar: 'ملجأ توبقال' },
  'Toubkal summit': { fr: 'Sommet du Toubkal', es: 'Cumbre del Toubkal', de: 'Gipfel des Toubkal', pt: 'Cume do Toubkal', ar: 'قمة توبقال' },
  'Toubkal summit (4,167 m)': { fr: 'Sommet du Toubkal (4 167 m)', es: 'Cumbre del Toubkal (4167 m)', de: 'Gipfel des Toubkal (4.167 m)', pt: 'Cume do Toubkal (4167 m)', ar: 'قمة توبقال (4167 م)' },
  Tacheddirt: { ar: 'تاشديرت' },
  'Tizi Likemt': { ar: 'تيزي ليكمت' },
  'Assif n’Ouarai': { ar: 'أسيف نواراي' },
  Amsouzart: { ar: 'أمسوزارت' },
  'Lake Ifni': { fr: 'Lac d’Ifni', es: 'Lago Ifni', de: 'Ifni-See', pt: 'Lago Ifni', ar: 'بحيرة إفني' },
  'Tizi n’Ouanoums': { ar: 'تيزي نوانومس' },
  'Tizi Mzik': { ar: 'تيزي مزيك' },
  'Azzaden valley': { fr: 'Vallée d’Azzaden', es: 'Valle de Azzaden', de: 'Azzaden-Tal', pt: 'Vale de Azzaden', ar: 'وادي أزادن' },
  Tamsoult: { ar: 'تامسولت' },
  'Ighouliden waterfall': { fr: 'Cascade d’Ighouliden', es: 'Cascada de Ighouliden', de: 'Ighouliden-Wasserfall', pt: 'Cascata de Ighouliden', ar: 'شلال إغوليدن' },
  'Tizi n’Tamatert': { ar: 'تيزي نتماترت' },
  'Imnane valley': { fr: 'Vallée d’Imnane', es: 'Valle de Imnane', de: 'Imnane-Tal', pt: 'Vale de Imnane', ar: 'وادي إمنان' },
  'Ourika valley': { fr: 'Vallée de l’Ourika', es: 'Valle del Ourika', de: 'Ourika-Tal', pt: 'Vale de Ourika', ar: 'وادي أوريكا' },
  'Tnine Ourika': { ar: 'ثلاثاء أوريكا' },
  'Setti Fatma': { ar: 'ستي فاطمة' },
  'Aït Bouguemez': { ar: 'آيت بوكماز' },
  'Tarkeddit plateau': { fr: 'Plateau de Tarkeddit', es: 'Meseta de Tarkeddit', de: 'Tarkeddit-Hochebene', pt: 'Planalto de Tarkeddit', ar: 'هضبة تاركديت' },
  Tarkeddit: { ar: 'تاركديت' },
  'M’Goun summit': { fr: 'Sommet du M’Goun', es: 'Cumbre del M’Goun', de: 'Gipfel des M’Goun', pt: 'Cume do M’Goun', ar: 'قمة مكون' },
  'Tizi n’Tichka': { ar: 'تيزي نتيشكا' },
  'Aït Benhaddou': { ar: 'آيت بن حدو' },
  Ouarzazate: { ar: 'ورزازات' },
  'Dades valley': { fr: 'Vallée du Dadès', es: 'Valle del Dades', de: 'Dadès-Tal', pt: 'Vale do Dadès', ar: 'وادي دادس' },
  'Todra gorge': { fr: 'Gorges du Todra', es: 'Gargantas del Todra', de: 'Todra-Schlucht', pt: 'Gargantas do Todra', ar: 'مضيق تودغى' },
  'Merzouga, Erg Chebbi': { ar: 'مرزوكة، عرق الشبي' },
  Merzouga: { ar: 'مرزوكة' },
  'Erg Chebbi': { ar: 'عرق الشبي' },
  Agdz: { ar: 'أكدز' },
  Zagora: { ar: 'زاكورة' },
  'Agafay desert': { fr: 'Désert d’Agafay', es: 'Desierto de Agafay', de: 'Agafay-Wüste', pt: 'Deserto de Agafay', ar: 'صحراء أكفاي' },
  Agafay: { ar: 'أكفاي' },
  'Ouzoud waterfalls': { fr: 'Cascades d’Ouzoud', es: 'Cascadas de Ouzoud', de: 'Ouzoud-Wasserfälle', pt: 'Cascatas de Ouzoud', ar: 'شلالات أوزود' },
  Palmeraie: { es: 'Palmeral', de: 'Palmenhain', pt: 'Palmeiral', ar: 'النخيل' },
  'Marrakech medina': { fr: 'Médina de Marrakech', es: 'Medina de Marrakech', de: 'Medina von Marrakesch', pt: 'Medina de Marraquexe', ar: 'مدينة مراكش العتيقة' },
  'Medina food streets': { fr: 'Ruelles gourmandes de la médina', es: 'Calles gastronómicas de la medina', de: 'Essensgassen der Medina', pt: 'Ruas gastronómicas da medina', ar: 'أزقة الأكل في المدينة العتيقة' },
  'Jemaa el-Fna': { ar: 'جامع الفنا' },
  'Bahia Palace': { fr: 'Palais de la Bahia', es: 'Palacio de la Bahía', de: 'Bahia-Palast', pt: 'Palácio da Bahia', ar: 'قصر الباهية' },
  'Place des Épices': { en: 'Spice square', es: 'Plaza de las Especias', de: 'Gewürzplatz', pt: 'Praça das Especiarias', ar: 'ساحة التوابل' },
  Souks: { fr: 'Souks', es: 'Zocos', de: 'Souks', pt: 'Souks', ar: 'الأسواق' },
  'Bab Boujloud': { ar: 'باب بوجلود' },
  'Bou Inania madrasa': { fr: 'Médersa Bou Inania', es: 'Madrasa Bou Inania', de: 'Medersa Bou Inania', pt: 'Madraça Bou Inania', ar: 'مدرسة بوعنانية' },
  'Al-Qarawiyyin': { fr: 'Al-Qaraouiyine', ar: 'القرويين' },
  'Chouara tannery': { fr: 'Tannerie Chouara', es: 'Curtiduría Chouara', de: 'Gerberei Chouara', pt: 'Curtumes Chouara', ar: 'دار الدباغة شوارة' },
  Oukaïmeden: { ar: 'أوكايمدن' },
  Imilchil: { ar: 'إملشيل' },
  'Bin el Ouidane': { ar: 'بين الويدان' },
  'Lake Tislit': { fr: 'Lac Tislit', es: 'Lago Tislit', de: 'Tislit-See', pt: 'Lago Tislit', ar: 'بحيرة تيسليت' },
  'Lake Isli': { fr: 'Lac Isli', es: 'Lago Isli', de: 'Isli-See', pt: 'Lago Isli', ar: 'بحيرة إيسلي' },
  'Launch site (Jbilet area)': { fr: 'Site de décollage (Jbilet)', es: 'Zona de despegue (Jbilet)', de: 'Startplatz (Jbilet)', pt: 'Local de descolagem (Jbilet)', ar: 'موقع الإقلاع (الجبيلات)' },
};
export const placeLabel = (place: string, lang: keyof L): string => places[place]?.[lang] ?? place;
export const cityLabel = placeLabel;
