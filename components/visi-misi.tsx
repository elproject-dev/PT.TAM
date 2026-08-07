"use client";

import React from "react";
import Image from "next/image";
import { Globe, Target, ShieldCheck, Handshake, Landmark } from "lucide-react";
import { motion } from "framer-motion";

interface VisiMisiProps {
  lang: "id" | "en";
}

export default function VisiMisi({ lang }: VisiMisiProps) {
  const content = {
    id: {
      sectionTitle: "Tujuan & Strategi",
      heading: "Visi & Misi Kami",
      visionTitle: "Visi Kami",
      visionDesc: "Menjadi perusahan di bidang Teknologi, Perdagangan dan Industri Konstruksi terbaik di Indonesia dengan mengedepankan kepuasan kepada pengguna jasa/pelanggan.",
      missionTitle: "Misi Kami",
      missions: [
        {
          icon: Landmark,
          text: "Memberikan kepuasan kepada pengguna jasa/pelanggan dengan mengedepankan pekerjaan tepat biaya, tepat mutu dan tepat waktu.",
        },
        {
          icon: ShieldCheck,
          text: "Melaksanakan etika bisnis melalui pelayanan bisnis yang baik, jujur serta bertanggung jawab dalam bekerja.",
        },
        {
          icon: Handshake,
          text: "Menjaga hubungan baik dengan para pengguna jasa/pelanggan sehingga terciptanya kerjasama secara berkesinambungan.",
        },
      ],
    },
    en: {
      sectionTitle: "Goals & Strategy",
      heading: "Our Vision & Mission",
      visionTitle: "Our Vision",
      visionDesc: "To be the best construction company in Indonesia by prioritizing service user/customer satisfaction.",
      missionTitle: "Our Mission",
      missions: [
        {
          icon: Landmark,
          text: "Providing service user/customer satisfaction by prioritizing work at the right cost, right quality and on time.",
        },
        {
          icon: ShieldCheck,
          text: "Implementing business ethics through good business services, honesty and responsibility in work.",
        },
        {
          icon: Handshake,
          text: "Maintain good relations with service users / customers so as to create sustainable cooperation.",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="visi-misi" className="py-24 relative overflow-hidden bg-zinc-950 bg-grid-dots">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-accent-orange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-orange uppercase tracking-widest">
            {t.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mt-2">
            {t.heading}
          </h2>
          <div className="w-16 h-1 bg-accent-orange mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div className="relative group w-full flex flex-col justify-between rounded-2xl glass-card p-8 sm:p-10 overflow-hidden">
              {/* Opaque Background Image of the Card */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/vision_bg_v2.png"
                  alt="Vision Background"
                  fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  priority
                />
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10" />

              <div className="flex-1 flex flex-col relative z-10">
                <h3 className="text-2xl font-bold text-white font-heading mb-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {t.visionTitle}
                </h3>
                <div className="flex-1 flex justify-center items-center py-6">
                  <p className="text-white font-semibold leading-relaxed text-center text-[15px] sm:text-[17px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    "{t.visionDesc}"
                  </p>
                </div>
              </div>


            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex"
          >
            <div className="relative group w-full rounded-2xl glass-card p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Opaque Background Image of the Card */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/mission_bg_v3.png"
                  alt="Mission Background"
                  fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white font-heading mb-6 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {t.missionTitle}
                </h3>

                <div className="flex flex-col gap-6">
                  {t.missions.map((mission, idx) => {
                    const IconComp = mission.icon;
                    return (
                      <div key={idx} className="flex gap-4 items-center">
                        <div className="flex-shrink-0 text-accent-orange">
                          <IconComp className="h-4 w-4" />
                        </div>
                        <p className="text-white font-semibold text-sm sm:text-base leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {mission.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
