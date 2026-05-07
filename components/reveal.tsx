"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 18, rotate: -1 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : undefined}
      transition={{ duration: 0.22, ease: "linear", delay }}
    >
      {children}
    </motion.div>
  );
}
