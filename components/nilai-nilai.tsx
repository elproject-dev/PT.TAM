"use client";

import React from "react";
import { ShieldCheck, Award, ZoomIn, Target } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface NilaiNilaiProps {
  lang: "id" | "en";
}

export default function NilaiNilai({ lang }: NilaiNilaiProps) {
  const content = {
    id: {
      sectionTitle: "Nilai Perusahaan",
      heading: "Nilai-Nilai Utama Kami",
      subtitle: "Fondasi etos kerja kami dalam menghadirkan kepuasan optimal bagi setiap mitra bisnis.",
      values: [
        {
          title: "Integritas",
          desc: "Kami berpegang teguh pada kejujuran dalam setiap langkah tata kelola dalam rangka menjaga dan membangun kepercayaan.",
          icon: ShieldCheck,
          accent: "from-blue-500 to-cyan-500",
        },
        {
          title: "Profesionalisme",
          desc: "Kami menjalankan pekerjaan sesuai dengan keahlian dengan memposisikan diri agar mampu memahami tugas, tanggung jawab, relasi, serta fokus dan konsisten pada komitmen.",
          icon: Target,
          accent: "from-accent-orange to-amber-500",
        },
        {
          title: "Detail",
          desc: "Kami memperhatikan setiap detail proses kecil untuk mendapatkan hasil kualitas terbaik dan sesuai spesifikasi teknis.",
          icon: ZoomIn,
          accent: "from-emerald-500 to-teal-500",
        },
      ],
    },
    en: {
      sectionTitle: "Company Values",
      heading: "Our Core Values",
      subtitle: "The foundation of our work ethic in delivering optimal satisfaction for every business partner.",
      values: [
        {
          title: "Integrity",
          desc: "We adhere to honesty in every step of governance in order to maintain and build trust.",
          icon: ShieldCheck,
          accent: "from-blue-500 to-cyan-500",
        },
        {
          title: "Professionalism",
          desc: "We carry out work in accordance with our expertise by positioning ourselves to understand duties, responsibilities, relations, as well as focus and consistency in commitment.",
          icon: Target,
          accent: "from-accent-orange to-amber-500",
        },
        {
          title: "Detail",
          desc: "We pay attention to every detail in the process to achieve the best results and match technical specifications.",
          icon: ZoomIn,
          accent: "from-emerald-500 to-teal-500",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="nilai" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-orange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(() => {
            const bgImages = [
              "/value1.png",
              "/value2.png",
              "/value3.png"
            ];
            
            return t.values.map((val, idx) => {
              const IconComp = val.icon;
              const bgImage = bgImages[idx];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group rounded-2xl p-[1px] aspect-square flex"
                >
                  {/* Border glowing animation */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${val.accent} rounded-2xl blur opacity-10 group-hover:opacity-35 transition duration-500`} />
                  <div className="relative glass-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between items-start w-full h-full overflow-hidden">
                    
                    {/* Background Image of the Card */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={bgImage}
                        alt={val.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={60}
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-all duration-700 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700 pointer-events-none" />
                    </div>

                    <div className="relative z-10 w-full flex flex-col justify-between flex-1">
                      <div>
                    {/* Top Row: Number Only */}
                    <div className="flex justify-end items-start w-full mb-8">
                      {/* Number */}
                      <span className="text-4xl font-extrabold text-zinc-300/35 font-heading select-none group-hover:text-accent-orange/45 transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white font-heading mb-4 group-hover:text-accent-orange transition-colors">
                      {val.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-200 font-medium text-sm sm:text-base leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  </div>
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
