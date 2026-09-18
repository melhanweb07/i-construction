"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { Service } from "@/types";

export default function ServiceCard({ service, large = false }: { service: Service; large?: boolean }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <Link
        href={`/construction/services#${service.slug}`}
        className={`group relative block overflow-hidden bg-[#17191a] ${large ? "aspect-[16/11]" : "aspect-[4/5]"}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-[#0B0D0E]/40 to-transparent transition-opacity duration-500 group-hover:from-[#0B0D0E]/95" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">
              {service.number}
            </span>
            <ArrowRight className="size-5 -translate-x-1 -translate-y-1 rotate-[-40deg] text-[#F4F1EA] opacity-70 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:text-[#C8A45D] group-hover:opacity-100" />
          </div>

          <div>
            <span className="mb-3 block h-px w-0 bg-[#C8A45D] transition-all duration-500 group-hover:w-12" />
            <h3 className="text-xl font-semibold text-[#F4F1EA] md:text-2xl">{service.title}</h3>
            <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-[#c9c6bd] opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-24 group-hover:opacity-100">
              {service.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
