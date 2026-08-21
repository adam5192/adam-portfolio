import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

// next downloads these at build time and serves them from your own domain
// so no request to google and no layout shift
const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

const SITE_URL = "https://adammokdad.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adam Mokdad — Full-stack developer",
  description:
    "Full-stack developer and game dev in Toronto. Next.js, TypeScript, PostgreSQL, Unity.",
  openGraph: {
    title: "Adam Mokdad — Full-stack developer",
    description:
      "Full-stack developer and game dev in Toronto. Next.js, TypeScript, PostgreSQL, Unity.",
    url: SITE_URL,
    siteName: "Adam Mokdad",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Mokdad — Full-stack developer",
    description: "Full-stack developer and game dev in Toronto.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      // themescript changes data-theme before react hydrates so the server
      // and client html wont match without this
      suppressHydrationWarning
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
