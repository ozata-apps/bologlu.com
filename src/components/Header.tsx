"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/assetPath";

const nav = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/uygulamalar", label: "Uygulamalar" },
  { href: "/iletisim", label: "İletişim" },
];

const productMenu = [
  {
    group: "Porselen / Sinterlenmiş Taş",
    items: [
      { href: "/urunler/lamar", label: "Lamar" },
      { href: "/urunler/geoslab", label: "GeoSlab" },
      { href: "/urunler/neolith", label: "Neolith" },
    ],
  },
  {
    group: "Kuvars",
    items: [
      { href: "/urunler/belenco", label: "Belenco" },
      { href: "/urunler/cimstone", label: "Çimstone" },
      { href: "/urunler/coante", label: "Coante" },
    ],
  },
  {
    group: "Doğal Taş",
    items: [{ href: "/urunler/granit", label: "Granit" }],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-stone-200 bg-white/95 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" aria-label="Boloğlu anasayfa" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath("/images/logo.png")}
            alt="Boloğlu logosu"
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {nav.map((item) =>
            item.href === "/urunler" ? (
              <div key={item.href} className="group relative">
                <Link
                  href="/urunler"
                  className={`flex items-center gap-1 py-6 text-sm font-medium tracking-wide transition-colors ${
                    pathname === "/urunler" ? "text-slate-600" : "text-stone-700 hover:text-slate-600"
                  }`}
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </Link>
                <div className="invisible absolute left-1/2 top-full w-max min-w-64 -translate-x-1/2 translate-y-2 border border-stone-200 bg-white p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex gap-10">
                    {productMenu.map((g) => (
                      <div key={g.group}>
                        <p className="eyebrow mb-3 text-stone-400">{g.group}</p>
                        <ul className="space-y-2.5">
                          {g.items.map((i) => (
                            <li key={i.href}>
                              <Link href={i.href} className="text-sm text-stone-700 transition-colors hover:text-slate-600">
                                {i.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === item.href ? "text-slate-600" : "text-stone-700 hover:text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+905316055762"
            className="hidden items-center gap-2 text-sm font-semibold text-stone-800 transition-colors hover:text-slate-600 md:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            0531 605 57 62
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center text-stone-800 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobil menü"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-stone-200 bg-white px-5 pb-8 pt-2 lg:hidden"
        >
          <ul className="divide-y divide-stone-100">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-4 text-base font-medium ${
                    pathname === item.href ? "text-slate-600" : "text-stone-800"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 space-y-5 py-4">
            {productMenu.map((g) => (
              <div key={g.group}>
                <p className="eyebrow mb-2 text-stone-400">{g.group}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {g.items.map((i) => (
                    <li key={i.href}>
                      <Link href={i.href} className="text-sm text-stone-600 hover:text-slate-600">
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a href="tel:+905316055762" className="btn-primary mt-4 w-full">
            Hemen Arayın
          </a>
        </nav>
      )}
    </header>
  );
}
