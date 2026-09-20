"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { constructionProcessSteps } from "@/data/company";

export default function ConstructionProcessSection() {
  return (
    <section className="bg-[#0B0D0E] py-24 md:py-32">
      <div className="container-fluid">
        <SectionHeading
          index="03 — PROCESS"
          eyebrow="Our Process"
          title="A clear path from brief to handover."
          light
        />

        <div className="mt-16">
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-7 h-px bg-[#F4F1EA]/10" />
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {constructionProcessSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={{ delay: index * 0.06 }}
                    className="relative pt-14"
                  >
                    <span className="absolute left-0 top-0 text-[10px] uppercase tracking-[0.25em] text-[#C8A45D]">
                      {step.number}
                    </span>
                    <div className="border border-[#F4F1EA]/10 bg-[#121415] p-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#A5A5A0]">Step</p>
                      <h3 className="mt-5 text-xl font-semibold text-[#F4F1EA]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#A5A5A0]">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="relative border-l border-[#F4F1EA]/10 pl-6">
              {constructionProcessSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ delay: index * 0.05 }}
                  className="relative pb-8 pl-6"
                >
                  <span className="absolute -left-[24px] top-0 flex size-6 items-center justify-center border border-[#C8A45D]/50 bg-[#0B0D0E] text-[9px] text-[#C8A45D]">
                    {step.number}
                  </span>
                  <div className="border border-[#F4F1EA]/10 bg-[#121415] p-5">
                    <h3 className="text-lg font-semibold text-[#F4F1EA]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#A5A5A0]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
