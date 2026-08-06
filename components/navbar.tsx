"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
  activeSection: string;
}

export default function Navbar({ lang, setLang, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", name: lang === "id" ? "Beranda" : "Home", isHome: true },
    { id: "prakata", name: lang === "id" ? "Prakata" : "Preface" },
    { id: "visi-misi", name: lang === "id" ? "Visi & Misi" : "Vision & Mission" },
    { id: "layanan", name: lang === "id" ? "Layanan" : "Services" },
    { id: "portfolio", name: lang === "id" ? "Portfolio" : "Portfolio" },
    { id: "workflow", name: lang === "id" ? "Workflow" : "Process" },
    { id: "struktur", name: lang === "id" ? "Tentang" : "About" },
  ];

  return (
    <motion.nav
      className="fixed top-4 inset-x-0 mx-auto z-50 w-[95%] max-w-7xl pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
    >
      <motion.div
        className="w-full flex relative justify-between items-center px-4 sm:px-6 py-3 rounded-2xl pointer-events-auto"
        animate={{
          maxWidth: scrolled ? "100%" : "90%",
          backgroundColor: scrolled ? "rgba(30, 18, 12, 0.85)" : "rgba(30, 18, 12, 0.45)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255, 255, 255, 0.08)",
          borderWidth: "1px",
          boxShadow: scrolled
            ? "0 20px 40px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)"
            : "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1], // easeOutExpo
        }}
        style={{
          margin: "0 auto",
          borderStyle: "solid",
        }}
      >
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="PT. TAM Logo"
            width={32}
            height={32}
            className="object-contain hover:scale-105 transition-transform"
            priority
          />
          <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white font-poppins tracking-wider uppercase whitespace-nowrap">
            PT. TEMBUS ABADI MAKMUR
          </span>
        </div>

        {/* Center: Desktop Menu Items with Sliding Pill Indicator */}
        <div className="hidden lg:flex items-center gap-1 glass p-1 rounded-xl backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs font-semibold leading-[110%] px-4 py-2 rounded-lg transition-colors duration-300 relative select-none ${isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
              >
                {/* Sliding Background Pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-zinc-800 rounded-lg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Side: Lang Switcher & Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center glass rounded-lg p-0.5 relative">
            <button
              onClick={() => setLang("id")}
              className={`text-[10px] font-bold px-2.5 py-1 rounded-md transition-colors relative z-10 ${lang === "id" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
            >
              {lang === "id" && (
                <motion.span
                  layoutId="activeLangTab"
                  className="absolute inset-0 bg-accent-orange rounded-md -z-10 shadow"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-[10px] font-bold px-2.5 py-1 rounded-md transition-colors relative z-10 ${lang === "en" ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
            >
              {lang === "en" && (
                <motion.span
                  layoutId="activeLangTab"
                  className="absolute inset-0 bg-accent-orange rounded-md -z-10 shadow"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              EN
            </button>
          </div>

          {/* Call-to-action button (LaunchPad style) */}
          <a
            href="#kontak"
            className="text-xs px-4 py-2 bg-white text-black font-bold rounded-lg border border-white/20 transition-all hover:bg-zinc-200 shadow-sm active:scale-95 hover:scale-[1.02]"
          >
            {lang === "id" ? "Hubungi Kami" : "Contact Us"}
          </a>
        </div>

        {/* Mobile menu button and lang toggle */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Mobile Language toggle button */}
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 glass px-2.5 py-1.5 rounded-lg hover:text-white"
          >
            <Globe className="h-3 w-3 text-accent-orange" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white glass hover:bg-[#1e120c]"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden glass border-white/10 rounded-2xl mt-2 overflow-hidden pointer-events-auto shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeSection === item.id
                    ? "bg-accent-orange/15 text-accent-orange border-l-2 border-accent-orange font-bold"
                    : "text-zinc-300 hover:bg-zinc-900/60 hover:text-white"
                    }`}
                >
                  {item.name}
                </a>
              ))}

              {/* Call-to-action button inside mobile menu */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href="#kontak"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-white text-black font-bold rounded-xl text-sm transition-all active:scale-95"
                >
                  {lang === "id" ? "Hubungi Kami" : "Contact Us"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
