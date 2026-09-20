"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, slideRight, viewportOnce } from "@/lib/animations";
import ImageReveal from "@/components/ui/ImageReveal";
import { company } from "@/data/company";

export default function CompanyIntroSection() {
  return (
    <section className="bg-[#0B0D0E] py-24 md:py-32">
      <div className="container-fluid grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:pr-6"
        >
          <span className="text-xs font-medium uppercase tracking-[0.32em] text-[#C8A45D]">
            01 — ABOUT I CONSTRUCTION
          </span>
          <div className="mt-8 h-px w-14 bg-[#C8A45D]/60" />
          <p className="mt-8 max-w-md text-base leading-relaxed text-[#A5A5A0]">{company.description}</p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]"
          >
            Discover our story
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </motion.div>

        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-4xl text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.96] tracking-[-0.04em] text-[#F4F1EA]"
          >
            Built on experience.
            <span className="block text-[#A5A5A0]">Designed for tomorrow.</span>
          </motion.h2>

          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-10 grid gap-5 md:grid-cols-[1.5fr_0.7fr]">
            <ImageReveal
              src="https://images.pexels.com/photos/209218/pexels-photo-209218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600"
              alt="Architectural detail of a modern concrete building"
              className="aspect-[16/11] w-full"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
            <div className="flex flex-col justify-between border border-[#F4F1EA]/10 bg-[#101213] p-5 md:p-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D]">Precision</p>
                <p className="mt-4 text-lg font-medium leading-snug text-[#F4F1EA]">
                  Construction, infrastructure and real-estate decisions guided by long-term value.
                </p>
              </div>
              <div className="mt-8 border-t border-[#F4F1EA]/10 pt-5 text-[10px] uppercase tracking-[0.2em] text-[#A5A5A0]">
                Engineering-led execution
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
