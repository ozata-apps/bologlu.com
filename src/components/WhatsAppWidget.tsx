"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const WA_MESSAGE = "Merhaba, web siteniz ve tezgâh ürünleriniz hakkında bilgi almak istiyorum.";
const WA_LINK = `${site.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="WhatsApp hızlı iletişim"
          className="flex w-[min(340px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.22)] animate-[wa-in_0.22s_ease-out]"
        >
          {/* Üst bölüm */}
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.4 0 .6l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.7-.1l1-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.4.1.1.1.7-.2 1.4Z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-white">WhatsApp</p>
                <p className="text-[11px] text-white/75">Boloğlu — online</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="WhatsApp penceresini kapat"
              className="flex h-11 w-11 items-center justify-center text-white/85 transition-colors hover:text-white"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mesaj balonu */}
          <div className="bg-stone-100 px-4 py-5">
            <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-white px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <p className="text-sm leading-relaxed text-stone-700">
                Merhaba, size yardımcı olabilir miyiz?
              </p>
            </div>
          </div>

          {/* Alt bölüm */}
          <div className="border-t border-stone-200 bg-white p-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb959]"
            >
              WhatsApp&apos;tan Yazın
            </a>
          </div>
        </div>
      )}

      {/* Floating buton (mevcut tasarım korunur) */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "WhatsApp penceresini kapat" : "WhatsApp sohbetini aç"}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105"
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.4 0 .6l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.7-.1l1-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.4.1.1.1.7-.2 1.4Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
