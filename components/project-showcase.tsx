"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectItem } from "@/content/site-content";

export function ProjectShowcase({ projects }: { projects: readonly ProjectItem[] }) {
  return (
    <div className="space-y-10">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.22, delay: index * 0.05, ease: "linear" }}
          whileHover={{ x: -4, y: -4 }}
          className={`border-4 border-black ${index % 2 === 0 ? "bg-white" : "bg-[#C4B5FD]"}`}
          style={{ boxShadow: "14px 14px 0 0 #000" }}
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-black border-b-4 bg-black p-8 text-white lg:border-r-4 lg:border-b-0">
              <p className="inline-flex border-4 border-white bg-[#FF6B6B] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-black">
                {project.clientType}
              </p>
              <h3 className="mt-6 text-4xl font-black uppercase leading-[0.92] md:text-6xl">{project.name}</h3>
              <p className="mt-5 text-lg font-bold leading-relaxed text-white">{project.overview}</p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {project.metrics.map((metric, metricIndex) => (
                  <div
                    key={metric}
                    className={`border-4 px-4 py-4 text-sm font-black uppercase leading-relaxed ${
                      metricIndex === 0 ? "border-black bg-[#FFD93D] text-black" : metricIndex === 1 ? "border-black bg-[#C4B5FD] text-black" : "border-white bg-white text-black"
                    }`}
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div className="overflow-hidden border-4 border-black bg-white">
                  <Image src={project.image} alt={project.imageAlt} width={1600} height={1000} className="h-auto w-full object-cover" />
                </div>

                <div className="inline-flex border-4 border-black bg-[#FFD93D] px-3 py-2 text-sm font-black uppercase tracking-[0.16em] text-black">
                  What Shaped The Result
                </div>

                <ul className="space-y-3">
                  {project.details.map((detail) => (
                    <li key={detail} className="border-4 border-black bg-white px-4 py-4 text-base font-bold leading-relaxed text-black">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
