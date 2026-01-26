"use client";

import { useEffect, useState } from "react";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [disableReveal, setDisableReveal] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setDisableReveal(media.matches);
    handleChange();
    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }
    media.addListener(handleChange);
    return () => media.removeListener(handleChange);
  }, []);

  const shouldSkipReveal = prefersReducedMotion || disableReveal;

  return (
    <motion.div
      initial={shouldSkipReveal ? "show" : "hidden"}
      animate={shouldSkipReveal ? "show" : undefined}
      whileInView={shouldSkipReveal ? undefined : "show"}
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
