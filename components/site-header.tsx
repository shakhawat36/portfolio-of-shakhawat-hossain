"use client";

import { motion } from "framer-motion";
import { InteractiveLink } from "@/components/interactive-link";
import { siteContent } from "@/content/site-content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="section-shell pt-4">
        <div className="neo-panel-yellow flex items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#home" className="bg-black px-3 py-2 text-sm font-black uppercase tracking-[0.16em] text-white">
            {siteContent.name}
          </a>

          <nav className="hidden items-center gap-3 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`border-4 border-black px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-black transition duration-100 ease-linear hover:-translate-y-1 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#C4B5FD]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <InteractiveLink href={`mailto:${siteContent.email}`} className="button-primary hidden sm:inline-flex">
            Email
          </InteractiveLink>
        </div>
      </div>
    </motion.header>
  );
}
