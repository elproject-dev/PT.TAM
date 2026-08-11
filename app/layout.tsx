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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col text-foreground bg-with-image">
        <PwaInstallPrompt lang="id" />
        <Image
          src="/interior_bg_v2.png"
          alt="Latar Belakang"
          fill
          sizes="100vw"
          quality={50}
          priority
          className="object-cover fixed inset-0 -z-50 pointer-events-none opacity-[0.06]"
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
