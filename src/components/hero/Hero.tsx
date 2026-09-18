"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE } from "@/lib/animations";
import AnimatedText from "@/components/ui/AnimatedText";

export interface HeroInfoItem {
  label: string;
  value: string;
}

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface HeroProps {
  eyebrow: string;
  headingLines: string[];
  description: string;
  image: string;
  actions?: HeroAction[];
  infoItems?: HeroInfoItem[];
  minHeight?: string;
}

export default function Hero({
  eyebrow,
  headingLines,
  description,
  image,
  actions = [],
  infoItems = [],
  minHeight = "min-h-[92vh]",
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(relX * 20);
    my.set(relY * 20);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className={`relative flex ${minHeight} w-full items-end overflow-hidden bg-[#0B0D0E] pt-24`}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        style={reduced ? undefined : { x: sx, y: sy }}
        className="absolute inset-[-2%]"
      >
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-[#0B0D0E]/55 to-[#0B0D0E]/20"
      />
      <div className="absolute inset-0 bg-[#0B0D0E]/10" />

      <div className="container-fluid relative flex w-full flex-col pb-16 pt-10 md:pb-20">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="mb-6 inline-flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-[#C8A45D]"
        >
          <span className="h-px w-8 bg-[#C8A45D]" />
          {eyebrow}
        </motion.span>

        <AnimatedText
          lines={headingLines}
          delay={0.35}
          className="max-w-4xl"
          lineClassName="text-[clamp(2.4rem,7vw,5.6rem)] font-semibold uppercase leading-[1.02] tracking-tight text-[#F4F1EA]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
          className="mt-6 max-w-lg text-base text-[#dedad0]/90 md:text-lg"
        >
          {description}
        </motion.p>

        {actions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={
                  action.variant === "outline"
                    ? "inline-flex items-center border border-[#F4F1EA]/40 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors duration-300 hover:border-[#C8A45D] hover:text-[#C8A45D]"
                    : "inline-flex items-center bg-[#C8A45D] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.15em] text-[#0B0D0E] transition-colors duration-300 hover:bg-[#d9bf8c]"
                }
              >
                {action.label}
              </Link>
            ))}
          </motion.div>
        )}

        {infoItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.2 }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-[#F4F1EA]/15 pt-6 sm:grid-cols-4"
          >
            {infoItems.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#F4F1EA]">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#A5A5A0]">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#A5A5A0] md:flex"
        aria-hidden
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
