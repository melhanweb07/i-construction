"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export default function StatCounter({ value, suffix = "", label, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col", className)}
    >
      <span ref={ref} className="text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-none tracking-tight text-[#F4F1EA]">
        {display}
        <span className="text-[#C8A45D]">{suffix}</span>
      </span>
      <span className="mt-3 text-xs uppercase tracking-[0.2em] text-[#A5A5A0]">{label}</span>
    </motion.div>
  );
}
