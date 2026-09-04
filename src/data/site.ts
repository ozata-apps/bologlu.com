import { withBasePath } from "@/lib/assetPath";

export const site = {
  name: "BOLOĞLU",
  tagline: "Mutfak ve Banyo Tezgâhlarında İnce İşçilik",
  address: "İkitelli OSB Mutsan Sanayi Sitesi M1 Blok No:9, Başakşehir / İstanbul",
  phoneFixed: "0212 486 30 14",
  phoneFixedHref: "tel:+902124863014",
  phoneGsm: "0531 605 57 62",
  phoneGsmHref: "tel:+905316055762",
  fax: "0212 486 30 16",
  email: "info@bologlu.com",
  emailHref: "mailto:info@bologlu.com",
  whatsapp: "https://wa.me/905316055762",
  instagram: "https://instagram.com/bologlugranit",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2126.0464287963764!2d28.79728315207679!3d41.097757196340226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caaf4e15f38703%3A0xdf665164e1406ae1!2sBOLO%C4%9ELU%20%C3%87%C4%B0MSTONE-BELENCO-GRAN%C4%B0T%20MUTFAK%20%26%20BANYO%20TEZGAHLARI!5e0!3m2!1str!2str!4v1587655963768!5m2!1str!2str",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=41.0977572,28.7972832",
};

export const heroContent = {
  eyebrow: "Doğal Taş & Yüzey Çözümleri",
  title: "Mutfak ve Banyo Tezgâhlarında İnce İşçilik",
  desc: "Çimstone, Belenco, Granit, Coante ve daha fazlası; kalite, estetik ve zarafet birinci sınıf işçilikle buluşuyor.",
  ctaPrimary: { label: "Uygulamalarımızı Keşfedin", href: "/uygulamalar" },
  ctaSecondary: { label: "İletişime Geçin", href: "/iletisim" },
  image: withBasePath("/images/hero.jpg"),
  imageAlt:
    "Boloğlu uygulaması: açık renk kuvars tezgâh ve bütün duvar süpürgeliği bulunan modern mutfak",
};

export const brands = [
  {
    slug: "lamar",
    name: "Lamar",
    group: "porcelain",
    logo: withBasePath("/images/brands/lamar.png"),
    desc: "320cm x 80cm özel boyutlarında geniş format porselen levha çeşidi; doğal mermeri andıran tasarım yelpazesi ile yaşam alanlarına zarif bir görünüm katar.",
  },
  {
    slug: "geoslab",
    name: "GeoSlab",
    group: "porcelain",
    logo: withBasePath("/images/brands/geoslab.png"),
    desc: "Yüksek İtalyan teknolojisiyle üretilen porselen ürünler; çizilmelere, ısıya, güneşe ve kimyasallara karşı yüksek direnç gösterir.",
  },
  {
    slug: "neolith",
    name: "Neolith",
    group: "porcelain",
    logo: withBasePath("/images/brands/neolith.png"),
    desc: "En gelişmiş sinterlenmiş taş yüzeylerin tasarımı ve üretiminde dünya lideri; iç ve dış mekân uygulamaları için en uygun yüzey malzemesi.",
  },
  {
    slug: "belenco",
    name: "Belenco",
    group: "quartz",
    logo: withBasePath("/images/brands/belenco.png"),
    desc: "%90’ın üzerinde kuvars minerali içeren kuvars yüzeyler; gözeneksiz yapısı ile hijyenik, çizilmeye ve lekelenmeye dirençli.",
  },
  {
    slug: "cimstone",
    name: "Çimstone",
    group: "quartz",
    logo: withBasePath("/images/brands/cimstone.png"),
    desc: "İtalyan BRETON teknolojisiyle üretilen kuvars esaslı kompoze taş; kompakt yapısı ile sıvı emmez, leke tutmaz.",
  },
  {
    slug: "coante",
    name: "Coante",
    group: "quartz",
    logo: withBasePath("/images/brands/coante.png"),
    desc: "Yenilikçi Breton teknolojisi ile kuvars esaslı kompoze plaka; yüksek çizilme ve kimyasal direnç, leke tutmaz ve hijyenik yapı.",
  },
  {
    slug: "granit",
    name: "Granit",
    group: "natural",
    logo: withBasePath("/images/brands/granit.png"),
    desc: "Milyonlarca yıl süren jeolojik oluşumlarla meydana gelen doğal magma kayacı; yeryüzünün en sert ve dayanıklı yapı malzemesi.",
  },
];

export const brandGroups = [
  { id: "porcelain", label: "Porselen / Sinterlenmiş Taş" },
  { id: "quartz", label: "Kuvars" },
  { id: "natural", label: "Doğal Taş" },
];

export const whyUs = [
  { title: "20 Yılı Aşkın Tecrübe", desc: "20 yılı aşkın iş tecrübemiz ile hizmetinizdeyiz." },
  { title: "%100 Yerli Firma", desc: "%100 yerli bir firma olmanın gururunu yaşıyoruz." },
  { title: "1. Sınıf Ürün Kalitesi", desc: "Bütün ürünlerimiz ve ekipmanlarımız her daim 1. sınıftır." },
  { title: "7x24 Teknik Destek", desc: "Teknik olarak 7/24 destek verebiliriz." },
  { title: "Mutlu Müşteri", desc: "Mutlu müşteri politikamızla isteklerinize cevap veriyoruz." },
  { title: "Profesyonel Ölçülendirme ve Montaj", desc: "Tamamen profesyonel ölçüm ve profesyonel montaj için yeterli teknolojiyi hizmetinize sunuyoruz." },
];

export const process = [
  {
    no: "01",
    title: "Profesyonel Ölçülendirme",
    desc: "Tamamen profesyonel ölçüm için yeterli teknolojiyi hizmetinize sunuyoruz.",
  },
  {
    no: "02",
    title: "Üretim",
    desc: "Ürün çeşitliliğini, teknoloji ve personel gücünü sürekli geliştirir, güç sınırlarını zorlayan tasarımlara imza atıyoruz.",
  },
  {
    no: "03",
    title: "İnce İşçilik",
    desc: "Ustalık, beceri ve tecrübeyi birleştirerek banyo ve mutfak tezgâhı projelerinizi titizlikle uyguluyoruz.",
  },
  {
    no: "04",
    title: "Profesyonel Montaj",
    desc: "Profesyonel montaj için yeterli teknolojiyi hizmetinize sunuyoruz.",
  },
];

export const partners = [
  { name: "Teka", logo: withBasePath("/images/brands/teka.png") },
  { name: "Asil", logo: withBasePath("/images/brands/asil.png") },
  { name: "Franke", logo: withBasePath("/images/brands/franke.png") },
  { name: "Ukinox", logo: withBasePath("/images/brands/ukinox.png") },
  { name: "Silestone", logo: withBasePath("/images/brands/silestone.png") },
];

export const about = {
  intro:
    "Firmamız, kalite, estetik ve zarafeti birinci sınıf işçilik ile birleştirmiştir. Zamanında ve güvenilir çalışma prensibiyle, müşteri memnuniyetini en üst seviyede tutmaktadır.",
  paragraphs: [
    "Ürün çeşitliliğini, teknoloji ve personel gücünü sürekli geliştirir, gücü sınırlarını zorlayan tasarımlara imza atarak hedefini her zaman yükseltmektedir. Müşteri memnuniyetini ön planda tutarak ustalık, beceri ve tecrübeyi birleştirerek banyo ve mutfak tezgâhı ile ilgili projelerinizi titizlikle uygular.",
    "Ana malzeme olarak Çimstone, Belenco, Granit, Coante gibi doğal taş ve doğal taş ürünlerini kullanmaktadır. Aynı zamanda özel tasarım ince işçilik süpürgelik modeli üretimimiz ile hem görselliği hem de dayanıklılığı ön planda tutmaktadır.",
  ],
  quote: {
    text: "Devler gibi eserler bırakmak için, karıncalar gibi çalışmak gerekir",
    author: "Necip Fazıl Kısakürek",
  },
};

export const aboutHighlights = [
  {
    title: "İnce İşçilik",
    desc: "Ustalık, beceri ve tecrübeyi birleştirerek banyo ve mutfak tezgâhı ile ilgili projelerinizi titizlikle uygularız.",
  },
  {
    title: "Özel Tasarım Yatık Detaylı Süpürgelikler",
    desc: "Özel tasarım ince işçilik süpürgelik modeli üretimimiz ile hem görselliği hem de dayanıklılığı ön planda tutmaktadır.",
  },
];
