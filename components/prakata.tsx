"use client";

import React from "react";
import { Quote, User } from "lucide-react";
import { motion } from "framer-motion";

interface PrakataProps {
  lang: "id" | "en";
}

export default function Prakata({ lang }: PrakataProps) {
  const paragraphsId = [
    "Industri konstruksi merupakan salah satu sektor yang memiliki peranan penting dalam pertumbuhan ekonomi di Indonesia. Hal ini dikarenakan industri ini sebagai salah satu penghasil multiplier effect yang memiliki hubungan keterkaitan dengan sektor lain. Dengan banyaknya permintaan di industri konstruksi maka dengan sendirinya akan menggerakan industri lainnya seperti,\njasa konsultan, design interior, industri bahan bangunan dan berbagai industri penunjang industri konstruksi.",
    "Melihat besarnya peluang pasar industri konstruksi, maka berawal dari keyakinan dan ketekunan dalam memulai usaha dibidang konstruksi dengan mengedepankan inovasi dan efisiensi di segala bidang serta mengedepankan kepercayaan dan kepuasan pengguna jasa adalah prioritas kami.",
    "Dengan adanya tim yang solid dan loyal, kami percaya bahwa perusahaan kami akan mampu terus berkembang. Sikap optimis dan percaya diri akan terus dipegang untuk menghadapi segala tantangan yang ada.",
    "Pengembangan teknologi yang tepat guna, tepat sasaran, dan didukung dengan inovasi tiada henti tanpa mengesampingkan aspek-aspek lingkungan akan menjadi kunci sukses untuk maju dan terus berkembang.",
    "Dengan rahmat Tuhan Allah SWT,\nkami yakin usaha ini akan terus berkembang dan menjadikan berkah. Terima Kasih atas kepercayaan yang telah diberikan. Kami akan terus menjaga dan membuktikannya.",
  ];

  const paragraphsEn = [
    "The construction industry is one of the sectors that has an important role in economic growth in Indonesia. This is because this industry is one of the producers of multiplier effects that have interrelationships with other sectors. With so much demand in the construction industry, it will automatically drive other industries such as\nconsulting services, interior design, the building materials industry and various industries supporting the construction industry.",
    "Seeing the magnitude of the construction industry market opportunity, starting from confidence and perseverance in starting a business in the construction sector by prioritizing innovation and efficiency in all fields by prioritizing the trust and satisfaction of service users is our priority.",
    "With a solid and loyal team, we believe that our company will be able to continue to grow. An optimistic and confident attitude will continue to be held to face all the challenges that exist.",
    "The development of technology that is appropriate, right on target, and supported by continuous innovation without ignoring environmental aspects will be the key to success to move forward and continue to grow.",
    "With the grace of Allah Almighty,\nwe are sure that this business will continue to grow and make a blessing. Thank you for the trust that has been given. We will continue to maintain and prove it.",
  ];

  const rawParagraphs = lang === "id" ? paragraphsId : paragraphsEn;
  const paragraphs = rawParagraphs.flatMap((p) => p.split(/(?<=\.)\s+/).filter(Boolean));
  const title = lang === "id" ? "Prakata Direktur" : "Director's Preface";
  const name = "Mahendra Harimawan";
  const role = lang === "id" ? "Direktur Utama" : "President Director";

  const highlightKeywords = (text: string) => {
    const keywordsId = ["Tuhan Allah SWT"];
    const keywordsEn = ["Allah Almighty"];
    const keywords = lang === "id" ? keywordsId : keywordsEn;

    let parts: (string | React.ReactNode)[] = [text];
    for (const keyword of keywords) {
      const regex = new RegExp(`(${keyword})`, "gi");
      parts = parts.flatMap((part) => {
        if (typeof part !== "string") return [part];
        return part.split(regex);
      });
    }

    return parts.map((part, i) => {
      if (typeof part === "string" && keywords.some(kw => kw.toLowerCase() === part.toLowerCase())) {
        return (
          <span key={i} className="text-accent-orange font-bold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id="prakata" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Message text */}
          <div className="lg:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div>
                <span className="text-xs font-bold text-accent-orange uppercase tracking-widest font-poppins">
                  PT. TEMBUS ABADI MAKMUR
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mt-2">
                  {title}
                </h2>
                <div className="w-20 h-1 bg-accent-orange mt-4 rounded-full" />
              </div>

              <div className="flex flex-col gap-4 text-white font-semibold leading-relaxed text-sm sm:text-base">
                <p className="text-accent-orange font-semibold italic">
                  Bismillahirrahmanirrahim...
                </p>

                <p className="text-accent-orange font-semibold">
                  {lang === "id" ? "Assalamualaikum wr. wb." : "Assalamu'alaikum wr. wb."}
                </p>

                {rawParagraphs.map((p, idx) => {
                  const sentences = p.split(/(?<=\.)\s+/).filter(Boolean);
                  return (
                    <p key={idx} className="leading-relaxed whitespace-pre-line">
                      {sentences.map((s, sIdx) => (
                        <React.Fragment key={sIdx}>
                          {highlightKeywords(s)}
                          {sIdx < sentences.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-accent-orange font-semibold font-heading">
                    Wassalamualaikum wr. wb.
                  </span>
                  <span className="text-zinc-500 text-xs">
                    Yogyakarta, Indonesia
                  </span>
                </div>
                
                <div className="flex flex-col gap-1 text-right">
                  <span className="text-white font-semibold font-heading text-sm">
                    {name}
                  </span>
                  <span className="text-accent-orange text-xs font-medium uppercase tracking-wider">
                    {role}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
