"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { Testimonial } from "@/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.figure
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="flex h-full flex-col justify-between border border-[#232628] bg-[#121415] p-7 md:p-8"
    >
      <div>
        <div className="flex gap-1 text-[#C8A45D]" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-3.5" fill={i < testimonial.rating ? "currentColor" : "none"} aria-hidden />
          ))}
        </div>
        <blockquote className="mt-5 text-base leading-relaxed text-[#F4F1EA]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-7 flex items-center gap-3">
        <div className="relative size-11 overflow-hidden rounded-full">
          <Image src={testimonial.image} alt={testimonial.name} fill sizes="44px" className="object-cover" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#F4F1EA]">{testimonial.name}</p>
          <p className="text-xs text-[#A5A5A0]">{testimonial.role}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
