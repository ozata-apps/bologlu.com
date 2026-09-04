import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ApplicationsGrid from "@/components/ApplicationsGrid";

export const metadata: Metadata = {
  title: "Uygulamalar",
  description:
    "Boloğlu’nun gerçek mutfak ve banyo tezgâhı uygulamaları: Belenco, Çimstone, Coante ve Granit ile ince işçilik örnekleri.",
  openGraph: {
    title: "Boloğlu Uygulamaları",
    description:
      "Gerçek mutfak ve banyo tezgâhı uygulamalarımız: Belenco, Çimstone, Coante ve Granit ile ince işçilik örnekleri.",
    images: [{ url: "/images/apps/belenco-7537-metropol-grey-1.jpg", width: 1200, height: 1600, alt: "Belenco 7537 Metropol Grey mutfak tezgâhı uygulaması" }],
  },
};

export default function ApplicationsPage() {
  return (
    <>
      <section className="bg-stone-50 pb-12 pt-36 sm:pt-44">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Uygulamalar</p>
          <h1 className="section-title mt-4">Gerçek projeler, gerçek işçilik.</h1>
          <p className="mt-6 leading-relaxed text-stone-600">
            Mutfak ve banyo tezgâhı ile ilgili projelerinizi titizlikle uyguluyoruz.
            Aşağıdaki galeri, tamamlanmış çalışmalarımızdan seçmelerdir.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-x">
          <Reveal>
            <ApplicationsGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
