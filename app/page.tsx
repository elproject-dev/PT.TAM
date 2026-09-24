"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Prakata from "../components/prakata";
import VisiMisi from "../components/visi-misi";
import Struktur from "../components/struktur";
import NilaiNilai from "../components/nilai-nilai";
import Pelayanan from "../components/pelayanan";
import Workflow from "../components/workflow";
import Legalitas from "../components/legalitas";
import Portfolio from "../components/portfolio";
import Kontak from "../components/kontak";

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "prakata",
        "visi-misi",
        "layanan",
        "portfolio",
        "workflow",
        "struktur",
        "nilai",
        "legalitas",
        "tentang",
        "kontak",
      ];

      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans selection:bg-accent-orange selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar lang={lang} setLang={setLang} activeSection={activeSection} />

      {/* Hero Welcome Section */}
      <Hero lang={lang} />

      {/* Section 1: Prakata Direktur */}
      <Prakata lang={lang} />

      {/* Section 2: Visi & Misi */}
      <VisiMisi lang={lang} />

      {/* Section 3: Pelayanan Kami (Fokus Solusi Bisnis) */}
      <Pelayanan lang={lang} />

      {/* Section 9: Portfolio Proyek */}
      <Portfolio lang={lang} />

      {/* Section 4: Alur Kerja Bisnis (Workflow) */}
      <Workflow lang={lang} />

      {/* Section 5: Struktur Organisasi */}
      <Struktur lang={lang} />

      {/* Section 6: Nilai-Nilai Perusahaan */}
      <NilaiNilai lang={lang} />

      {/* Section 8: Legalitas Perusahaan */}
      <Legalitas lang={lang} />

      {/* Section 11: Kontak & Corporate Footer */}
      <Kontak lang={lang} />
    </div>
  );
}
