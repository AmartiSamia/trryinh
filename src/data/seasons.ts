/*
 * "Where to go by season". Temperatures are rough climate averages for the
 * main base of each region (Imlil, Merzouga, Essaouira, Marrakech/Fes).
 * TODO(youssef): check these against your own experience.
 * TODO(review-ar/es/de/pt): native review of the translations.
 */
import type { Text as L } from '../i18n/routes';

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
    photo: 'u-toubkal-snow',
    bestMonths: [4, 5, 6, 9, 10],
    day: '18–28',
    night: '5–14',
    text: {
      en: 'Spring and autumn are perfect for walking. Summer is fine in Imlil but hot on the drive; from December to March the peaks are under snow and Toubkal becomes a winter climb.',
      fr: 'Le printemps et l’automne sont parfaits pour marcher. L’été va bien à Imlil mais la route est chaude ; de décembre à mars, les sommets sont enneigés et le Toubkal devient une ascension hivernale.',
      es: 'La primavera y el otoño son perfectos para caminar. El verano va bien en Imlil, pero la carretera es calurosa; de diciembre a marzo las cumbres están nevadas y el Toubkal se convierte en una ascensión invernal.',
      de: 'Frühling und Herbst sind ideal zum Wandern. Im Sommer ist es in Imlil angenehm, die Anfahrt aber heiß; von Dezember bis März liegen die Gipfel unter Schnee und der Toubkal wird zur Winterbesteigung.',
      pt: 'A primavera e o outono são perfeitos para caminhar. O verão é bom em Imlil, mas a estrada é quente; de dezembro a março os cumes estão com neve e o Toubkal torna-se uma subida de inverno.',
      ar: 'الربيع والخريف مثاليان للمشي. الصيف مناسب في إمليل لكن الطريق حار، ومن دجنبر إلى مارس تكون القمم مكسوة بالثلج ويصبح صعود توبقال تسلقا شتويا.',
    },
    tip: {
      en: 'Even in July the summit is close to 0 °C at dawn. Bring a warm jacket, gloves and a hat.',
      fr: 'Même en juillet, il fait près de 0 °C au sommet à l’aube. Prenez veste chaude, gants et bonnet.',
      es: 'Incluso en julio, en la cumbre hace cerca de 0 °C al amanecer. Lleve chaqueta de abrigo, guantes y gorro.',
      de: 'Selbst im Juli hat es am Gipfel bei Sonnenaufgang um 0 °C. Nehmen Sie eine warme Jacke, Handschuhe und Mütze mit.',
      pt: 'Mesmo em julho, no cume estão perto de 0 °C ao amanhecer. Leve casaco quente, luvas e gorro.',
      ar: 'حتى في يوليوز تقترب الحرارة في القمة من 0 درجة عند الفجر. أحضروا سترة دافئة وقفازات وقبعة.',
    },
    query: 'cat=trekking',
  },
  {
    key: 'desert',
    photo: 'u-camels-lima',
    bestMonths: [3, 4, 5, 10, 11],
    day: '22–30',
    night: '8–16',
    text: {
      en: 'March to May and October–November give warm days and fresh nights. Summer days pass 40 °C; winter days are pleasant but nights at camp are cold.',
      fr: 'De mars à mai et en octobre-novembre, journées chaudes et nuits fraîches. L’été dépasse 40 °C ; l’hiver, les journées sont agréables mais les nuits au camp sont froides.',
      es: 'De marzo a mayo y en octubre–noviembre, días cálidos y noches frescas. En verano se superan los 40 °C; en invierno los días son agradables pero las noches en el campamento son frías.',
      de: 'März bis Mai sowie Oktober–November bringen warme Tage und frische Nächte. Im Sommer über 40 °C; im Winter angenehme Tage, aber kalte Nächte im Camp.',
      pt: 'De março a maio e em outubro–novembro, dias quentes e noites frescas. No verão passa dos 40 °C; no inverno os dias são agradáveis, mas as noites no acampamento são frias.',
      ar: 'من مارس إلى ماي وفي أكتوبر ونونبر أيام دافئة وليالٍ منعشة. في الصيف تتجاوز الحرارة 40 درجة، وفي الشتاء الأيام لطيفة لكن الليالي في المخيم باردة.',
    },
    tip: {
      en: 'A scarf for sun and sand, and a fleece for the night. Sunglasses are a must.',
      fr: 'Un chèche contre le soleil et le sable, une polaire pour la nuit. Les lunettes de soleil sont indispensables.',
      es: 'Un pañuelo contra el sol y la arena, y un forro polar para la noche. Las gafas de sol son imprescindibles.',
      de: 'Ein Tuch gegen Sonne und Sand und ein Fleece für die Nacht. Eine Sonnenbrille ist Pflicht.',
      pt: 'Um lenço contra o sol e a areia, e um polar para a noite. Os óculos de sol são indispensáveis.',
      ar: 'وشاح للحماية من الشمس والرمل، وسترة صوفية لليل. النظارات الشمسية ضرورية.',
    },
    query: 'cat=desert',
  },
  {
    key: 'coast',
    photo: 'u-essa-wall',
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    day: '19–25',
    night: '14–18',
    text: {
      en: 'Essaouira is mild all year, and the best escape when Marrakech is hot in summer. The trade wind blows strongly from May to August.',
      fr: 'Essaouira est douce toute l’année, et c’est la meilleure échappée quand Marrakech est brûlante l’été. L’alizé souffle fort de mai à août.',
      es: 'Essaouira es templada todo el año y la mejor escapada cuando Marrakech arde en verano. El alisio sopla fuerte de mayo a agosto.',
      de: 'Essaouira ist das ganze Jahr mild und die beste Flucht, wenn Marrakesch im Sommer heiß ist. Von Mai bis August weht der Passat kräftig.',
      pt: 'Essaouira é amena todo o ano e a melhor fuga quando Marraquexe escalda no verão. O vento alísio sopra forte de maio a agosto.',
      ar: 'الصويرة معتدلة طوال السنة، وهي أفضل ملاذ عندما تكون مراكش حارة صيفا. تهب الرياح بقوة من ماي إلى غشت.',
    },
    tip: {
      en: 'Bring a windproof jacket, even in August.',
      fr: 'Prenez un coupe-vent, même en août.',
      es: 'Lleve un cortavientos, incluso en agosto.',
      de: 'Nehmen Sie eine winddichte Jacke mit, selbst im August.',
      pt: 'Leve um corta-vento, mesmo em agosto.',
      ar: 'أحضروا سترة واقية من الرياح، حتى في غشت.',
    },
    query: 'q=essaouira',
  },
  {
    key: 'cities',
    photo: 'u-koutoubia',
    bestMonths: [3, 4, 5, 10, 11],
    day: '20–28',
    night: '9–15',
    text: {
      en: 'Spring and autumn are ideal for walking the medinas. July and August often pass 38 °C in Marrakech and Fes; winter is sunny and quiet.',
      fr: 'Le printemps et l’automne sont idéaux pour arpenter les médinas. En juillet-août, Marrakech et Fès dépassent souvent 38 °C ; l’hiver est ensoleillé et calme.',
      es: 'La primavera y el otoño son ideales para recorrer las medinas. En julio y agosto Marrakech y Fez suelen superar los 38 °C; el invierno es soleado y tranquilo.',
      de: 'Frühling und Herbst sind ideal für die Medinas. Im Juli und August sind es in Marrakesch und Fès oft über 38 °C; der Winter ist sonnig und ruhig.',
      pt: 'A primavera e o outono são ideais para percorrer as medinas. Em julho e agosto Marraquexe e Fez passam muitas vezes dos 38 °C; o inverno é soalheiro e calmo.',
      ar: 'الربيع والخريف مثاليان للتجول في المدن العتيقة. في يوليوز وغشت تتجاوز الحرارة غالبا 38 درجة في مراكش وفاس، والشتاء مشمس وهادئ.',
    },
    tip: {
      en: 'Comfortable shoes and clothes that cover shoulders and knees for mosques and madrasas.',
      fr: 'Des chaussures confortables et des vêtements couvrant épaules et genoux pour les mosquées et médersas.',
      es: 'Calzado cómodo y ropa que cubra hombros y rodillas para mezquitas y madrasas.',
      de: 'Bequeme Schuhe und Kleidung, die Schultern und Knie bedeckt, für Moscheen und Medersen.',
      pt: 'Calçado confortável e roupa que cubra ombros e joelhos para mesquitas e madraças.',
      ar: 'أحذية مريحة وملابس تغطي الكتفين والركبتين لزيارة المساجد والمدارس.',
    },
    query: 'cat=culture',
  },
];
