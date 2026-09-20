"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/data/company";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#101213] py-24 md:py-32">
      <div className="container-fluid">
        <SectionHeading
          index="02 — WHY I CONSTRUCTION"
          eyebrow="Our Approach"
          title="Built around clarity, accountability and execution."
          light
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: index * 0.08 }}
              className="group border border-[#F4F1EA]/10 bg-[#121415] p-6 transition-colors duration-300 hover:border-[#C8A45D]/40 hover:bg-[#17191a]"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#C8A45D]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-[#F4F1EA]">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#A5A5A0]">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
