import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://axonenerji.com"),

  title: {
    default: "AXON ENERJİ",
    template: "%s | AXON ENERJİ",
  },

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
    "SICAM A8000",
    "IEC 60870-5-104",
    "Enerji Teknolojileri",
  ],

  authors: [
    {
      name: "AXON Enerji",
      url: "https://axonenerji.com",
    },
  ],

  creator: "AXON Enerji",
  publisher: "AXON Enerji",

  applicationName: "AXON ENERJİ",

  category: "technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://axonenerji.com",

    siteName: "AXON ENERJİ",

    title: "AXON ENERJİ",
    description:
      "Enerji otomasyonu, SCADA sistemleri ve endüstriyel yazılım çözümleri.",

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

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  alternates: {
    canonical: "https://axonenerji.com",
  },

  verification: {
    google: "google-site-verification-kodu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
    >
      <body className="bg-[#0a0a0a] text-white antialiased">

        {children}

      </body>
    </html>
  );
}