"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { ProjectUpdate } from "@/types";

export default function ProgressTimeline({ updates }: { updates: ProjectUpdate[] }) {
  return (
    <ol className="relative flex flex-col gap-12 border-l border-[#232628] pl-8 md:pl-12">
      {updates.map((update) => (
        <motion.li
          key={update.id}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <span className="absolute -left-[41px] top-1 flex size-8 items-center justify-center border border-[#C8A45D]/60 bg-[#0B0D0E] text-[10px] font-medium text-[#C8A45D] md:-left-[57px] md:size-10">
            {String(update.index).padStart(2, "0")}
          </span>
          <div className="grid gap-5 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A5A5A0]">
                {new Date(update.date).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-[#F4F1EA]">{update.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A5A5A0]">{update.description}</p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#17191a]">
              <Image src={update.image} alt={update.title} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
