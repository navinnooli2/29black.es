import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://29black.es"),
  title: "29Black - Casino en línea y apuestas deportivas",
  description:
    "Juega a los juegos de casino y apuesta en deportes en 29Black. Hasta un 200 % de bono en tu primer depósito.",
  icons: {
    icon: [
      { url: "/favIcon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "29Black - Casino en línea y apuestas deportivas",
    description:
      "Juega a los juegos de casino y apuesta en deportes en 29Black. Hasta un 200 % de bono en tu primer depósito.",
    type: "website",
    url: "https://29black.es",
    locale: "es_ES",
    siteName: "29Black",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "29Black - Casino en línea y apuestas deportivas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "29Black - Casino en línea y apuestas deportivas",
    description:
      "Juega a los juegos de casino y apuesta en deportes en 29Black. Hasta un 200 % de bono en tu primer depósito.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "29Black",
      url: "https://29black.es",
      description:
        "Juega a los juegos de casino y apuesta en deportes en 29Black. Hasta un 200 % de bono en tu primer depósito.",
      image: "https://29black.es/og-image.jpg",
    },
    {
      "@type": "Organization",
      name: "29Black",
      url: "https://29black.es",
      logo: "https://29black.es/favIcon.svg",
      image: "https://29black.es/og-image.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
