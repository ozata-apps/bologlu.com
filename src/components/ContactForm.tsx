"use client";

import { site } from "@/data/site";
import { useState } from "react";

export default function ContactForm() {
  const [ad, setAd] = useState("");
  const [eposta, setEposta] = useState("");
  const [telefon, setTelefon] = useState("");
  const [konu, setKonu] = useState("");
  const [mesaj, setMesaj] = useState("");
  const [hata, setHata] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ad.trim() || !eposta.trim() || !telefon.trim() || !mesaj.trim()) {
      setHata("Lütfen ad soyad, e-posta, telefon ve mesaj alanlarını doldurunuz.");
      return;
    }
    setHata("");
    const satirlar = [
      `Ad Soyad: ${ad}`,
      `E-posta: ${eposta}`,
      `Telefon: ${telefon}`,
      konu ? `Konu: ${konu}` : "",
      `Mesaj: ${mesaj}`,
    ].filter(Boolean);
    const metin = encodeURIComponent(satirlar.join("\n"));
    window.open(`${site.whatsapp}?text=${metin}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-5">
      <div>
        <label htmlFor="ad" className="eyebrow mb-2 block text-stone-400">
          Ad Soyad <span className="text-slate-500">*</span>
        </label>
        <input
          id="ad"
          name="ad"
          type="text"
          required
          autoComplete="name"
          value={ad}
          onChange={(e) => setAd(e.target.value)}
          className="min-h-12 w-full border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900"
          placeholder="Adınız ve soyadınız"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="eposta" className="eyebrow mb-2 block text-stone-400">
            E-posta <span className="text-slate-500">*</span>
          </label>
          <input
            id="eposta"
            name="eposta"
            type="email"
            required
            autoComplete="email"
            value={eposta}
            onChange={(e) => setEposta(e.target.value)}
            className="min-h-12 w-full border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900"
            placeholder="ornek@ornek.com"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="eyebrow mb-2 block text-stone-400">
            Telefon <span className="text-slate-500">*</span>
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            required
            autoComplete="tel"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
            className="min-h-12 w-full border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900"
            placeholder="05xx xxx xx xx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="konu" className="eyebrow mb-2 block text-stone-400">
          Konu
        </label>
        <input
          id="konu"
          name="konu"
          type="text"
          value={konu}
          onChange={(e) => setKonu(e.target.value)}
          className="min-h-12 w-full border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900"
          placeholder="Örn. Mutfak tezgâhı talebi"
        />
      </div>

      <div>
        <label htmlFor="mesaj" className="eyebrow mb-2 block text-stone-400">
          Mesajınız <span className="text-slate-500">*</span>
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          required
          rows={5}
          value={mesaj}
          onChange={(e) => setMesaj(e.target.value)}
          className="w-full border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-stone-900"
          placeholder="Projenizden kısaca bahsedin"
        />
      </div>

      {hata && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {hata}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary">
          WhatsApp ile Gönder
        </button>
        <p className="text-xs leading-relaxed text-stone-500">
          Form, mesajınızı işletmenin WhatsApp hattına iletmek için hazırlar ve
          WhatsApp&apos;a yönlendirir. Mesajı tamamlamak için WhatsApp&apos;ta
          gönder tuşuna basmanız gerekir.
        </p>
      </div>
    </form>
  );
}
