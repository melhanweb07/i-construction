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
      <div className="container-fluid grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C8A45D]">
            01 / About I Construction
          </span>
          <div className="mt-8 hairline w-16" />
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-[#A5A5A0]">{company.description}</p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]"
          >
            Discover our story
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </motion.div>

        <div className="lg:col-span-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-[1.1] tracking-tight text-[#F4F1EA]"
          >
            Built on experience.
            <br /> Designed for tomorrow.
          </motion.h2>

          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-10">
            <ImageReveal
              src="https://images.pexels.com/photos/209218/pexels-photo-209218.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1600"
              alt="Architectural detail of a modern concrete building"
              className="aspect-[16/9] w-full"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
