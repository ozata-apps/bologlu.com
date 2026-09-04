import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const SITE_URL = "https://www.bologlu.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Boloğlu | Mutfak ve Banyo Tezgâhlarında İnce İşçilik",
    template: "%s | Boloğlu",
  },
  description:
    "Boloğlu; mutfak ve banyo tezgâhlarında kalite, estetik ve zarafeti birinci sınıf işçilikle birleştirir. Çimstone, Belenco, Granit, Coante ve daha fazlası.",
  openGraph: {
    type: "website",
    siteName: "Boloğlu",
    locale: "tr_TR",
    title: "Boloğlu | Mutfak ve Banyo Tezgâhlarında İnce İşçilik",
    description:
      "Boloğlu; mutfak ve banyo tezgâhlarında kalite, estetik ve zarafeti birinci sınıf işçilikle birleştirir. Çimstone, Belenco, Granit, Coante ve daha fazlası.",
    images: [{ url: "/images/hero.jpg", width: 2400, height: 1800, alt: "Boloğlu tezgâh uygulaması" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boloğlu | Mutfak ve Banyo Tezgâhlarında İnce İşçilik",
    description:
      "Boloğlu; mutfak ve banyo tezgâhlarında kalite, estetik ve zarafeti birinci sınıf işçilikle birleştirir.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
