import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AXON ENERJİ | SCADA & Enerji Otomasyonu",
    template: "%s | AXON ENERJİ",
  },

  description:
    "AXON ENERJİ; SCADA sistemleri, enerji otomasyonu, RTU çözümleri, IEC 60870-5-101/104 haberleşme sistemleri ve endüstriyel yazılım alanlarında mühendislik hizmetleri sunar.",

  keywords: [
    "SCADA",
    "Enerji Otomasyonu",
    "RTU",
    "IEC 104",
    "IEC 101",
    "Endüstriyel Otomasyon",
    "SCADA Sistemleri",
    "Konya SCADA",
    "Enerji Yazılımı",
    "RTU Çözümleri",
    "IEC 60870-5-104",
    "IEC 60870-5-101",
    "AXON ENERJİ",
  ],

  authors: [
    {
      name: "AXON ENERJİ",
    },
  ],

  creator: "AXON ENERJİ",

  publisher: "AXON ENERJİ",

  metadataBase: new URL("https://axonenerji.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "AXON ENERJİ | SCADA & Enerji Otomasyonu",

    description:
      "SCADA sistemleri, RTU çözümleri, IEC104 haberleşme altyapıları ve enerji otomasyonu mühendislik hizmetleri.",

    url: "https://axonenerji.com",

    siteName: "AXON ENERJİ",

    locale: "tr_TR",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
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
      "SCADA sistemleri ve enerji otomasyonu çözümleri.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "BURAYA_GOOGLE_VERIFICATION_KODU",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
    >

      <body
        className="
          bg-[#111111]
          text-white
          antialiased
        "
      >

        {/* SEO SCHEMA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Organization",

              name: "AXON ENERJİ",

              url: "https://axonenerji.com",

              logo: "https://axonenerji.com/logo.png",

              description:
                "SCADA sistemleri, enerji otomasyonu, RTU çözümleri ve IEC 60870-5-101/104 haberleşme altyapıları.",

              telephone: "+90 530 151 89 22",

              email: "talha@axonenerji.com",

              address: {
                "@type": "PostalAddress",

                streetAddress:
                  "Fevziçakmak Mah. Aslım Cad. Atiker 1. Sanayi Sitesi No:40AA",

                addressLocality: "Karatay",

                addressRegion: "Konya",

                postalCode: "42050",

                addressCountry: "TR",
              },

              areaServed: "Türkiye",

              sameAs: [
                "https://linkedin.com",
                "https://instagram.com",
              ],
            }),
          }}
        />

        {children}

      </body>

    </html>
  );
}