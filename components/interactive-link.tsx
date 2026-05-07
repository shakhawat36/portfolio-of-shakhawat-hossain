"use client";

import { motion } from "framer-motion";

type InteractiveLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function InteractiveLink({ href, className, children }: InteractiveLinkProps) {
  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 4, y: 4 }}
      transition={{ duration: 0.12, ease: "linear" }}
    >
      {children}
    </motion.a>
  );
}
