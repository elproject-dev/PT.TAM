"use client";

import React from "react";
import { Award, ShieldCheck, MapPin, BarChart3, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

interface TentangProps {
  lang: "id" | "en";
}

export default function Tentang({ lang }: TentangProps) {
  const content = {
    id: {
      sectionTitle: "Perusahaan Kami",
      heading: "Sejarah & Perkembangan",
      para1: "PT TEMBUS ABADI MAKMUR (TAM) berdiri sejak 04 Februari 2022 berdasarkan SK Menteri Hukum dan HAM RI Nomor AHU-0009048.AH.01.01.TAHUN 2022. Kami mengawali usaha sejak tahun 2018, bergerak di bidang jasa konstruksi, perdagangan umum, dan jasa interior.",
      para2: "Kegiatan operasional semula dijalankan secara freelance oleh 2 orang saja. Seiring berjalannya waktu, perusahaan berkembang cukup pesat hingga memiliki tim officer tetap, serta perluasan jangkauan proyek dari wilayah Yogyakarta merambah hingga ke luar pulau Jawa.",
      para3: "Dengan mengedepankan prinsip Tepat Biaya, Tepat Mutu, dan Tepat Waktu (3T), serta didukung penguasaan teknologi tepat guna dan inovasi tiada henti, kami berkomitmen memberikan kepuasan tertinggi bagi pengguna jasa.",
      stats: [
        { label: "Berdiri Sejak", val: "2018", icon: Clock },
        { label: "Tim Officer", val: "8 Orang", icon: Users },
        { label: "Jangkauan Proyek", val: "Nasional", icon: MapPin },
        { label: "Omset Per Tahun", val: "Miliaran", icon: BarChart3 },
      ],
    },
    en: {
      sectionTitle: "Our Company",
      heading: "History & Growth",
      para1: "PT TEMBUS ABADI MAKMUR (TAM) was established on February 04, 2022 in accordance with the Decree of the Minister of Law and Human Rights Number AHU-0009048.AH.01.01.TAHUN 2022. We started our business back in 2018, specialized in construction, trading, and interior design.",
      para2: "The operational activities were originally run as freelance by only 2 people. Over time, the company grew rapidly, establishing a permanent office team and expanding our project reach from Yogyakarta to islands outside Java.",
      para3: "By prioritizing Right Cost, Right Quality, and Right Time (3T), supported by appropriate modern technologies and continuous innovation, we commit to deliver the highest satisfaction for our clients.",
      stats: [
        { label: "Established Since", val: "2018", icon: Clock },
        { label: "Office Team", val: "8 People", icon: Users },
        { label: "Project Reach", val: "National", icon: MapPin },
        { label: "Annual Revenue", val: "Billions", icon: BarChart3 },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="tentang" className="py-24 relative overflow-hidden bg-zinc-950 bg-grid-dots">
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Stats Cards */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {t.stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-card rounded-xl p-6 flex flex-col items-start gap-4 group"
                  >
                    <div className="p-2.5 rounded-lg bg-accent-orange/10 border border-accent-orange/20 text-accent-orange">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-2xl font-bold text-white font-heading tracking-tight">{stat.val}</span>
                      <span className="block text-xs text-zinc-500 font-medium mt-1 uppercase tracking-wider">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div>
                <span className="text-xs font-bold text-accent-orange uppercase tracking-widest">
                  {t.sectionTitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mt-2">
                  {t.heading}
                </h2>
                <div className="w-20 h-1 bg-accent-orange mt-4 rounded-full" />
              </div>

              <div className="flex flex-col gap-4 text-zinc-300 font-light leading-relaxed text-sm sm:text-base">
                <p>{t.para1}</p>
                <p>{t.para2}</p>
                <p className="border-l-2 border-accent-orange/50 pl-4 italic text-zinc-400">
                  {t.para3}
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
