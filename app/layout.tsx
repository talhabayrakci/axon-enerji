import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AXON ENERJİ | Enerji Otomasyonu & SCADA",

  description:
    "SCADA sistemleri, enerji otomasyonu, RTU çözümleri, IEC 60870-5-101/104 haberleşme sistemleri ve endüstriyel yazılım çözümleri.",

  keywords: [
    "SCADA",
    "Enerji Otomasyonu",
    "RTU",
    "IEC104",
    "IEC101",
    "Modbus",
    "Enerji İzleme",
    "Endüstriyel Yazılım",
    "AXON Enerji",
  ],

  authors: [{ name: "AXON Enerji" }],

  creator: "AXON Enerji",

  openGraph: {
    title: "AXON ENERJİ",
    description:
      "Enerji otomasyonu, SCADA sistemleri ve endüstriyel yazılım çözümleri.",
    url: "https://axonenerji.com",
    siteName: "AXON ENERJİ",
    locale: "tr_TR",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AXON ENERJİ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AXON ENERJİ",
    description:
      "Enerji otomasyonu, SCADA sistemleri ve yazılım çözümleri.",
    images: ["/og-image.png"],
  },

 

  metadataBase: new URL("https://axonenerji.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">

      <body className="bg-black text-white antialiased">

        {children}

      </body>

    </html>
  );
}