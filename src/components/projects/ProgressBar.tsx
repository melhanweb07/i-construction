"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function ProgressBar({
  progress,
  label = "Progress",
  className,
}: {
  progress: number;
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-[#A5A5A0]">
        <span>{label}</span>
        <span className="font-medium text-[#C8A45D]">{progress}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden bg-[#232628]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-[#C8A45D]"
        />
      </div>
    </div>
  );
}
