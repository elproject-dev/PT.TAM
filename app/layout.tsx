import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import PwaInstallPrompt from "@/components/PwaInstallPrompt";
import { Analytics } from '@vercel/analytics/next';

import { Viewport } from "next";

export const metadata: Metadata = {
  title: "PT. Tembus Abadi Makmur - General Contractor, General Trading & Interior",
  description: "PT. Tembus Abadi Makmur (TAM) is a general contractor, general trading, and interior contractor company based in Yogyakarta, Indonesia.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PT. TAM",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

import { WhatsAppButton } from "@/components/WhatsAppButton";

import { Plus_Jakarta_Sans, Space_Grotesk, Poppins } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${plusJakartaSans.variable} ${spaceGrotesk.variable} ${poppins.variable}`}
    >
      <body className="min-h-full flex flex-col text-foreground bg-background">
        <PwaInstallPrompt lang="id" />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
