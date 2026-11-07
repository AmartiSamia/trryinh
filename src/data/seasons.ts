/*
 * "Where to go by season". Temperatures are rough climate averages for the
 * main base of each region (Imlil, Merzouga, Essaouira, Marrakech/Fes).
 * TODO(youssef): check these against your own experience.
 * TODO(review-ar): Arabic texts need a native review.
 */
type L = { en: string; fr: string; ar: string };

export interface Region {
  key: 'atlas' | 'desert' | 'coast' | 'cities';
  photo: string;
  bestMonths: number[];
  /** Typical range across the good months, °C. */
  day: string;
  night: string;
  text: L;
  tip: L;
  /** Link to the filtered trips list. */
  query: string;
}

export const regions: Region[] = [
  {
    key: 'atlas',
    photo: 'toubkal-massif',
    bestMonths: [4, 5, 6, 9, 10],
    day: '18–28',
    night: '5–14',
    text: {
      en: 'Spring and autumn are perfect for walking. Summer is fine in Imlil but hot on the drive; from December to March the peaks are under snow and Toubkal becomes a winter climb.',
      fr: 'Le printemps et l’automne sont parfaits pour marcher. L’été va bien à Imlil mais la route est chaude ; de décembre à mars, les sommets sont enneigés et le Toubkal devient une ascension hivernale.',
      ar: 'الربيع والخريف مثاليان للمشي. الصيف مناسب في إمليل لكن الطريق حار، ومن دجنبر إلى مارس تكون القمم مكسوة بالثلج ويصبح صعود توبقال تسلقا شتويا.',
    },
    tip: {
      en: 'Even in July the summit is close to 0 °C at dawn. Bring a warm jacket, gloves and a hat.',
      fr: 'Même en juillet, il fait près de 0 °C au sommet à l’aube. Prenez veste chaude, gants et bonnet.',
      ar: 'حتى في يوليوز تقترب الحرارة في القمة من 0 درجة عند الفجر. أحضروا سترة دافئة وقفازات وقبعة.',
    },
    query: 'cat=trekking',
  },
  {
    key: 'desert',
    photo: 'merzouga-dunes',
    bestMonths: [3, 4, 5, 10, 11],
    day: '22–30',
    night: '8–16',
    text: {
      en: 'March to May and October–November give warm days and fresh nights. Summer days pass 40 °C; winter days are pleasant but nights at camp are cold.',
      fr: 'De mars à mai et en octobre-novembre, journées chaudes et nuits fraîches. L’été dépasse 40 °C ; l’hiver, les journées sont agréables mais les nuits au camp sont froides.',
      ar: 'من مارس إلى ماي وفي أكتوبر ونونبر أيام دافئة وليالٍ منعشة. في الصيف تتجاوز الحرارة 40 درجة، وفي الشتاء الأيام لطيفة لكن الليالي في المخيم باردة.',
    },
    tip: {
      en: 'A scarf for sun and sand, and a fleece for the night. Sunglasses are a must.',
      fr: 'Un chèche contre le soleil et le sable, une polaire pour la nuit. Les lunettes de soleil sont indispensables.',
      ar: 'وشاح للحماية من الشمس والرمل، وسترة صوفية لليل. النظارات الشمسية ضرورية.',
    },
    query: 'cat=desert',
  },
  {
    key: 'coast',
    photo: 'essaouira',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    day: '19–25',
    night: '14–18',
    text: {
      en: 'Essaouira is mild all year, and the best escape when Marrakech is hot in summer. The trade wind blows strongly from May to August.',
      fr: 'Essaouira est douce toute l’année, et c’est la meilleure échappée quand Marrakech est brûlante l’été. L’alizé souffle fort de mai à août.',
      ar: 'الصويرة معتدلة طوال السنة، وهي أفضل ملاذ عندما تكون مراكش حارة صيفا. تهب الرياح بقوة من ماي إلى غشت.',
    },
    tip: {
      en: 'Bring a windproof jacket, even in August.',
      fr: 'Prenez un coupe-vent, même en août.',
      ar: 'أحضروا سترة واقية من الرياح، حتى في غشت.',
    },
    query: 'q=essaouira',
  },
  {
    key: 'cities',
    photo: 'fes-medina',
    bestMonths: [3, 4, 5, 10, 11],
    day: '20–28',
    night: '9–15',
    text: {
      en: 'Spring and autumn are ideal for walking the medinas. July and August often pass 38 °C in Marrakech and Fes; winter is sunny and quiet.',
      fr: 'Le printemps et l’automne sont idéaux pour arpenter les médinas. En juillet-août, Marrakech et Fès dépassent souvent 38 °C ; l’hiver est ensoleillé et calme.',
      ar: 'الربيع والخريف مثاليان للتجول في المدن العتيقة. في يوليوز وغشت تتجاوز الحرارة غالبا 38 درجة في مراكش وفاس، والشتاء مشمس وهادئ.',
    },
    tip: {
      en: 'Comfortable shoes and clothes that cover shoulders and knees for mosques and madrasas.',
      fr: 'Des chaussures confortables et des vêtements couvrant épaules et genoux pour les mosquées et médersas.',
      ar: 'أحذية مريحة وملابس تغطي الكتفين والركبتين لزيارة المساجد والمدارس.',
    },
    query: 'cat=culture',
  },
];
