"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { Project } from "@/types";
import Badge from "@/components/ui/Badge";

export default function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      layout
      className="h-full"
    >
      <Link href={`/construction/projects/${project.slug}`} className="group block h-full">
        <div className={`relative overflow-hidden bg-[#17191a] ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E]/90 via-[#0B0D0E]/10 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge tone={project.status === "ongoing" ? "green" : "gold"}>
              {project.status === "ongoing" ? "Ongoing" : "Completed"}
            </Badge>
          </div>
          <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-95 transition-all duration-400 group-hover:translate-y-0 md:p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D]">{project.category}</p>
            <div className="mt-1.5 flex items-end justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-[#F4F1EA] md:text-xl">{project.title}</h3>
                <p className="mt-1 text-xs text-[#c9c6bd]">{project.location}</p>
              </div>
              <ArrowRight className="size-5 shrink-0 text-[#F4F1EA] transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
