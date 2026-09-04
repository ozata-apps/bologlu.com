import Link from "next/link";
import { site } from "@/data/site";

const corporate = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/uygulamalar", label: "Uygulamalar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="Boloğlu logosu" className="h-10 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-stone-400">
            Mutfak ve banyo tezgâhlarında kalite, estetik ve zarafet; birinci sınıf
            işçilikle buluşuyor.
          </p>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-stone-500">Kurumsal</h2>
          <ul className="space-y-3 text-sm">
            {corporate.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-stone-500">İletişim</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={site.phoneFixedHref} className="transition-colors hover:text-white">
                {site.phoneFixed}
              </a>
            </li>
            <li>
              <a href={site.phoneGsmHref} className="transition-colors hover:text-white">
                {site.phoneGsm}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-5 text-stone-500">Adres</h2>
          <p className="text-sm leading-relaxed text-stone-400">
            İkitelli OSB Mutsan Sanayi Sitesi
            <br />
            M1 Blok No:9
            <br />
            Başakşehir / İstanbul
          </p>
          <div className="mt-5 flex gap-4">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Boloğlu Instagram sayfası"
              className="flex h-10 w-10 items-center justify-center border border-stone-700 transition-colors hover:border-stone-400 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp üzerinden Boloğlu'na yazın"
              className="flex h-10 w-10 items-center justify-center border border-stone-700 transition-colors hover:border-stone-400 hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.4 0 .6l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.7-.1l1-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.4.1.1.1.7-.2 1.4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Boloğlu. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-2">
            Demo Tasarım
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/ozata.png"
              alt="OZATA"
              className="h-6 w-auto"
            />
          </p>
          <p>İkitelli OSB, Başakşehir / İstanbul</p>
        </div>
      </div>
    </footer>
  );
}
