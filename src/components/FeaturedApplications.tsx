"use client";

import { useState, useCallback, useMemo } from "react";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import type { AppItem } from "@/data/applications";

export default function FeaturedApplications({ items }: { items: AppItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  const lightboxItems = useMemo(() => items.map((a) => ({ src: a.src, title: a.title })), [items]);

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4 lg:columns-3">
        {items.map((a, i) => (
          <Reveal key={a.src} delay={i * 70} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden bg-stone-200 text-left"
              aria-label={`${a.title} — büyütmek için tıklayın`}
            >
              <figure className="group relative overflow-hidden bg-stone-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.src}
                  alt={`Boloğlu uygulaması: ${a.title}`}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 to-transparent p-4 pt-10 text-sm font-medium text-white">
                  {a.title}
                </figcaption>
              </figure>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        items={lightboxItems}
        active={active}
        onClose={close}
        onNavigate={setActive}
      />
    </>
  );
}
