import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { withBasePath } from "@/lib/assetPath";
import { about, aboutHighlights, whyUs } from "@/data/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Boloğlu; mutfak ve banyo tezgâhı projelerini ustalık, beceri ve tecrübeyi birleştirerek titizlikle uygular. Özel tasarım süpürgelik üretimiyle görsellik ve dayanıklılık.",
  openGraph: {
    title: "Boloğlu Hakkımızda",
    description:
      "Mutfak ve banyo tezgâhı projelerini ustalık, beceri ve tecrübeyi birleştirerek titizlikle uygularız. Özel tasarım süpürgelik üretimimizle görselliği ve dayanıklılığı ön planda tutarız.",
    images: [{ url: "/images/apps/belenco-9113-alinda.jpg", width: 1200, height: 800, alt: "Boloğlu işçiliğiyle uygulanmış mutfak tezgâhı" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-stone-50 pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Hakkımızda</p>
          <h1 className="section-title mt-4">Biz Kimiz</h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">{about.intro}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden bg-stone-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath("/images/apps/belenco-9113-alinda.jpg")}
                alt="Boloğlu işçiliğiyle uygulanmış Belenco 9113 Alinda mutfak tezgâhı"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="leading-relaxed text-stone-600">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-50 py-16 sm:py-24">
        <div className="container-x">
          <p className="eyebrow">Nedir Bizim Farkımız</p>
          <div className="mt-10 grid gap-px overflow-hidden border border-stone-200 bg-stone-200 md:grid-cols-2">
            {aboutHighlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80} className="bg-white">
                <div className="h-full p-10">
                  <h2 className="font-display text-2xl text-stone-900">{h.title}</h2>
                  <p className="mt-4 leading-relaxed text-stone-600">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-2">
            <Reveal>
              <blockquote className="border-l-2 border-slate-500 pl-6">
                <p className="font-display text-2xl italic leading-relaxed text-stone-700">
                  “{about.quote.text}”
                </p>
                <cite className="mt-4 block text-sm font-medium not-italic text-stone-500">
                  — {about.quote.author}
                </cite>
              </blockquote>
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="section-title">Bizi seçmek için sebepler.</h2>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} delay={i * 50}>
                  <div className="border-t border-stone-200 pt-5">
                    <h3 className="text-base font-semibold text-stone-900">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={320}>
              <Link href="/iletisim" className="btn-primary mt-10">
                Projenizi Konuşalım
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
