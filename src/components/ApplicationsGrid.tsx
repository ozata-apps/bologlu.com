"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import { applications } from "@/data/applications";
import Lightbox from "@/components/Lightbox";

type Cat = "tumu" | "mutfak" | "banyo";
const cats: { id: Cat; label: string }[] = [
  { id: "tumu", label: "Tümü" },
  { id: "mutfak", label: "Mutfak" },
  { id: "banyo", label: "Banyo" },
];

export default function ApplicationsGrid() {
  const [cat, setCat] = useState<Cat>("tumu");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () => (cat === "tumu" ? applications : applications.filter((a) => a.cat === cat)),
    [cat]
  );

  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Uygulama filtreleri">
        {cats.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={cat === c.id}
            onClick={() => {
              setCat(c.id);
              setActive(null);
            }}
            className={`min-h-11 border px-5 py-2.5 text-sm font-medium transition-colors ${
              cat === c.id
                ? "border-stone-900 bg-stone-900 text-white"
                : "border-stone-300 text-stone-700 hover:border-stone-900"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-3 sm:columns-2 sm:gap-4 lg:columns-3">
        {filtered.map((a, i) => (
          <button
            key={a.src}
            onClick={() => setActive(i)}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden bg-stone-200 text-left sm:mb-4"
            aria-label={`${a.title} — büyütmek için tıklayın`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={a.src}
              alt={`Boloğlu uygulaması: ${a.title}`}
              loading={i < 6 ? "eager" : "lazy"}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 to-transparent p-4 pt-10 text-xs font-medium text-white sm:text-sm">
              {a.title}
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        items={filtered}
        active={active}
        onClose={close}
        onNavigate={setActive}
      />
    </>
  );
}
