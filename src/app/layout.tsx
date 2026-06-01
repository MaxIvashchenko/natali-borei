import "./globals.css";

import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { StoreProvider } from "@/context/StoreContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoldDust from "@/components/shared/GoldDust";
import SideRail from "@/components/shared/SideRail";
import RevealObserver from "@/components/shared/RevealObserver";
import TiltObserver from "@/components/shared/TiltObserver";
import CartAnimations from "@/components/shared/CartAnimations";
import CustomCursor from "@/components/shared/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nataliborei.com"),
  title: "Natali Borei — Exclusive Accessoires",
  description:
    "Beaded jewelry & accessories crafted with soul. Exclusive handmade collection by Natali Borei.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Natali Borei",
    title: "Natali Borei — Exclusive Accessoires",
    description:
      "Beaded jewelry & accessories crafted with soul. Exclusive handmade collection by Natali Borei.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <StoreProvider>
          <Header />
          <GoldDust />
          <SideRail />
          {children}
          <Footer />
          <RevealObserver />
          <TiltObserver />
          <CartAnimations />
          <CustomCursor />
        </StoreProvider>
      </body>
    </html>
  );
}
