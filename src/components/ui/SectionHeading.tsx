"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(eyebrow || index) && (
        <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[#C8A45D]">
          {index && <span>{index}</span>}
          {index && eyebrow && <span className="h-px w-6 bg-[#C8A45D]/60" />}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2
        className={cn(
          "text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-tight",
          light ? "text-[#F4F1EA]" : "text-[#0B0D0E]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            light ? "text-[#A5A5A0]" : "text-[#4a4a47]",
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
