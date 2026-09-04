import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BrandColorGallery from "@/components/BrandColorGallery";
import { brands, brandGroups } from "@/data/site";
import { brandColors } from "@/data/colors";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const brand = brands.find((b) => b.slug === params.slug);
  if (!brand) return {};
  const groupLabel = brandGroups.find((g) => g.id === brand.group)?.label ?? "";
  return {
    title: brand.name,
    description: `${brand.name} ${groupLabel.toLowerCase()} koleksiyonu — ${brand.desc}`,
    openGraph: {
      title: `Boloğlu — ${brand.name} Koleksiyonu`,
      description: brand.desc,
      images: [
        {
          url: brandColors[brand.slug]?.[0]?.src ?? "/images/hero.jpg",
          alt: `${brand.name} koleksiyonundan bir renk ve doku görünümü`,
        },
      ],
    },
  };
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands.find((b) => b.slug === params.slug);
  if (!brand) notFound();
  const colors = brandColors[brand.slug] ?? [];
  const groupLabel = brandGroups.find((g) => g.id === brand.group)?.label ?? "";
  const related = brands.filter((b) => b.group === brand.group && b.slug !== brand.slug).slice(0, 3);

  return (
    <>
      <section className="bg-stone-50 pb-12 pt-36 sm:pt-44">
        <div className="container-x">
          <nav aria-label="Konum" className="mb-8 text-xs text-stone-500">
            <Link href="/urunler" className="hover:text-slate-600">
              Ürünler
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-800">{brand.name}</span>
          </nav>
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow">{groupLabel}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={`${brand.name} logosu`}
                className="mt-6 max-h-16 w-auto object-contain"
              />
            </div>
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-stone-600">{brand.desc}</p>
          <Link href="/uygulamalar/" className="btn-outline mt-8">
            {brand.name} Uygulamalarını Gör
          </Link>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-x">
          <p className="eyebrow">{brand.name} Koleksiyon</p>
          <div className="mt-8">
            <BrandColorGallery brandName={brand.name} colors={colors} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-stone-200 bg-stone-50 py-14">
          <div className="container-x">
            <p className="eyebrow">Benzer Markalar</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((b) => (
                <Link
                  key={b.slug}
                  href={`/urunler/${b.slug}`}
                  className="flex items-center gap-4 border border-stone-200 bg-white p-5 transition-colors hover:border-stone-400"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.logo} alt={`${b.name} logosu`} className="max-h-10 w-auto object-contain" />
                  <span className="text-sm font-semibold text-stone-800">{b.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-stone-900 py-14 text-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-xl font-display text-xl leading-snug sm:text-2xl">
            {brand.name} hakkında daha fazla bilgi almak için bizi arayabilirsiniz.
          </h2>
          <a href="tel:+905316055762" className="btn-light">
            0531 605 57 62
          </a>
        </div>
      </section>
    </>
  );
}
