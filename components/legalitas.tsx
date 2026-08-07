"use client";

import React, { useState } from "react";
import { FileText, Award, Landmark, ShieldCheck, Calendar, Lock, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LegalitasProps {
  lang: "id" | "en";
}

type DocType = "akta" | "sk" | "cover" | "npwp";

export default function Legalitas({ lang }: LegalitasProps) {
  const [activeDoc, setActiveDoc] = useState<DocType>("akta");
  const [showImage, setShowImage] = useState(false);

  const content = {
    id: {
      sectionTitle: "Kredibilitas & Legalitas",
      heading: "Legalitas Perusahaan",
      subtitle: "PT. TAM beroperasi secara sah berdasarkan hukum Republik Indonesia dengan dokumen perizinan lengkap.",
      vaultTitle: "Brankas Dokumen Resmi",
      viewDoc: "Lihat Detail Dokumen",
      docs: {
        akta: {
          title: "Akta Pendirian Perusahaan",
          number: "No. 04 Tanggal 04 Februari 2022",
          authority: "Notaris Dyah Rohmawati, S.H., M.Kn.",
          desc: "Akta pendirian badan hukum Perseroan Terbatas PT Tembus Abadi Makmur \n mencatat modal dasar, struktur pemegang saham,dan bidang usaha utama perusahaan.",
        },
        sk: {
          title: "SK Menteri Hukum & HAM RI",
          number: "AHU-0009048.AH.01.01.TAHUN 2022",
          authority: "Kementerian Hukum dan Hak Asasi Manusia",
          desc: "Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia tentang Pengesahan Pendirian Badan Hukum Perseroan Terbatas PT Tembus Abadi Makmur.",
        },
        cover: {
          title: "Cover Note Notaris",
          number: "No. Ref: 122/CN-DR/II/2022",
          authority: "Kantor Notaris & PPAT Yogyakarta",
          desc: "Dokumen keterangan notaris yang menerangkan bahwa proses pengurusan badan hukum sedang/telah selesai didaftarkan sesuai dengan peraturan perundang-undangan.",
        },
        npwp: {
          title: "NPWP Perusahaan (Tax ID)",
          number: "39.788.961.9-542.000",
          authority: "Kantor Pelayanan Pajak (KPP) Pratama",
          desc: "Nomor Pokok Wajib Pajak resmi atas nama PT Tembus Abadi Makmur sebagai wajib pajak badan yang patuh pada regulasi perpajakan nasional.",
        },
      },
    },
    en: {
      sectionTitle: "Credibility & Legality",
      heading: "Company Legality",
      subtitle: "PT. Tembus Abadi Makmur (TAM) legally operates under the laws of the Republic of Indonesia with complete licensing documents.",
      vaultTitle: "Official Document Vault",
      viewDoc: "View Document Details",
      docs: {
        akta: {
          title: "Company Deed of Establishment",
          number: "No. 04 Dated February 04, 2022",
          authority: "Notary Dyah Rohmawati, S.H., M.Kn.",
          desc: "Deed of establishment for PT Tembus Abadi Makmur incorporating authorized capital, shareholder structure, and primary business scopes.",
        },
        sk: {
          title: "Decree of Ministry of Law & Human Rights",
          number: "AHU-0009048.AH.01.01.TAHUN 2022",
          authority: "Ministry of Law and Human Rights RI",
          desc: "Decree of the Minister of Law and Human Rights of the Republic of Indonesia regarding legalization of PT Tembus Abadi Makmur corporate entity.",
        },
        cover: {
          title: "Notary Cover Note",
          number: "Ref No: 122/CN-DR/II/2022",
          authority: "Notary Office & PPAT Yogyakarta",
          desc: "Notarial cover note explaining the corporate legal status and legal documentation processing compliance with local laws.",
        },
        npwp: {
          title: "Corporate Tax ID (NPWP)",
          number: "62.304.591.2-542.000",
          authority: "Tax Office (KPP) Pratama Yogyakarta",
          desc: "Official Tax Identification Number for PT Tembus Abadi Makmur complying with national corporate tax regulations.",
        },
      },
    },
  };

  const t = content[lang];
  const activeData = t.docs[activeDoc];

  const docList = [
    { type: "akta" as DocType, title: t.docs.akta.title, icon: FileText },
    { type: "sk" as DocType, title: t.docs.sk.title, icon: ShieldCheck },
    { type: "cover" as DocType, title: t.docs.cover.title, icon: Landmark },
    { type: "npwp" as DocType, title: t.docs.npwp.title, icon: Award },
  ];

  return (
    <section id="legalitas" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Doc Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            {docList.map((doc) => {
              const IconComp = doc.icon;
              const isSelected = activeDoc === doc.type;
              return (
                <button
                  key={doc.type}
                  onClick={() => {
                    setActiveDoc(doc.type);
                    setShowImage(false);
                  }}
                  className={`flex-1 w-full flex items-center gap-4 p-5 rounded-xl border text-left transition-all ${isSelected
                    ? "bg-accent-orange/10 border-accent-orange text-white shadow-lg shadow-accent-orange/5"
                    : "glass border-transparent text-zinc-400 hover:bg-[#1e120c] hover:border-white/10 hover:text-white"
                    }`}
                >
                  <div className={`p-2.5 rounded-lg border ${isSelected
                    ? "bg-accent-orange/20 border-accent-orange/30 text-accent-orange"
                    : "bg-zinc-800 border-white/5 text-zinc-400"
                    }`}>
                    <IconComp className="h-5 w-5" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold font-heading">{doc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Document Vault Card */}
          <div className="lg:col-span-7 flex">
            <div className="relative group w-full rounded-2xl glass-card p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
              {/* Background Document Icon */}
              <div className="absolute top-1/2 -right-20 -translate-y-1/2 text-white/5 select-none pointer-events-none transform rotate-12">
                <FileText className="h-[450px] w-[450px]" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDoc}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-full h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Document Header */}
                    <div className="flex justify-between items-center pb-6 border-b border-white/5 mb-8">
                      <div className="flex items-center gap-2 text-zinc-500">
                        <Lock className="h-4 w-4 text-accent-orange" />
                        <span className="text-xs uppercase tracking-wider font-semibold">{t.vaultTitle}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>04/02/2022</span>
                      </div>
                    </div>

                    {/* Document Body */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-2">
                      {activeData.title}
                    </h3>
                    <span className="inline-block text-xs font-mono glass border-transparent text-accent-orange px-3 py-1 rounded-md mb-6 tracking-wide">
                      {activeData.number}
                    </span>

                    <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                      {activeData.desc}
                    </p>

                    {/* Image Toggle Link */}
                    <div className="mb-8">
                      <button
                        onClick={() => setShowImage(!showImage)}
                        className="flex items-center gap-2 text-sm font-semibold text-accent-orange hover:text-white transition-colors"
                      >
                        <ImageIcon className="h-4 w-4" />
                        {showImage ? "Sembunyikan Foto" : "Lihat Foto"}
                      </button>

                      {/* The Toggleable Photo */}
                      <AnimatePresence>
                        {showImage && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="relative w-full max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden border-2 border-white/10 shadow-xl"
                          >
                            <Image
                              src={{ akta: '/akta.webp', sk: '/ham.jpeg', cover: '/note.webp', npwp: '/npwp.png' }[activeDoc]}
                              alt={activeData.title}
                              fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Document Footer */}
                  <div className="pt-6 border-t border-white/5 w-full flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-xs">
                    <div>
                      <span className="text-zinc-500 block uppercase tracking-wider text-[10px]">Otoritas / Instansi</span>
                      <span className="text-white font-semibold">{activeData.authority}</span>
                    </div>
                    <div className="flex items-center gap-2 py-1 px-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg self-start sm:self-center font-bold">
                      <ShieldCheck className="h-4 w-4" />
                      <span>{lang === "id" ? "Terverifikasi" : "Verified Entity"}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
