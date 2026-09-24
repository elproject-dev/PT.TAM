"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCheck } from "lucide-react";

const PHONE_NUMBER = "6281393412277";

const QUICK_TOPICS = [
  "Layanan Jasa Konstruksi & Arsitektur",
  "Layanan Kelistrikan",
  "Layanan Pembuatan Aplikasi / Website",
  "Layanan Instalasi Jaringan & CCTV",
  "Layanan Pengadaan Barang & Trading",
];

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOpenToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    setMessage(`Halo PT. TAM, saya tertarik dengan ${topic}. Boleh minta info lebih detail?`);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const textToSend = message.trim()
      ? message
      : "Halo PT. TAM, saya ingin berkonsultasi mengenai layanan Anda.";

    const encodedText = encodeURIComponent(textToSend);
    const waUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={containerRef} className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      {/* Floating Chat Box Window - Slightly Rounded Corners (rounded-xl / rounded-lg) */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2.5rem)] sm:w-[380px] max-h-[560px] bg-[#0f171c] border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#00a884] to-[#128c7e] p-3.5 text-white flex items-center justify-between shadow-md rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 p-0.5 flex items-center justify-center font-bold text-white shadow-inner overflow-hidden border border-white/30">
                  <img
                    src="/logo.png"
                    alt="PT. TAM Logo"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
                  PT. TAM Support
                </h3>
                <p className="text-[11px] text-emerald-100 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online • Biasanya membalas instan
                </p>
              </div>
            </div></div>

          {/* Chat Body */}
          <div
            className="p-4 flex-1 overflow-y-auto space-y-4 max-h-[340px] text-sm bg-[#0b141a] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(37, 211, 102, 0.03) 0%, transparent 80%)",
            }}
          >
            {/* Timestamp Badge */}
            <div className="text-center my-1">
              <span className="text-[10px] bg-[#182229] text-gray-400 px-2.5 py-0.5 rounded-sm border border-white/5 font-mono">
                Hari ini
              </span>
            </div>

            {/* Admin Greeting Message Bubble - Slightly Rounded (rounded-lg) */}
            <div className="flex items-start gap-2.5 max-w-[88%]">
              <div className="bg-[#1e2a30] text-gray-100 p-3 rounded-lg rounded-tl-none border border-white/10 shadow-md space-y-2">
                <p className="text-xs font-semibold text-[#00a884]">PT. TAM Support</p>
                <p className="text-[13px] leading-relaxed text-gray-200">
                  Halo! 👋 Selamat datang di <br></br> <strong>PT. Tembus Abadi Makmur (TAM)</strong>.
                </p>
                <p className="text-[13px] leading-relaxed text-gray-300">
                  Ada yang bisa kami bantu hari ini?<br></br> Kami siap melayani kebutuhan konstruksi, IT, kelistrikan,CCTV dan pengadaan barang.
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-gray-400 pt-1">
                  <span>Baru saja</span>
                  <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />
                </div>
              </div>
            </div>

            {/* Quick Topic Chips - Slightly Rounded Buttons (rounded-sm) */}
            <div className="pt-2">
              <p className="text-[11px] font-medium text-gray-400 mb-2 px-0.5">
                Pilih topik pertanyaan cepat:
              </p>
              <div className="flex flex-col gap-1.5">
                {QUICK_TOPICS.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleSelectTopic(topic)}
                    className={`text-xs px-3 py-2 rounded-sm border transition-all text-left font-medium ${selectedTopic === topic
                      ? "bg-[#00a884]/20 border-[#00a884] text-emerald-300 shadow-sm"
                      : "bg-[#182229] border-white/10 text-gray-300 hover:bg-[#222e35] hover:border-white/20"
                      }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Footer / Input Form - Slightly Rounded (rounded-sm) */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-[#182229] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan ke WhatsApp..."
              className="flex-1 bg-[#0b141a] text-white placeholder-gray-400 text-xs sm:text-sm px-3.5 py-2.5 rounded-sm border border-white/10 focus:border-[#00a884] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-[#00a884] hover:bg-[#008f70] text-white p-2.5 rounded-sm flex items-center justify-center transition-all duration-200 shadow-md active:scale-95 shrink-0"
              aria-label="Kirim Pesan WhatsApp"
              title="Kirim ke WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main WhatsApp Trigger Button - Round Circular (rounded-full) */}
      <button
        onClick={handleOpenToggle}
        aria-label="Chat WhatsApp PT. TAM"
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.65)] transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center border border-emerald-300/30"
      >
        {/* Glowing pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-75 blur-sm transition-opacity duration-300 animate-pulse"></span>

        {/* Outer ping animation when button is closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
        )}

        {/* Icon toggle */}
        <div className="relative z-10">
          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
          ) : (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          )}
        </div>

        {/* Unread badge dot */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#121b22]"></span>
          </span>
        )}
      </button>
    </div>
  );
}
