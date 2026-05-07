"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/content/site-content";

export function ExperienceTimeline({ items }: { items: readonly ExperienceItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.article
          key={`${item.company}-${item.role}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.22, delay: index * 0.04, ease: "linear" }}
          whileHover={{ x: -4, y: -4 }}
          className={`border-4 border-black ${index % 2 === 0 ? "bg-white" : "bg-[#FFD93D]"}`}
          style={{ boxShadow: "12px 12px 0 0 #000" }}
        >
          <div className="grid gap-0 lg:grid-cols-[140px_1fr_1fr]">
            <div className="border-black border-b-4 bg-[#FF6B6B] p-5 lg:border-r-4 lg:border-b-0">
              <p className="text-2xl font-black uppercase text-black">0{index + 1}</p>
            </div>

            <div className="border-black border-b-4 p-6 lg:border-r-4 lg:border-b-0">
              <div className="inline-flex border-4 border-black bg-black px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                {item.role}
              </div>
              <h3 className="mt-5 text-3xl font-black uppercase leading-tight text-black">{item.company}</h3>
              <p className="mt-4 text-base font-bold leading-relaxed text-black">{item.summary}</p>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {item.achievements.map((achievement, achievementIndex) => (
                  <li
                    key={achievement}
                    className={`border-4 border-black px-4 py-4 text-sm font-black uppercase leading-relaxed text-black ${
                      achievementIndex % 2 === 0 ? "bg-white" : "bg-[#C4B5FD]"
                    }`}
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
