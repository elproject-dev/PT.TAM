"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  lang: "id" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const content = {
    id: {
      title: "Membangun Kepercayaan dengan Kualitas Terbaik",
      subtitle: "PT. TAM menghadirkan solusi konstruksi, trading,interior serta pembuatan aplikasi & jaringan komputer yang tepat mutu, tepat biaya, dan tepat waktu.",
      ctaPrimary: "Memulai",
    },
    en: {
      title: "Building Trust with Outstanding Quality",
      subtitle: "PT. TAM delivers construction, trading, interior and application development & network computer solutions with the right quality, cost, and schedule.",
      ctaPrimary: "Get Started",
    },
  };

  const t = content[lang];
  const sentence = t.subtitle;
  const [typedText, setTypedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    setTypedText("");
    setIsDone(false);
    const interval = setInterval(() => {
      setTypedText(sentence.slice(0, index + 1));
      index++;
      if (index >= sentence.length) {
        setIsDone(true);
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [sentence]);

  return (
    <div id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-background bg-grid-lines pt-12 sm:pt-20">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-accent-orange/10 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Grid Overlay Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center z-10">
        {/* Centered Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-4 sm:mb-8 relative"
        >
          {/* Breathing Scale Animation Wrapper */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center"
          >
            {/* Subtle Yellow Logo Glow */}
            <div className="absolute -inset-10 bg-accent-orange/12 rounded-full blur-3xl animate-pulse" />
            <Image
              src="/logo.png"
              alt="PT. TAM Logo"
              width={1056}
              height={784}
              className="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain relative z-10 hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Heading */}
        <h1
          className="text-[6.5vw] min-[500px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white font-poppins leading-[1.2] whitespace-nowrap text-center px-2 animate-hero-title"
        >
          PT. TEMBUS ABADI MAKMUR
        </h1>

        {/* Subtitle with Realistic Typing Effect */}
        <p className="mt-6 text-[11px] sm:text-xs md:text-sm lg:text-base text-accent-orange max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-none lg:whitespace-nowrap leading-relaxed font-bold flex flex-wrap items-center justify-center text-center">
          <span>{typedText}</span>
          {!isDone && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className="inline-block ml-1 text-white font-normal"
            >
              |
            </motion.span>
          )}
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex justify-center items-center w-full"
        >
          <a
            href="#prakata"
            className="flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm bg-accent-orange text-black rounded-xl font-bold shadow-lg shadow-accent-orange/10 hover:bg-accent-orange/90 transition-all hover:scale-105 active:scale-95 group"
          >
            <span className="pl-3">{t.ctaPrimary}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Floating stars or dots simulation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-[40%] right-[15%] w-1 h-1 bg-white/60 rounded-full" />
        <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-accent-orange/30 rounded-full animate-bounce" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[35%] right-[8%] w-1 h-1 bg-white/30 rounded-full animate-pulse" />
      </div>

      {/* Chevron down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer text-zinc-500 hover:text-white transition-colors"
      >
        <a href="#prakata" className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest mb-1">{lang === "id" ? "Scroll ke Bawah" : "Scroll Down"}</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </div>
  );
}
