// Adds a second batch of photos (Unsplash + Wikimedia Commons) with 6-language alt text.
// Existing entries are left untouched. node scripts/add-photos-2.mjs
// TODO(review-ar/es/de/pt): alt texts need a native review.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import sharp from 'sharp';
sharp.cache(false);
const UA = { 'User-Agent': 'IberdanSiteBuilder/0.1 (photo licence lookup)' };
const cand = JSON.parse(readFileSync('scripts/unsplash-candidates.json', 'utf8'));
const commons = {
  'imilchil-tislit-2': '1 بحيرة تيسليت.JPG',
  'imilchil-tislit': 'Tislit Lake.jpg',
  'oukaimeden': 'Oukaimeden 1.jpg',
  'oukaimeden-village': 'One of the scenic locations of the Oukaimeden village.JPG',
};
const alt = {
  'u-toubkal-peak': ['The snowy summit ridges of Toubkal under a deep blue sky', 'Les crêtes enneigées du Toubkal sous un ciel bleu profond', 'Las crestas nevadas del Toubkal bajo un cielo azul intenso', 'Die verschneiten Gipfelgrate des Toubkal unter tiefblauem Himmel', 'As cristas nevadas do Toubkal sob um céu azul profundo', 'قمم توبقال المثلجة تحت سماء زرقاء عميقة'],
  'u-toubkal-arms': ['Two hikers celebrating on the snowy summit of Toubkal', 'Deux randonneurs heureux sur le sommet enneigé du Toubkal', 'Dos senderistas celebrando en la cumbre nevada del Toubkal', 'Zwei Wanderer jubeln auf dem verschneiten Gipfel des Toubkal', 'Dois caminhantes a celebrar no cume nevado do Toubkal', 'متنزهان يحتفلان على قمة توبقال المثلجة'],
  'u-toubkal-group': ['Hikers on a high Atlas trail with snowy peaks ahead', 'Des randonneurs sur un sentier du Haut Atlas face aux sommets enneigés', 'Senderistas en un sendero del Alto Atlas frente a cumbres nevadas', 'Wanderer auf einem Pfad im Hohen Atlas vor verschneiten Gipfeln', 'Caminhantes num trilho do Alto Atlas com cumes nevados à frente', 'متنزهون على مسلك في الأطلس الكبير أمام قمم مثلجة'],
  'u-ouka-lake': ['A lake below snowy peaks at Oukaïmeden in winter', 'Un lac sous les sommets enneigés d’Oukaïmeden en hiver', 'Un lago bajo las cumbres nevadas de Oukaïmeden en invierno', 'Ein See unter verschneiten Gipfeln in Oukaïmeden im Winter', 'Um lago sob cumes nevados em Oukaïmeden no inverno', 'بحيرة تحت القمم المثلجة في أوكايمدن شتاءً'],
  'u-ouka-badlands': ['Red ridges and green slopes in the High Atlas near Oukaïmeden', 'Crêtes rouges et pentes vertes du Haut Atlas près d’Oukaïmeden', 'Crestas rojas y laderas verdes del Alto Atlas cerca de Oukaïmeden', 'Rote Grate und grüne Hänge im Hohen Atlas bei Oukaïmeden', 'Cristas vermelhas e encostas verdes do Alto Atlas perto de Oukaïmeden', 'سلاسل حمراء ومنحدرات خضراء في الأطلس الكبير قرب أوكايمدن'],
  'u-imilchil-road': ['A mountain road through the high plateaus around Imilchil', 'Une route de montagne sur les hauts plateaux d’Imilchil', 'Una carretera de montaña por las mesetas altas de Imilchil', 'Eine Bergstraße über die Hochebenen um Imilchil', 'Uma estrada de montanha pelos planaltos de Imilchil', 'طريق جبلي عبر الهضاب العالية حول إملشيل'],
  'u-imilchil-village': ['An earth village in the dry valleys of the Eastern High Atlas', 'Un village en terre dans les vallées sèches du Haut Atlas oriental', 'Un pueblo de tierra en los valles secos del Alto Atlas oriental', 'Ein Lehmdorf in den trockenen Tälern des östlichen Hohen Atlas', 'Uma aldeia de terra nos vales secos do Alto Atlas oriental', 'قرية طينية في الوديان الجافة للأطلس الكبير الشرقي'],
  'u-ouzoud-1': ['The Ouzoud waterfalls pouring over green cliffs', 'Les cascades d’Ouzoud tombant de falaises verdoyantes', 'Las cascadas de Ouzoud cayendo por acantilados verdes', 'Die Ouzoud-Wasserfälle stürzen über grüne Felsen', 'As cascatas de Ouzoud a cair de falésias verdes', 'شلالات أوزود تنحدر من جروف خضراء'],
  'u-ouzoud-2': ['The upper Ouzoud falls with terraces among the trees', 'Le haut des cascades d’Ouzoud et ses terrasses parmi les arbres', 'La parte alta de las cascadas de Ouzoud con terrazas entre árboles', 'Die oberen Ouzoud-Fälle mit Terrassen zwischen Bäumen', 'O topo das cascatas de Ouzoud com esplanadas entre árvores', 'أعلى شلالات أوزود والمقاهي بين الأشجار'],
  'u-ouzoud-3': ['A wide view of the Ouzoud gorge and its waterfalls', 'Vue d’ensemble des gorges d’Ouzoud et de leurs cascades', 'Vista amplia del barranco de Ouzoud y sus cascadas', 'Weiter Blick auf die Ouzoud-Schlucht und ihre Wasserfälle', 'Vista ampla do desfiladeiro de Ouzoud e das suas cascatas', 'منظر واسع لمضيق أوزود وشلالاته'],
  'u-ouzoud-boat': ['A small boat at the foot of the Ouzoud falls', 'Une barque au pied des cascades d’Ouzoud', 'Una barca al pie de las cascadas de Ouzoud', 'Ein kleines Boot am Fuß der Ouzoud-Fälle', 'Um pequeno barco no sopé das cascatas de Ouzoud', 'قارب صغير عند أسفل شلالات أوزود'],
  'u-agafay-view': ['The golden hills of the Agafay desert with the Atlas on the horizon', 'Les collines dorées du désert d’Agafay, l’Atlas à l’horizon', 'Las colinas doradas del desierto de Agafay con el Atlas en el horizonte', 'Die goldenen Hügel der Agafay-Wüste, der Atlas am Horizont', 'As colinas douradas do deserto de Agafay com o Atlas no horizonte', 'تلال صحراء أكفاي الذهبية والأطلس في الأفق'],
  'u-agafay-camels': ['A camel caravan crossing the Agafay desert', 'Une caravane de dromadaires dans le désert d’Agafay', 'Una caravana de dromedarios cruzando el desierto de Agafay', 'Eine Kamelkarawane durchquert die Agafay-Wüste', 'Uma caravana de dromedários a atravessar o deserto de Agafay', 'قافلة جمال تعبر صحراء أكفاي'],
  'u-agafay-tent': ['A shaded camp in the stony Agafay desert', 'Un camp ombragé dans le désert caillouteux d’Agafay', 'Un campamento con sombra en el desierto pedregoso de Agafay', 'Ein schattiges Camp in der steinigen Agafay-Wüste', 'Um acampamento à sombra no deserto pedregoso de Agafay', 'مخيم مظلل في صحراء أكفاي الحجرية'],
  'u-balloons': ['Hot-air balloons rising over the desert at sunrise near Marrakech', 'Des montgolfières au-dessus du désert au lever du soleil près de Marrakech', 'Globos aerostáticos sobre el desierto al amanecer cerca de Marrakech', 'Heißluftballons über der Wüste bei Sonnenaufgang nahe Marrakesch', 'Balões de ar quente sobre o deserto ao nascer do sol perto de Marraquexe', 'مناطيد فوق الصحراء عند الشروق قرب مراكش'],
  'imilchil-tislit-2': ['Lake Tislit at Imilchil, still water reflecting the mountains', 'Le lac Tislit à Imilchil, l’eau calme reflète les montagnes', 'El lago Tislit en Imilchil, con las montañas reflejadas', 'Der Tislit-See bei Imilchil, in dem sich die Berge spiegeln', 'O lago Tislit em Imilchil, com as montanhas refletidas', 'بحيرة تيسليت في إملشيل والجبال تنعكس على مياهها الهادئة'],
  'imilchil-tislit': ['The turquoise Lake Tislit among trees and dry hills', 'Le lac Tislit turquoise entre arbres et collines sèches', 'El lago Tislit turquesa entre árboles y colinas secas', 'Der türkisfarbene Tislit-See zwischen Bäumen und trockenen Hügeln', 'O lago Tislit turquesa entre árvores e colinas secas', 'بحيرة تيسليت الفيروزية بين الأشجار والتلال الجافة'],
  'oukaimeden': ['Pine trees and mountains at Oukaïmeden in summer', 'Pins et montagnes à Oukaïmeden en été', 'Pinos y montañas en Oukaïmeden en verano', 'Kiefern und Berge in Oukaïmeden im Sommer', 'Pinheiros e montanhas em Oukaïmeden no verão', 'أشجار الصنوبر والجبال في أوكايمدن صيفا'],
  'oukaimeden-village': ['The snowy road and slopes of Oukaïmeden in winter', 'La route et les pentes enneigées d’Oukaïmeden en hiver', 'La carretera y las laderas nevadas de Oukaïmeden en invierno', 'Die verschneite Straße und Hänge von Oukaïmeden im Winter', 'A estrada e as encostas nevadas de Oukaïmeden no inverno', 'الطريق والمنحدرات المثلجة في أوكايمدن شتاءً'],
};
const photos = JSON.parse(readFileSync('src/content/photos.json', 'utf8'));
const has = new Set(photos.map((p) => p.id));
const save = async (id, buf) => writeFileSync(`src/assets/photos/${id}.jpg`, await sharp(buf).rotate().resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toBuffer());
for (const [id, a] of Object.entries(alt)) {
  if (has.has(id)) continue;
  let author, licence, licenceUrl, source, sourceName;
  if (id.startsWith('u-')) {
    const [ph, au, page] = cand[id];
    if (!existsSync(`src/assets/photos/${id}.jpg`)) {
      const r = await fetch(`https://images.unsplash.com/photo-${ph}?fm=jpg&q=85&w=2000&fit=max`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!r.ok) throw new Error(`${id} ${r.status}`);
      await save(id, Buffer.from(await r.arrayBuffer()));
    }
    [author, licence, licenceUrl, source, sourceName] = [au, 'Unsplash License', 'https://unsplash.com/license', page, 'Unsplash'];
  } else {
    const u = new URL('https://commons.wikimedia.org/w/api.php');
    Object.entries({ action: 'query', format: 'json', titles: `File:${commons[id]}`, prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '2000' }).forEach(([k, v]) => u.searchParams.set(k, v));
    const j = await (await fetch(u, { headers: UA })).json();
    const ii = Object.values(j.query.pages)[0].imageinfo[0];
    const m = ii.extmetadata;
    const strip = (x) => (x ?? '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (!existsSync(`src/assets/photos/${id}.jpg`)) {
      for (let a = 0; a < 6; a++) {
        const r = await fetch(ii.thumburl, { headers: UA });
        const ct = r.headers.get('content-type') ?? '';
        if (r.ok && ct.startsWith('image/')) { await save(id, Buffer.from(await r.arrayBuffer())); break; }
        await new Promise((ok) => setTimeout(ok, 5000 * (a + 1)));
      }
      await new Promise((ok) => setTimeout(ok, 1500));
    }
    [author, licence, licenceUrl, source, sourceName] = [strip(m.Artist?.value), strip(m.LicenseShortName?.value), m.LicenseUrl?.value ?? 'https://creativecommons.org/publicdomain/mark/1.0/', ii.descriptionurl, 'Wikimedia Commons'];
  }
  const tiny = await sharp(readFileSync(`src/assets/photos/${id}.jpg`)).resize(16).webp({ quality: 40 }).toBuffer();
  photos.push({
    id, file: `../assets/photos/${id}.jpg`,
    alt: { en: a[0], fr: a[1], es: a[2], de: a[3], pt: a[4], ar: a[5] },
    author, licence, licenceUrl, source, sourceName,
    placeholder: `data:image/webp;base64,${tiny.toString('base64')}`,
  });
  console.log('added', id, '|', author, '|', licence);
}
writeFileSync('src/content/photos.json', JSON.stringify(photos, null, 2) + '\n');
console.log(photos.length, 'photos');
