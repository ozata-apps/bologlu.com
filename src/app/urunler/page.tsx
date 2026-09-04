import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { brands, brandGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Boloğlu ürünleri: Lamar, GeoSlab ve Neolith porselen levhalar; Belenco, Çimstone ve Coante kuvars yüzeyler; Granit doğal taş. Koleksiyonları inceleyin.",
  openGraph: {
    title: "Boloğlu Ürünleri",
    description:
      "Porselen, kuvars ve doğal taş koleksiyonları: Lamar, GeoSlab, Neolith, Belenco, Çimstone, Coante ve Granit.",
    images: [{ url: "/images/apps/granit-emerald-pearl.jpg", width: 1200, height: 800, alt: "Granit Emerald Pearl tezgâh uygulaması" }],
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-stone-50 pb-14 pt-36 sm:pb-16 sm:pt-44">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Ürünler</p>
          <h1 className="section-title mt-4">
            Mutfak ve banyo tezgâhlarınız için yüzey koleksiyonları.
          </h1>
        </div>
      </section>

      {brandGroups.map((group) => {
        const groupBrands = brands.filter((b) => b.group === group.id);
        return (
          <section key={group.id} className="border-t border-stone-200 bg-white py-14 sm:py-16">
            <div className="container-x">
              <p className="eyebrow">{group.label}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {groupBrands.map((b, i) => (
                  <Reveal key={b.slug} delay={i * 60}>
                    <Link
                      href={`/urunler/${b.slug}`}
                      className="group flex h-full flex-col border border-stone-200 bg-white transition-colors hover:border-stone-400"
                    >
                      <div className="flex h-36 items-center justify-center border-b border-stone-100 p-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={b.logo}
                          alt={`${b.name} logosu`}
                          className="max-h-14 w-auto object-contain"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <h2 className="text-lg font-semibold text-stone-900">{b.name}</h2>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                          {b.desc}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                          Koleksiyonu Gör
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            <path d="M2 7h10M8.5 3.5 12 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-stone-900 py-16 text-center text-white">
        <div className="container-x">
          <Reveal>
            <h2 className="mx-auto max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
              İçerisinde bizim olmamız gereken projeleriniz için iletişime geçin.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link href="/iletisim" className="btn-light mt-8">
              İletişime Geçin
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
