"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileSymlink,
  Paintbrush,
  MessagesSquare,
  Users,
  Database,
  Coffee,
  Layers,
  Presentation,
  CheckCircle,
  FolderSync,
  Send,
  Hammer,
  Eye,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkflowProps {
  lang: "id" | "en";
}

type TabType = "design" | "production";

export default function Workflow({ lang }: WorkflowProps) {
  const [activeTab, setActiveTab] = useState<TabType>("design");

  const content = {
    id: {
      sectionTitle: "Alur Kerja Bisnis",
      heading: "Workflow Operasional Kami",
      subtitle: "Bagaimana kami memastikan kualitas hasil kerja dari proses perancangan hingga penyelesaian produksi.",
      designTab: "Fase Proses Desain",
      productionTab: "Fase Proses Produksi",
    },
    en: {
      sectionTitle: "Business Workflow",
      heading: "Our Operational Workflow",
      subtitle: "How we ensure work output quality from the initial design phase to production completion.",
      designTab: "Design Process Phase",
      productionTab: "Production Process Phase",
    },
  };

  const t = content[lang];

  const designSteps = [
    {
      id: "D1",
      num: "01",
      icon: MessagesSquare,
      title: lang === "id" ? "Pertemuan Tim Divisi" : "Division Team Meet",
      desc: lang === "id" ? "Tim divisi kami berkoordinasi dan mengadakan pertemuan langsung dengan klien." : "Our division team coordinates and holds a direct meeting with the client.",
    },
    {
      id: "D2",
      num: "02",
      icon: Database,
      title: lang === "id" ? "Pengumpulan Data" : "Collect Data",
      desc: lang === "id" ? "Mengumpulkan semua data teknis, spesifikasi, dan kebutuhan spesifik klien." : "Collecting all technical data, specifications, and specific client requirements.",
    },
    {
      id: "D3",
      num: "03",
      icon: Coffee,
      title: lang === "id" ? "Rapat Internal" : "Internal Meeting",
      desc: lang === "id" ? "Diskusi tim internal untuk merumuskan konsep, pembagian tugas, dan strategi desain." : "Internal team discussion to formulate concepts, task allocation, and design strategy.",
    },
    {
      id: "D4",
      num: "04",
      icon: Layers,
      title: lang === "id" ? "Proses Desain" : "Design Process",
      desc: lang === "id" ? "Proses perancangan arsitektur, denah, 3D render, atau gambar kerja teknis secara detail." : "The architectural modeling, layout drawing, 3D rendering, or detailed shop drawing.",
    },
    {
      id: "D5",
      num: "05",
      icon: Presentation,
      title: lang === "id" ? "Presentasi Desain" : "Presentation",
      desc: lang === "id" ? "Mempresentasikan hasil desain kepada klien untuk mendapatkan feedback awal." : "Presenting the design to the client to receive initial feedback.",
    },
    {
      id: "D6",
      num: "06",
      icon: CheckCircle,
      title: lang === "id" ? "Persetujuan Klien" : "Approved",
      desc: lang === "id" ? "Desain akhir disetujui secara resmi oleh klien untuk dilanjutkan ke tahap produksi." : "Final design is officially approved by the client to proceed to the production phase.",
    },
  ];

  const productionSteps = [
    {
      id: "P1",
      num: "01",
      icon: FolderSync,
      title: lang === "id" ? "Koordinasi Desain" : "Design Coordination",
      desc: lang === "id" ? "Tim produksi melakukan review dan koordinasi detail dari gambar desain yang disetujui." : "Production team reviews and coordinates details of the approved design drawings.",
    },
    {
      id: "P2",
      num: "02",
      icon: FileSymlink,
      title: lang === "id" ? "Penyerahan Desain" : "Submit Design",
      desc: lang === "id" ? "Menyerahkan gambar teknis secara resmi kepada tim pelaksana lapangan/produksi." : "Officially submitting shop drawings to the field execution/production team.",
    },
    {
      id: "P3",
      num: "03",
      icon: Hammer,
      title: lang === "id" ? "Proses Produksi" : "Production Process",
      desc: lang === "id" ? "Pengerjaan fisik konstruksi atau pembuatan elemen interior di workshop/lapangan." : "Physical construction work or interior fabrication in the workshop/field.",
    },
    {
      id: "P4",
      num: "04",
      icon: Eye,
      title: lang === "id" ? "Kontrol Kualitas 1" : "Quality Control 1",
      desc: lang === "id" ? "Inspeksi tahap pertama selama produksi untuk memastikan kesesuaian gambar teknis." : "First-stage inspection during production to ensure compliance with drawings.",
    },
    {
      id: "P5",
      num: "05",
      icon: Paintbrush,
      title: lang === "id" ? "Finishing Produk" : "Product Finishing",
      desc: lang === "id" ? "Tahap penyelesaian akhir (pengecatan, perakitan akhir, pembersihan, perapihan)." : "Final detailing and finishing (painting, final assembly, cleanup, polishing).",
    },
    {
      id: "P6",
      num: "06",
      icon: ShieldCheck,
      title: lang === "id" ? "Kontrol Kualitas 2" : "Quality Control 2",
      desc: lang === "id" ? "Pengecekan akhir produk setelah finishing sebelum serah terima kepada klien." : "Final product inspection post-finishing before handover to client.",
    },
  ];

  const steps = activeTab === "design" ? designSteps : productionSteps;

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-zinc-950 bg-grid-lines">
      {/* Background mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />

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

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex glass p-1.5 rounded-xl w-full max-w-md">
            <button
              onClick={() => setActiveTab("design")}
              className={`flex-1 text-center py-3 text-sm font-semibold rounded-lg transition-all ${
                activeTab === "design"
                  ? "bg-accent-orange text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.designTab}
            </button>
            <button
              onClick={() => setActiveTab("production")}
              className={`flex-1 text-center py-3 text-sm font-semibold rounded-lg transition-all ${
                activeTab === "production"
                  ? "bg-accent-orange text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.productionTab}
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          <AnimatePresence mode="wait">
            {(() => {
              const designImages = [
                "/design1_v2.png",
                "/design2_v2.png",
                "/design3_v2.png",
                "/design4_v2.png",
                "/design5_v2.png",
                "/mission_bg_v2.png"
              ];
              
              const productionImages = [
                "/workflow_bg_v2.png",
                "/mission_bg_v3.png",
                "/contractor_bg_v2.png",
                "/vision_bg_v2.png",
                "/interior_bg_v2.png",
                "/trading_bg_v2.png"
              ];
              
              const stepImages = activeTab === "design" ? designImages : productionImages;
              
              return steps.map((step, idx) => {
                const IconComp = step.icon;
                const bgImage = stepImages[idx];
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="relative group glass-card rounded-xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Background Image of the Card */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={bgImage}
                        alt={step.title}
                        fill
                        className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
                    </div>

                    {/* Decorative gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10" />

                    <div className="relative z-10">
                      {/* Top row */}
                      <div className="flex justify-end mb-6">
                        <span className="text-4xl font-extrabold text-zinc-300/35 font-heading select-none group-hover:text-accent-orange/45 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          {step.num}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white font-heading mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-accent-orange transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white font-semibold text-sm leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {step.desc}
                      </p>
                    </div>
                    
                    {/* Decorative indicator lines */}
                    {idx < 5 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {(idx + 1) % 3 !== 0 && (
                          <ChevronRight className="h-6 w-6 animate-pulse" />
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              });
            })()}
          </AnimatePresence>
          
        </div>

      </div>
    </section>
  );
}
