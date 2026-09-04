import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Boloğlu iletişim bilgileri: telefon, e-posta, adres ve konum. İkitelli OSB Mutsan Sanayi Sitesi M1 Blok No:9 Başakşehir / İstanbul.",
  openGraph: {
    title: "Boloğlu İletişim",
    description:
      "Telefon, e-posta, adres ve konum bilgileri. İkitelli OSB Mutsan Sanayi Sitesi M1 Blok No:9 Başakşehir / İstanbul.",
    images: [{ url: "/images/hero.jpg", width: 2400, height: 1800, alt: "Boloğlu tezgâh uygulaması" }],
  },
};

const items = [
  { label: "Adres", value: "İkitelli OSB Mutsan Sanayi Sitesi M1 Blok No:9, Başakşehir / İstanbul" },
  { label: "Sabit Telefon", value: site.phoneFixed, href: site.phoneFixedHref },
  { label: "GSM", value: site.phoneGsm, href: site.phoneGsmHref },
  { label: "E-posta", value: site.email, href: site.emailHref },
  { label: "Faks", value: site.fax },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-stone-50 pb-14 pt-36 sm:pt-44">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">İletişim</p>
          <h1 className="section-title mt-4">Projenizi konuşalım.</h1>
          <p className="mt-6 leading-relaxed text-stone-600">
            Ürünlerimiz veya hizmetlerimizle ilgili yardıma ihtiyacınız varsa,
            lütfen bizimle iletişime geçiniz.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <dl className="divide-y divide-stone-200 border-y border-stone-200">
              {items.map((it) => (
                <div key={it.label} className="py-4">
                  <dt className="eyebrow text-stone-400">{it.label}</dt>
                  <dd className="mt-2 text-base font-medium text-stone-900">
                    {it.href ? (
                      <a href={it.href} className="transition-colors hover:text-slate-600">
                        {it.value}
                      </a>
                    ) : (
                      it.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                WhatsApp&apos;tan Yazın
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Instagram&apos;da Takip Edin
              </a>
              <a href={site.phoneGsmHref} className="btn-outline">
                Hemen Arayın: {site.phoneGsm}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <div className="overflow-hidden border border-stone-200">
                <iframe
                  title="Boloğlu konum haritası: İkitelli OSB Mutsan Sanayi Sitesi M1 Blok No:9 Başakşehir İstanbul"
                  src={site.mapsEmbed}
                  className="h-[420px] w-full lg:h-full lg:min-h-[480px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
            <p className="mt-4 text-xs text-stone-500">
              <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
                Google Haritalar&apos;da açın
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200 bg-stone-50 py-14 sm:py-16">
        <div className="container-x grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow">İletişim Formu</p>
            <h2 className="section-title mt-4">Bize yazın.</h2>
            <p className="mt-6 leading-relaxed text-stone-600">
              Ürünlerimiz veya hizmetlerimizle ilgili yardıma ihtiyacınız varsa,
              lütfen bizimle iletişime geçiniz.
            </p>
          </div>
          <div className="lg:col-span-3">
            <Reveal>
              <div className="border border-stone-200 bg-white p-6 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
