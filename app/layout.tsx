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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
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
