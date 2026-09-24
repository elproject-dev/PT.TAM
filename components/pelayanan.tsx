"use client";

import React from "react";
import Image from "next/image";
import { HardHat, Landmark, Paintbrush, ArrowUpRight, Code, Server, LineChart } from "lucide-react";
import { motion } from "framer-motion";

interface PelayananProps {
  lang: "id" | "en";
}

export default function Pelayanan({ lang }: PelayananProps) {
  const content = {
    id: {
      sectionTitle: "Layanan Kami",
      heading: "Fokus Solusi Bisnis",
      subtitle: "Menyediakan layanan komprehensif di bidang kontraktor, perdagangan, dan desain interior.",
      services: [
        {
          title: "General Contractor",
          desc: "Pembangunan gedung, infrastruktur sipil, renovasi struktural, dan manajemen proyek konstruksi skala besar hingga perumahan dengan jaminan standar mutu struktural yang tinggi.",
          icon: HardHat,
          tag: "Konstruksi & Sipil",
          features: ["Pekerjaan Struktur & Arsitektur", "Renovasi Gedung & Rumah", "Sipil & Infrastruktur"],
        },
        {
          title: "General Trading",
          desc: "Penyediaan material konstruksi berkualitas, kebutuhan industri, pengadaan barang berskala besar (procurement), serta rantai pasok material yang efisien untuk menunjang kebutuhan proyek.",
          icon: Landmark,
          tag: "Pengadaan & Supply",
          features: ["Suplai Material Bangunan", "Pengadaan Barang Korporat", "Kemitraan Distributor"],
        },
        {
          title: "Interior Design & Fit-Out",
          desc: "Perancangan ruang estetis dan fungsional, pembuatan furniture custom (kitchen set, wardrobe, dll), tata ruang kantor, residensial, dan komersial dengan pengerjaan finishing yang detail.",
          icon: Paintbrush,
          tag: "Interior & Arsitektur Ruang",
          features: ["Desain 3D & Spatial Planning", "Furniture Custom & Fitting", "Renovasi Interior (Fit-out)"],
        },
        {
          title: "Pengembangan Aplikasi",
          desc: "Pembuatan aplikasi berbasis web, mobile, dan desktop yang responsif serta disesuaikan dengan kebutuhan bisnis untuk meningkatkan efisiensi operasional.",
          icon: Code,
          tag: "Teknologi & Perangkat Lunak",
          features: ["Web Development", "Mobile App Development", "Desktop Application"],
        },
        {
          title: "Server Jaringan Komputer",
          desc: "Perancangan, instalasi, dan pemeliharaan infrastruktur server jaringan yang aman, cepat, dan handal untuk mendukung konektivitas dan skalabilitas perusahaan.",
          icon: Server,
          tag: "Infrastruktur IT",
          features: ["Setup & Konfigurasi Server", "Manajemen Jaringan", "Keamanan Cyber"],
        },
        {
          title: "Konsultan Bisnis",
          desc: "Layanan konsultasi strategis, perumusan model bisnis, analisis kelayakan proyek, hingga pendampingan manajemen untuk mendorong pertumbuhan dan efisiensi perusahaan Anda.",
          icon: LineChart,
          tag: "Konsultasi & Strategi",
          features: ["Analisis Bisnis & Proyek", "Strategi & Pengembangan", "Pendampingan Manajemen"],
        },
      ],
    },
    en: {
      sectionTitle: "Our Services",
      heading: "Business Solution Focus",
      subtitle: "Providing comprehensive services in general contracting, trading, and interior design.",
      services: [
        {
          title: "General Contractor",
          desc: "Building construction, civil infrastructure, structural renovation, and large-scale to residential project management with guaranteed high structural quality standards.",
          icon: HardHat,
          tag: "Construction & Civil",
          features: ["Structural & Architectural Work", "Building & Home Renovation", "Civil & Infrastructure"],
        },
        {
          title: "General Trading",
          desc: "Provision of quality construction materials, industrial requirements, large-scale procurement, and efficient material supply chain to support project requirements.",
          icon: Landmark,
          tag: "Procurement & Supply",
          features: ["Building Material Supply", "Corporate Procurement", "Distributor Partnerships"],
        },
        {
          title: "Interior Design & Fit-Out",
          desc: "Aesthetic and functional space planning, custom furniture fabrication (kitchen sets, wardrobes, etc.), office, residential, and commercial layout design with detailed finishing.",
          icon: Paintbrush,
          tag: "Interior & Space Architecture",
          features: ["3D Design & Spatial Planning", "Custom Furniture & Fitting", "Interior Fit-out & Renovation"],
        },
        {
          title: "Application Development",
          desc: "Creating responsive web, mobile, and desktop applications tailored to business needs to improve operational efficiency and digital transformation.",
          icon: Code,
          tag: "Technology & Software",
          features: ["Web Development", "Mobile App Development", "Desktop Application"],
        },
        {
          title: "Network Server Solutions",
          desc: "Design, installation, and maintenance of secure, fast, and reliable network server infrastructure to support enterprise connectivity and scalability.",
          icon: Server,
          tag: "IT Infrastructure",
          features: ["Server Setup & Configuration", "Network Management", "Cyber Security"],
        },
        {
          title: "Business Consultant",
          desc: "Strategic consulting services, business model formulation, project feasibility analysis, and management advisory to drive your company's growth and efficiency.",
          icon: LineChart,
          tag: "Consulting & Strategy",
          features: ["Business & Project Analysis", "Strategy & Development", "Management Advisory"],
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="layanan" className="py-24 relative overflow-hidden bg-zinc-950 bg-grid-dots">
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {(() => {
            const bgImages = [
              "/contractor_bg_v2.png",
              "/design2_v2.png",
              "/interior_bg_v2.png",
              "/app_dev_bg.png",
              "/server_bg2.png",
              "/design3_v2.png"
            ];

            return t.services.map((svc, idx) => {
              const IconComp = svc.icon;
              const bgImage = bgImages[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group glass-card rounded-2xl p-8 flex flex-col justify-between items-start h-full overflow-hidden"
                >
                  {/* Background Image of the Card */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={bgImage}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={60}
                      loading="lazy"
                      className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none" />
                  </div>

                  {/* Decorative gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10" />

                  <div className="w-full relative z-10">
                    {/* Badge & Number */}
                    <div className="flex justify-between items-start w-full mb-6">
                      <span className="text-[10px] uppercase font-bold text-zinc-200 tracking-wider bg-zinc-900/80 backdrop-blur border border-white/10 px-2.5 py-1 rounded-md drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {svc.tag}
                      </span>
                      <span className="text-4xl font-extrabold text-zinc-300/35 font-heading select-none group-hover:text-accent-orange/45 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {`0${idx + 1}`}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white font-heading mb-4 flex items-center gap-1 group-hover:text-accent-orange transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <span>{svc.title}</span>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>

                    {/* Desc */}
                    <p className="text-white font-semibold text-sm sm:text-base leading-relaxed mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="w-full pt-6 border-t border-white/10 relative z-10">
                    <ul className="flex flex-col gap-2.5">
                      {svc.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-100 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              );
            });
          })()}
        </div>

      </div>
    </section>
  );
}
