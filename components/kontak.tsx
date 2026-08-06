"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface KontakProps {
  lang: "id" | "en";
}

export default function Kontak({ lang }: KontakProps) {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const waNumber = "6281326094118";
    const waText = `Halo Tim PT. TAM,%0A%0ASaya ingin berdiskusi mengenai proyek.%0A%0A*Nama:* ${formState.name}%0A*Email:* ${formState.email}%0A*Subjek:* ${formState.subject}%0A*Pesan:* ${formState.message}`;
    
    window.open(`https://wa.me/${waNumber}?text=${waText}`, "_blank");
    
    setIsSent(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const content = {
    id: {
      sectionTitle: "Hubungi Kami",
      heading: "Mulai Kerjasama Anda",
      subtitle: "Diskusikan kebutuhan proyek konstruksi, trading, atau jasa interior Anda bersama tim ahli kami.",
      formName: "Nama Lengkap",
      formEmail: "Email",
      formSubject: "Subjek / Hal",
      formMessage: "Pesan",
      formBtn: "Kirim Pesan",
      successMsg: "Pesan Anda berhasil dikirim! Tim kami akan menghubungi Anda segera.",
      infoTitle: "Informasi Kontak",
      address: "Alamat Kantor",
      phone: "Nomor Telepon",
      email: "E-mail Resmi",
      website: "Situs Web",
      footerBio: "PT. Tembus Abadi Makmur (TAM) adalah perusahaan jasa konstruksi umum, perdagangan umum, dan kontraktor interior berbasis di Yogyakarta yang berdedikasi menghasilkan karya konstruksi berkualitas tinggi.",
    },
    en: {
      sectionTitle: "Contact Us",
      heading: "Start Your Partnership",
      subtitle: "Discuss your construction, trading, or interior project needs with our expert team.",
      formName: "Full Name",
      formEmail: "Email Address",
      formSubject: "Subject",
      formMessage: "Message",
      formBtn: "Send Message",
      successMsg: "Your message has been sent successfully! Our team will contact you shortly.",
      infoTitle: "Contact Info",
      address: "Office Address",
      phone: "Phone Number",
      email: "Official Email",
      website: "Website",
      footerBio: "PT. Tembus Abadi Makmur (TAM) is a general contractor, general trading, and interior contractor company based in Yogyakarta, dedicated to delivering high-quality construction outputs.",
    },
  };

  const t = content[lang];

  return (
    <section id="kontak" className="pt-24 pb-12 relative overflow-hidden bg-background">
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-accent-orange/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-accent-orange uppercase tracking-widest">
            {t.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mt-2">
            {t.heading}
          </h2>
          <p className="text-zinc-400 mt-3 font-light text-sm sm:text-base">
            {t.subtitle}
          </p>
          <div className="w-16 h-1 bg-accent-orange mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white font-heading mb-6 text-center">{t.infoTitle}</h3>
            <div className="glass-card rounded-2xl p-8 sm:p-10 relative flex-1 flex flex-col gap-6">
            
            {/* Address */}
            <div className="flex gap-4 p-5 rounded-xl bg-[#2a170b] border border-black group shadow-sm">
              <div className="p-3 rounded-lg bg-accent-orange/10 border border-accent-orange/20 text-accent-orange h-fit">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{t.address}</h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  Jl. Wahid Hasyim No.5, Condongcatur, Kec. Depok, Kab. Sleman, Daerah Istimewa Yogyakarta 55281
                </p>
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:+6281326094118"
              className="flex gap-4 p-5 rounded-xl bg-[#2a170b] border border-black hover:border-accent-orange/30 hover:bg-zinc-800 transition-all group shadow-sm"
            >
              <div className="p-3 rounded-lg bg-accent-orange/10 border border-accent-orange/20 text-accent-orange">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{t.phone}</h4>
                <p className="text-zinc-400 font-light text-sm group-hover:text-accent-orange transition-colors">
                  +62 813-2609-4118
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:tembusabadimakmur@gmail.com"
              className="flex gap-4 p-5 rounded-xl bg-[#2a170b] border border-black hover:border-accent-orange/30 hover:bg-zinc-800 transition-all group shadow-sm"
            >
              <div className="p-3 rounded-lg bg-accent-orange/10 border border-accent-orange/20 text-accent-orange">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{t.email}</h4>
                <p className="text-zinc-400 font-light text-sm group-hover:text-accent-orange transition-colors">
                  tembusabadimakmur@gmail.com
                </p>
              </div>
            </a>

            {/* Website */}
            <a
              href="https://www.tembusabadimakmur.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-5 rounded-xl bg-[#2a170b] border border-black hover:border-accent-orange/30 hover:bg-zinc-800 transition-all group shadow-sm"
            >
              <div className="p-3 rounded-lg bg-accent-orange/10 border border-accent-orange/20 text-accent-orange">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{t.website}</h4>
                <p className="text-zinc-400 font-light text-sm group-hover:text-accent-orange transition-colors">
                  www.tembusabadimakmur.com
                </p>
              </div>
            </a>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white font-heading mb-6 text-center">
              {lang === "id" ? "Kirim Pesan" : "Send a Message"}
            </h3>
            <div className="glass-card rounded-2xl p-8 sm:p-10 relative flex-1">
              
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[250px]"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-6 animate-bounce" />
                  <h4 className="text-xl font-bold text-white font-heading mb-2">
                    {lang === "id" ? "Terima Kasih!" : "Thank You!"}
                  </h4>
                  <p className="text-zinc-300 font-light text-sm max-w-sm">
                    {t.successMsg}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Row Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t.formName}</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="bg-[#2a170b] border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-orange transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t.formEmail}</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="bg-[#2a170b] border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-orange transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t.formSubject}</label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="bg-[#2a170b] border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-orange transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{t.formMessage}</label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-[#2a170b] border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent-orange transition-colors resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center px-6 py-3.5 bg-accent-orange hover:bg-accent-orange/95 text-white rounded-lg font-bold shadow-lg shadow-accent-orange/10 hover:shadow-accent-orange/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{t.formBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Corporate Footer Info */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="PT. TAM Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white font-poppins">
                PT. TEMBUS ABADI MAKMUR
              </span>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm font-light mt-3 leading-relaxed">
              {t.footerBio}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 text-sm">
            <div>
              <h4 className="text-white font-bold font-heading mb-4">{lang === "id" ? "Tautan Pintar" : "Quick Links"}</h4>
              <ul className="flex flex-col gap-2 text-zinc-400 font-light">
                <li><a href="#prakata" className="hover:text-accent-orange transition-colors">Preface</a></li>
                <li><a href="#visi-misi" className="hover:text-accent-orange transition-colors">Vision & Mission</a></li>
                <li><a href="#layanan" className="hover:text-accent-orange transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-accent-orange transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold font-heading mb-4">{lang === "id" ? "Lainnya" : "Other Links"}</h4>
              <ul className="flex flex-col gap-2 text-zinc-400 font-light">
                <li><a href="#struktur" className="hover:text-accent-orange transition-colors">Our Team</a></li>
                <li><a href="#workflow" className="hover:text-accent-orange transition-colors">Workflow</a></li>
                <li><a href="#legalitas" className="hover:text-accent-orange transition-colors">Legality</a></li>
                <li><a href="#kontak" className="hover:text-accent-orange transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-zinc-600 font-light">
          <span>&copy; {new Date().getFullYear()} <span className="font-poppins font-semibold">PT. Tembus Abadi Makmur</span>. All rights reserved.</span>
        </div>

      </div>
    </section>
  );
}
