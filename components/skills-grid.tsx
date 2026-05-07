"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/content/site-content";

export function SkillsGrid({ groups }: { groups: readonly SkillGroup[] }) {
  const rotations = ["rotate-[-2deg]", "rotate-[2deg]", "rotate-[-1deg]", "rotate-[1deg]"];
  const backgrounds = ["bg-white", "bg-[#FFD93D]", "bg-[#C4B5FD]", "bg-[#FF6B6B]"];

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {groups.map((group, index) => (
        <motion.article
          key={group.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.22, delay: index * 0.04, ease: "linear" }}
          whileHover={{ x: -4, y: -4 }}
          className={`border-4 border-black p-8 ${rotations[index % rotations.length]} ${backgrounds[index % backgrounds.length]}`}
          style={{ boxShadow: "12px 12px 0 0 #000" }}
        >
          <div className="space-y-5">
            <div className="inline-flex border-4 border-black bg-black px-3 py-2 text-sm font-black uppercase tracking-[0.16em] text-white">
              {group.title}
            </div>
            <p className="text-lg font-bold leading-relaxed text-black">{group.blurb}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span key={skill} className="border-4 border-black bg-white px-3 py-2 text-sm font-black uppercase text-black">
                {skill}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
