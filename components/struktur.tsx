"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface StrukturProps {
  lang: "id" | "en";
}

export default function Struktur({ lang }: StrukturProps) {
  const content = {
    id: {
      sectionTitle: "Struktur Organisasi",
      heading: "Tim Profesional Kami",
      subtitle: "Didukung oleh profesional berpengalaman yang solid, loyal, dan berdedikasi tinggi di setiap lini.",
      levels: {
        exec: "Direksi & Komisaris",
        management: "Manajemen & Administrasi",
        field: "Tim Teknis & Pelaksana",
      },
    },
    en: {
      sectionTitle: "Organization Structure",
      heading: "Our Professional Team",
      subtitle: "Supported by a solid, loyal, and highly dedicated team of experienced professionals in every line.",
      levels: {
        exec: "Directors & Commissioner",
        management: "Management & Administration",
        field: "Technical & Field Team",
      },
    },
  };

  const t = content[lang];

  const execs = [
    {
      name: "Zainal Muzaidin",
      role: lang === "id" ? "Komisaris" : "Commissioner",
      image: "/profile1.jpg",
      color: "from-yellow-400 to-amber-500",
    },
    {
      name: "Mahendra Harimawan",
      role: lang === "id" ? "Direktur Utama" : "President Director",
      image: "/profile2.jpg",
      color: "from-amber-400 to-yellow-500",
    },
  ];

  const managers = [
    {
      name: "Bayu Rahmawan",
      role: lang === "id" ? "Project Manager" : "Project Manager",
      image: "/profile3.jpg",
    },
    {
      name: "Rizal A Shaleh",
      role: lang === "id" ? "Marketing Manager" : "Marketing Manager",
      image: "/profile4.jpg",
    },
    {
      name: "Andre Bintang",
      role: lang === "id" ? "Admin" : "Admin",
      image: "/profile5.jpg",
    },
    {
      name: "Aktriani",
      role: lang === "id" ? "Keuangan" : "Finance",
      image: "/profile6.jpg",
    },
  ];

  const field = [
    {
      name: "Andro Ramadhan",
      role: lang === "id" ? "Pelaksana / Designer / Arsitek / Mandor" : "Field Supervisor / Designer / Architect / Foreman",
      image: "/profile7.jpg",
    },
  ];

  return (
    <section id="struktur" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
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

        {/* Tree Container */}
        <div className="flex flex-col items-center gap-0">
          
          {/* Level 1: Execs */}
          <div className="flex flex-col items-center w-full pb-12">
            <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-6 bg-zinc-900 border border-white/5 px-3 py-1 rounded-full">
              {t.levels.exec}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full justify-center">
              {execs.map((exec, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group rounded-xl p-0.5"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${exec.color} rounded-xl blur opacity-25 group-hover:opacity-40 transition`} />
                    <div className="relative rounded-xl p-6 flex flex-col items-center text-center bg-gradient-to-br from-yellow-400 to-yellow-500 border border-yellow-300/30">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-yellow-600/40 flex-shrink-0">
                        <Image
                          src={exec.image}
                          alt={exec.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          priority={idx === 0}
                        />
                      </div>
                      <h4 className="text-lg font-bold text-yellow-900 font-heading">{exec.name}</h4>
                      <p className="text-sm text-yellow-800 mt-1">{exec.role}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Connector 1: Execs to Managers with branch */}
          <div className="hidden lg:block w-full relative" style={{ height: '80px' }}>
            <svg 
              className="w-full h-full" 
              style={{ overflow: 'visible' }}
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="arrow1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#FACC15" />
                </marker>
              </defs>
              
              {/* Vertical line down from execs center */}
              <line x1="50%" y1="0" x2="50%" y2="40" stroke="#FACC15" strokeWidth="3" />
              
              {/* Horizontal line across */}
              <line x1="12.5%" y1="40" x2="87.5%" y2="40" stroke="#FACC15" strokeWidth="3" />
              
              {/* Drops down to managers with arrows */}
              <line x1="12.5%" y1="40" x2="12.5%" y2="78" stroke="#FACC15" strokeWidth="3" markerEnd="url(#arrow1)" />
              <line x1="37.5%" y1="40" x2="37.5%" y2="78" stroke="#FACC15" strokeWidth="3" markerEnd="url(#arrow1)" />
              <line x1="62.5%" y1="40" x2="62.5%" y2="78" stroke="#FACC15" strokeWidth="3" markerEnd="url(#arrow1)" />
              <line x1="87.5%" y1="40" x2="87.5%" y2="78" stroke="#FACC15" strokeWidth="3" markerEnd="url(#arrow1)" />
            </svg>
          </div>

          {/* Level 2: Managers */}
          <div className="flex flex-col items-center w-full pb-12">
            <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-6 bg-zinc-900 border border-white/5 px-3 py-1 rounded-full">
              {t.levels.management}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {managers.map((mgr, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-xl p-5 flex flex-col items-center text-center group bg-gradient-to-br from-yellow-400 to-yellow-500 border border-yellow-300/30"
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden mb-4 border-3 border-yellow-600/40 flex-shrink-0">
                      <Image
                        src={mgr.image}
                        alt={mgr.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-base font-bold text-yellow-900 font-heading">{mgr.name}</h4>
                    <p className="text-xs text-yellow-800 mt-1">{mgr.role}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Connector 2: Managers to Field with center branch */}
          <div className="hidden lg:block w-full relative" style={{ height: '80px' }}>
            <svg 
              className="w-full h-full" 
              style={{ overflow: 'visible' }}
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="arrow2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#FACC15" />
                </marker>
              </defs>
              
              {/* Lines from all 4 managers up to center */}
              <line x1="12.5%" y1="0" x2="12.5%" y2="40" stroke="#FACC15" strokeWidth="3" />
              <line x1="37.5%" y1="0" x2="37.5%" y2="40" stroke="#FACC15" strokeWidth="3" />
              <line x1="62.5%" y1="0" x2="62.5%" y2="40" stroke="#FACC15" strokeWidth="3" />
              <line x1="87.5%" y1="0" x2="87.5%" y2="40" stroke="#FACC15" strokeWidth="3" />
              
              {/* Horizontal line connecting all managers */}
              <line x1="12.5%" y1="40" x2="87.5%" y2="40" stroke="#FACC15" strokeWidth="3" />
              
              {/* Center vertical line down to Field with Arrow */}
              <line x1="50%" y1="40" x2="50%" y2="78" stroke="#FACC15" strokeWidth="3" markerEnd="url(#arrow2)" />
            </svg>
          </div>

          {/* Level 3: Field Operations */}
          <div className="flex flex-col items-center w-full pt-4">
            <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-6 bg-zinc-900 border border-white/5 px-3 py-1 rounded-full">
              {t.levels.field}
            </span>
            <div className="grid grid-cols-1 gap-6 max-w-sm w-full">
              {field.map((f, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative group rounded-xl p-0.5"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition" />
                    <div className="relative rounded-xl p-6 flex flex-col items-center text-center bg-gradient-to-br from-yellow-400 to-yellow-500 border border-yellow-300/30">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-3 border-yellow-600/40 flex-shrink-0">
                        <Image
                          src={f.image}
                          alt={f.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-base font-bold text-yellow-900 font-heading">{f.name}</h4>
                      <p className="text-xs text-yellow-800 mt-1 max-w-[240px] leading-relaxed">{f.role}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
