"use client";

import { useState, useCallback, useMemo } from "react";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import type { ColorItem } from "@/data/colors";

export default function BrandColorGallery({
  brandName,
  colors,
}: {
  brandName: string;
  colors: ColorItem[];
}) {
  const [active, setActive] = useState<number | null>(null);
  const close = useCallback(() => setActive(null), []);

  const lightboxItems = useMemo(
    () => colors.map((c) => ({ src: c.src, title: `${brandName} — ${c.name}` })),
    [colors, brandName]
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {colors.map((c, i) => (
          <Reveal key={c.src} delay={Math.min(i, 8) * 40}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden bg-stone-200 text-left"
              aria-label={`${brandName} ${c.name} — büyütmek için tıklayın`}
            >
              <figure className="overflow-hidden bg-stone-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={`${brandName} ${c.name} renk ve doku görünümü`}
                  loading={i < 8 ? "eager" : "lazy"}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="bg-white p-3 text-xs font-medium text-stone-600">
                  {c.name}
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
