"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgressBar from "@/components/projects/ProgressBar";
import type { Project } from "@/types";

export default function OngoingProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-[#101213] py-24 md:py-32">
      <div className="container-fluid">
        <SectionHeading index="04 / 06" eyebrow="Currently In Progress" title="Ongoing projects, tracked openly." light />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col border border-[#232628] bg-[#121415]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={project.heroImage} alt={project.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A45D]">{project.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#F4F1EA]">{project.title}</h3>
                <p className="mt-1 text-xs text-[#A5A5A0]">{project.location}</p>
                <div className="mt-6">
                  <ProgressBar progress={project.progress} />
                </div>
                <Link
                  href={`/construction/projects/${project.slug}/progress`}
                  className="group mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]"
                >
                  View Project Progress
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
