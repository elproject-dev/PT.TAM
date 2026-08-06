"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Hammer, Paintbrush, Briefcase, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioProps {
  lang: "id" | "en";
}

type CategoryType = "all" | "contractor" | "interior" | "trading";

export default function Portfolio({ lang }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const content = {
    id: {
      sectionTitle: "Hasil Karya Kami",
      heading: "Portfolio Proyek",
      subtitle: "Galeri beberapa proyek konstruksi, perdagangan, dan desain interior yang telah kami selesaikan.",
      filters: {
        all: "Semua Proyek",
        contractor: "Kontraktor Umum",
        interior: "Desain Interior",
        trading: "Perdagangan Umum",
      },
    },
    en: {
      sectionTitle: "Our Work",
      heading: "Project Portfolio",
      subtitle: "Gallery of selected construction, trading, and interior design projects we have successfully completed.",
      filters: {
        all: "All Projects",
        contractor: "General Contractor",
        interior: "Interior Design",
        trading: "General Trading",
      },
    },
  };

  const t = content[lang];

  const projects = [
    {
      id: 1,
      title: lang === "id" ? "Konstruksi Ruko Modern" : "Modern Shop House Construction",
      location: "Condongcatur, Yogyakarta",
      category: "contractor",
      icon: Hammer,
      bgImage: "/contractor_bg.png",
      desc: lang === "id" ? "Pembangunan gedung komersial ruko 3 lantai dengan struktur beton bertulang." : "3-story commercial shop-house construction with reinforced concrete structure.",
    },
    {
      id: 2,
      title: lang === "id" ? "Interior Cafe & Roastery" : "Cafe & Roastery Interior",
      location: "Depok, Sleman",
      category: "interior",
      icon: Paintbrush,
      bgImage: "/interior_bg.png",
      desc: lang === "id" ? "Desain dan fit-out interior bertema industrial-modern lengkap dengan furniture custom." : "Industrial-modern cafe design and fit-out complete with custom fabricated furniture.",
    },
    {
      id: 3,
      title: lang === "id" ? "Suplai Material Struktur" : "Structural Material Procurement",
      location: "Kulon Progo, DIY",
      category: "trading",
      icon: Briefcase,
      bgImage: "/trading_bg.png",
      desc: lang === "id" ? "Pengadaan besi baja beton dan material konstruksi utama untuk proyek jalan raya." : "Steel rebar and primary construction material supply for a major highway project.",
    },
    {
      id: 4,
      title: lang === "id" ? "Kitchen Set & Wardrobe Residensial" : "Residential Custom Kitchen & Wardrobe",
      location: "Jakal, Yogyakarta",
      category: "interior",
      icon: Paintbrush,
      bgImage: "/interior_bg.png",
      desc: lang === "id" ? "Pembuatan furniture fitting kelas premium dengan bahan blockboard finishing HPL." : "Premium custom furniture fabrication using blockboard core with HPL finish.",
    },
    {
      id: 5,
      title: lang === "id" ? "Pembangunan Rumah Tinggal Luxury" : "Luxury Residential Development",
      location: "Sleman, Yogyakarta",
      category: "contractor",
      icon: Hammer,
      bgImage: "/contractor_bg.png",
      desc: lang === "id" ? "Konstruksi rumah tinggal mewah 2 lantai bergaya minimalis kontemporer." : "2-story luxury residential home construction with minimalist contemporary style.",
    },
    {
      id: 6,
      title: lang === "id" ? "Pengadaan Alat Teknik Proyek" : "Technical Tooling Procurement",
      location: "Bantul, Yogyakarta",
      category: "trading",
      icon: Briefcase,
      bgImage: "/trading_bg.png",
      desc: lang === "id" ? "Pengadaan alat ukur tanah, peralatan K3, dan instrumen proyek untuk kontraktor lokal." : "Land surveying tools, safety gear, and project instruments supply for a local contractor.",
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-zinc-950 bg-grid-lines">
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-orange uppercase tracking-widest">
            {t.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mt-2">
            {t.heading}
          </h2>
          <p className="text-zinc-200 mt-3 font-medium text-sm sm:text-base">
            {t.subtitle}
          </p>
          <div className="w-16 h-1 bg-accent-orange mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(["all", "contractor", "interior", "trading"] as CategoryType[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "bg-accent-orange border-accent-orange text-white shadow-md"
                  : "glass border-transparent text-zinc-400 hover:bg-[#1e120c] hover:border-white/10 hover:text-white"
              }`}
            >
              {t.filters[cat]}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const IconComp = project.icon;
              // Map kategori ke gambar
              const bgImageMap: Record<string, string> = {
                contractor: "/contractor_bg.png",
                interior: "/interior_bg.png",
                trading: "/trading_bg.png",
              };
              const bgImage = bgImageMap[project.category] || "/contractor_bg.png";
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-[360px] cursor-pointer"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={bgImage}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 pointer-events-none" />
                  </div>

                  {/* Top content */}
                  <div className="relative z-10 p-6 flex justify-between items-start w-full">
                    <span className="text-[10px] font-bold text-zinc-200 uppercase tracking-wider bg-zinc-900/80 border border-white/10 px-2.5 py-1 rounded-md drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-10 p-6 w-full">
                    <div className="text-[10px] text-zinc-300 mb-1">
                      {project.location}
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-accent-orange transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {project.title}
                    </h3>
                    <p className="text-white font-semibold text-xs leading-relaxed mt-2 line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
