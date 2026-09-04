import Link from "next/link";
import Reveal from "@/components/Reveal";
import FeaturedApplications from "@/components/FeaturedApplications";
import { site, heroContent, brands, brandGroups, whyUs, process, partners, about } from "@/data/site";
import { applications } from "@/data/applications";
import { withBasePath } from "@/lib/assetPath";

export default function HomePage() {
  const featured = [
    applications[0], // Belenco 7537
    applications[3], // Belenco 1110 Perla White
    applications.find((a) => a.title === "Coante 7716 Arte Black")!,
    applications.find((a) => a.title === "Granit Emerald Pearl")!,
    applications.find((a) => a.title === "Çimstone 930 Ares")!,
    applications.find((a) => a.title === "Çimstone 890 Terra")!,
  ].filter(Boolean);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-stone-900">
        <img
          src={heroContent.image}
          alt={heroContent.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/35 to-stone-950/20" />
        <div className="container-x relative pb-14 pt-40 sm:pb-20">
          <Reveal>
            <p className="eyebrow text-stone-300">{heroContent.eyebrow}</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-7xl">
              {heroContent.title}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
              {heroContent.desc}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={heroContent.ctaPrimary.href} className="btn-light">
                {heroContent.ctaPrimary.label}
              </Link>
              <a
                href={heroContent.ctaSecondary.href === "/iletisim" ? "/iletisim/" : heroContent.ctaSecondary.href}
                className="btn border border-white/40 text-white hover:border-white"
              >
                {heroContent.ctaSecondary.label}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARKALAR */}
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center">Çalıştığımız Markalar</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-8 items-center sm:grid-cols-4 lg:grid-cols-7">
            {brands.map((b, i) => (
              <Reveal key={b.slug} delay={i * 60}>
                <Link
                  href={`/urunler/${b.slug}`}
                  className="group flex h-20 items-center justify-center p-2"
                  aria-label={`${b.name} ürünleri`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.logo}
                    alt={`${b.name} logosu`}
                    className="max-h-12 w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HİZMET / SÜREÇ */}
      <section className="bg-stone-50 py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">Nasıl Çalışıyoruz</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-4">
                Ölçülendirmeden montaja, titiz bir süreç.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.no} delay={i * 80} className="bg-white">
                <div className="flex h-full flex-col p-8">
                  <span className="font-display text-4xl text-stone-300">{p.no}</span>
                  <h3 className="mt-6 text-lg font-semibold text-stone-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UYGULAMALAR (ÖNE ÇIKAN) */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal delay={80}>
                <h2 className="section-title">UYGULAMALARIMIZ</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link href="/uygulamalar" className="btn-outline">
                Tümünü Görüntüle
              </Link>
            </Reveal>
          </div>

          <FeaturedApplications items={featured} />
        </div>
      </section>

      {/* NEDEN BOLOĞLU */}
      <section className="bg-stone-900 py-20 text-white sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-stone-400">Neden Boloğlu?</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-4 text-white">Bizi seçmek için sebepler.</h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="border-t border-stone-700 pt-6">
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-400">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SÜPÜRGELİK */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden bg-stone-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath("/images/apps/belenco-4043-aizano-ege-vitrifiye.jpg")}
                alt="Boloğlu özel tasarım yatık detaylı süpürgelik uygulaması, banyo tezgâhı"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Farkımız</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-4">
                Özel Tasarım Yatık Detaylı Süpürgelikler
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 leading-relaxed text-stone-600">
                Özel tasarım ince işçilik süpürgelik modeli üretimimiz ile hem
                görselliği hem de dayanıklılığı ön planda tutmaktadır. Ana malzeme
                olarak Çimstone, Belenco, Granit, Coante gibi doğal taş ve doğal taş
                ürünlerini kullanmaktadır.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Link href="/urunler" className="btn-outline mt-8">
                Ürünleri İnceleyin
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA ÖZETİ */}
      <section className="border-y border-stone-200 bg-stone-50 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="eyebrow">Hakkımızda</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="section-title mt-4">{about.intro.split(".")[0]}.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 leading-relaxed text-stone-600">{about.paragraphs[0]}</p>
            </Reveal>
            <Reveal delay={220}>
              <Link href="/hakkimizda" className="btn-outline mt-8">
                Daha Fazla Bilgi
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-2">
            <Reveal delay={120}>
              <blockquote className="border-l-2 border-slate-500 pl-6">
                <p className="font-display text-xl italic leading-relaxed text-stone-700">
                  “{about.quote.text}”
                </p>
                <cite className="mt-4 block text-sm font-medium not-italic text-stone-500">
                  — {about.quote.author}
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* İŞ BİRLİKÇİLERİ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow text-center">İş Birlikçilerimiz</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="flex h-16 items-center justify-center" aria-label={p.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={`${p.name} logosu`}
                    loading="lazy"
                    className="max-h-10 w-auto object-contain opacity-60"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FİNAL CTA */}
      <section className="relative overflow-hidden bg-stone-900 py-24 text-white sm:py-32">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight sm:text-5xl">
              Projeniz için doğru yüzeyi birlikte seçelim.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-xl text-stone-300">
              Ürün ve hizmetlerimiz hakkında daha fazla bilgi almak için bizi
              arayabilirsiniz.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={site.phoneGsmHref} className="btn-light text-base">
                {site.phoneGsm}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/40 text-white hover:border-white"
              >
                WhatsApp&apos;tan Yazın
              </a>
              <Link href="/iletisim/" className="btn border border-white/40 text-white hover:border-white">
                İletişime Geçin
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
