"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";
import Button from "./Button";

interface CTAAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions: CTAAction[];
}

export default function CTASection({ eyebrow, title, description, actions }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B0D0E] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full" style={{
          backgroundImage:
            "linear-gradient(to right, #C8A45D 1px, transparent 1px), linear-gradient(to bottom, #C8A45D 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
      </div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-fluid relative flex flex-col items-center text-center"
      >
        {eyebrow && (
          <span className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#C8A45D]">
            {eyebrow}
          </span>
        )}
        <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.08] tracking-tight text-[#F4F1EA]">
          {title}
        </h2>
        {description && (
          <p className="mt-6 max-w-xl text-base text-[#A5A5A0]">{description}</p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {actions.map((action) => (
            <Button key={action.label} href={action.href} variant={action.variant ?? "primary"}>
              {action.label}
            </Button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
