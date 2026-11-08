// Downloads chosen Unsplash photos (Unsplash License: free for commercial use, credit
// appreciated) and appends them to src/content/photos.json with credits and alt text.
// node scripts/add-unsplash.mjs
// TODO(review-ar): Arabic alt texts need a native review.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import sharp from 'sharp';
sharp.cache(false);

const cand = JSON.parse(readFileSync('scripts/unsplash-candidates.json', 'utf8'));
const alt = {
  'u-camels-ward': ['A camel caravan crossing golden dunes at sunrise', 'Une caravane de dromadaires dans les dunes dorées au lever du soleil', 'قافلة جمال تعبر كثبانا ذهبية عند الشروق'],
  'u-camels-leret': ['Camels walking on a ridge of orange dunes under a blue sky', 'Des dromadaires sur une crête de dunes orangées sous un ciel bleu', 'جمال تمشي على قمة كثبان برتقالية تحت سماء زرقاء'],
  'u-camels-lima': ['Travellers riding camels across high orange dunes', 'Des voyageurs à dos de dromadaire dans les hautes dunes orangées', 'مسافرون على ظهور الجمال عبر كثبان برتقالية عالية'],
  'u-camels-dima': ['A line of camels and riders in the Sahara dunes', 'Une file de dromadaires et de cavaliers dans les dunes du Sahara', 'صف من الجمال وراكبيها في كثبان الصحراء'],
  'u-camels-malik': ['Travellers on camels setting off from a palm grove at the edge of the desert', 'Des voyageurs à dos de dromadaire partant d’une palmeraie au bord du désert', 'مسافرون على الجمال ينطلقون من واحة نخيل عند حافة الصحراء'],
  'u-merzouga-robe': ['A man in a yellow turban resting with his camels in the dunes', 'Un homme au turban jaune au repos avec ses dromadaires dans les dunes', 'رجل بعمامة صفراء يستريح مع جماله بين الكثبان'],
  'u-dunes-two': ['Two travellers sitting on a dune watching the sunset', 'Deux voyageurs assis sur une dune face au coucher du soleil', 'مسافران يجلسان على كثيب يشاهدان الغروب'],
  'u-quad': ['A quad bike riding over the dunes at the end of the day', 'Un quad dans les dunes en fin de journée', 'دراجة رباعية فوق الكثبان في آخر النهار'],
  'u-toubkal-snow': ['Snowy ridges of the High Atlas around Toubkal under a deep blue sky', 'Les crêtes enneigées du Haut Atlas autour du Toubkal sous un ciel bleu profond', 'قمم الأطلس الكبير المثلجة حول توبقال تحت سماء زرقاء'],
  'u-atlas-hiker': ['A hiker looking at snowy High Atlas peaks', 'Un randonneur face aux sommets enneigés du Haut Atlas', 'متنزه يتأمل قمم الأطلس الكبير المثلجة'],
  'u-atlas-horse': ['A man and a horse in a green Atlas valley below the mountains', 'Un homme et un cheval dans une vallée verte de l’Atlas', 'رجل وحصان في وادٍ أخضر بالأطلس تحت الجبال'],
  'u-atlas-houses': ['An earth village on a slope of the High Atlas', 'Un village en terre accroché à une pente du Haut Atlas', 'قرية طينية على سفح في الأطلس الكبير'],
  'u-atlas-valley': ['Red hills and a green valley in the Atlas', 'Collines rouges et vallée verte dans l’Atlas', 'تلال حمراء ووادٍ أخضر في الأطلس'],
  'u-atlas-road': ['A winding mountain road across the High Atlas', 'Une route de montagne en lacets dans le Haut Atlas', 'طريق جبلي متعرج عبر الأطلس الكبير'],
  'u-koutoubia': ['The Koutoubia minaret in Marrakech with the snowy Atlas behind', 'Le minaret de la Koutoubia à Marrakech, l’Atlas enneigé au fond', 'صومعة الكتبية في مراكش والأطلس المثلج خلفها'],
  'u-koutoubia-carriage': ['A horse carriage passing the Koutoubia mosque in Marrakech', 'Une calèche devant la mosquée de la Koutoubia à Marrakech', 'عربة خيل تمر قرب مسجد الكتبية في مراكش'],
  'u-lanterns': ['Lantern shop glowing in a Moroccan souk', 'Une boutique de lanternes illuminée dans un souk', 'متجر فوانيس مضيء في سوق مغربي'],
  'u-market-dusk': ['Jemaa el-Fna square at dusk with the Koutoubia minaret', 'La place Jemaa el-Fna au crépuscule et la Koutoubia', 'ساحة جامع الفنا عند الغسق وصومعة الكتبية'],
  'u-spices': ['Baskets of spices and dried flowers in a Marrakech market', 'Paniers d’épices et de fleurs séchées dans un marché de Marrakech', 'سلال توابل وأزهار مجففة في سوق بمراكش'],
  'u-tiles': ['Carved stucco and zellige tiles in a Moroccan monument', 'Stuc sculpté et zellige dans un monument marocain', 'جبس منقوش وزليج في معلمة مغربية'],
  'u-palace-fountain': ['Visitors in a marble courtyard with carved arches', 'Des visiteurs dans une cour de marbre aux arcs sculptés', 'زوار في ساحة رخامية بأقواس منقوشة'],
  'u-textiles': ['Colourful textiles hanging in a red-walled lane', 'Des textiles colorés suspendus dans une ruelle aux murs rouges', 'منسوجات ملونة معلقة في زقاق بجدران حمراء'],
  'u-chaouen-cliff': ['The blue houses of Chefchaouen spread on the hillside', 'Les maisons bleues de Chefchaouen étagées sur la colline', 'بيوت شفشاون الزرقاء على سفح التل'],
  'u-chaouen-courtyard': ['A blue courtyard with plants and pottery in Chefchaouen', 'Une cour bleue avec plantes et poteries à Chefchaouen', 'فناء أزرق بالنباتات والفخار في شفشاون'],
  'u-chaouen-stairs': ['Blue stairs lined with baskets and textiles in Chefchaouen', 'Un escalier bleu bordé de paniers et de textiles à Chefchaouen', 'درج أزرق تصطف عليه السلال والمنسوجات في شفشاون'],
  'u-chaouen-street': ['A narrow blue street with steps in Chefchaouen', 'Une ruelle bleue en escalier à Chefchaouen', 'زقاق أزرق ضيق بدرجات في شفشاون'],
  'u-aitben-aerial': ['The earth ksar of Aït Benhaddou above the river and the palm grove', 'Le ksar en terre d’Aït Benhaddou au-dessus de l’oued et de la palmeraie', 'قصر آيت بن حدو الطيني فوق الوادي وواحة النخيل'],
  'u-aitben-palm': ['Earth towers of Aït Benhaddou behind a palm tree', 'Les tours en terre d’Aït Benhaddou derrière un palmier', 'أبراج آيت بن حدو الطينية خلف نخلة'],
  'u-aitben-walk': ['Walking towards the ksar of Aït Benhaddou across the dry river', 'Marche vers le ksar d’Aït Benhaddou à travers l’oued à sec', 'المشي نحو قصر آيت بن حدو عبر الوادي الجاف'],
  'u-kasbah-rugs': ['Rooftops of an earth kasbah with rugs laid out in the sun', 'Les toits d’une kasbah en terre avec des tapis au soleil', 'أسطح قصبة طينية وسجاد معروض تحت الشمس'],
  'u-essa-boats': ['Blue fishing boats in the port of Essaouira', 'Les barques bleues du port d’Essaouira', 'قوارب الصيد الزرقاء في ميناء الصويرة'],
  'u-essa-wall': ['The sea tower of Essaouira’s port and blue boats', 'La tour du port d’Essaouira et les barques bleues', 'برج ميناء الصويرة والقوارب الزرقاء'],
  'u-essa-ramparts': ['The ocean ramparts of Essaouira at the end of the day', 'Les remparts d’Essaouira face à l’océan en fin de journée', 'أسوار الصويرة المطلة على المحيط في آخر النهار'],
  'u-essa-camel': ['Camels resting on the beach near Essaouira', 'Des dromadaires au repos sur la plage près d’Essaouira', 'جمال تستريح على الشاطئ قرب الصويرة'],
};

const photos = JSON.parse(readFileSync('src/content/photos.json', 'utf8')).filter((p) => !p.id.startsWith('u-'));
for (const [id, a] of Object.entries(alt)) {
  const [ph, author, page] = cand[id];
  const out = `src/assets/photos/${id}.jpg`;
  if (!existsSync(out)) {
    const r = await fetch(`https://images.unsplash.com/photo-${ph}?fm=jpg&q=85&w=2000&fit=max`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) throw new Error(`${id}: ${r.status}`);
    const buf = Buffer.from(await r.arrayBuffer());
    writeFileSync(out, await sharp(buf).resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toBuffer());
  }
  const tiny = await sharp(readFileSync(out)).resize(16).webp({ quality: 40 }).toBuffer();
  photos.push({
    id,
    file: `../assets/photos/${id}.jpg`,
    alt: { en: a[0], fr: a[1], ar: a[2] },
    author,
    licence: 'Unsplash License',
    licenceUrl: 'https://unsplash.com/license',
    source: page,
    sourceName: 'Unsplash',
    placeholder: `data:image/webp;base64,${tiny.toString('base64')}`,
  });
  console.log('ok', id);
}
writeFileSync('src/content/photos.json', JSON.stringify(photos, null, 2) + '\n');
console.log(photos.length, 'photos in total');
