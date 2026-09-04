"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

export type LightboxItem = {
  src: string;
  title: string;
};

export default function Lightbox({
  items,
  active,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  active: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const total = items.length;

  const prev = useCallback(() => {
    if (active === null) return;
    onNavigate((active - 1 + total) % total);
  }, [active, total, onNavigate]);

  const next = useCallback(() => {
    if (active === null) return;
    onNavigate((active + 1) % total);
  }, [active, total, onNavigate]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, onClose, prev, next]);

  if (active === null) return null;
  const item = items[active];
  if (!item) return null;

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Uygulama görseli"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-stone-950/90 p-4 sm:p-10"
      onClick={onClose}
    >
      <div
        className="flex max-h-full w-full max-w-4xl flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt={item.title}
          className="max-h-[78vh] w-auto max-w-full bg-stone-900 object-contain"
        />
        <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-4 text-white">
          <p className="text-sm font-medium">{item.title}</p>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Önceki görsel"
              className="flex h-11 w-11 items-center justify-center border border-white/30 hover:border-white"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              onClick={next}
              aria-label="Sonraki görsel"
              className="flex h-11 w-11 items-center justify-center border border-white/30 hover:border-white"
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              onClick={onClose}
              aria-label="Kapat"
              className="flex h-11 items-center border border-white/30 px-4 text-sm hover:border-white"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return overlay;
  return createPortal(overlay, document.body);
}
