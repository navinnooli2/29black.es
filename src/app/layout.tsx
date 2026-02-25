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
  title: "29Black - Casino en línea y apuestas deportivas",
  description:
    "Juega a los juegos de casino y apuesta en deportes en 29Black. Hasta un 200 % de bono en tu primer depósito.",
  icons: {
    icon: "/favIcon.svg",
  },
  openGraph: {
    title: "29Black - Casino en línea y apuestas deportivas",
    description:
      "Juega a los juegos de casino y apuesta en deportes en 29Black. Hasta un 200 % de bono en tu primer depósito.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
