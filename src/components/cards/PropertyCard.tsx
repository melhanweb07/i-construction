"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { Property } from "@/types";
import Badge from "@/components/ui/Badge";
import { company } from "@/data/company";

const availabilityTone = {
  available: "green",
  limited: "gold",
  sold: "sold",
} as const;

const availabilityLabel = {
  available: "Available",
  limited: "Limited",
  sold: "Sold",
} as const;

export default function PropertyCard({ property }: { property: Property }) {
  const isSold = property.availability === "sold";
  const whatsappHref = `https://wa.me/${company.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Hi, I'm interested in ${property.name} (${property.plotNumber}).`,
  )}`;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="group flex h-full flex-col border border-[#232628] bg-[#121415] transition-colors duration-300 hover:border-[#C8A45D]/50"
    >
      <Link href={`/real-estate/plots/${property.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className={`object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105 ${isSold ? "grayscale-[0.35]" : ""}`}
        />
        <div className="absolute left-4 top-4">
          <Badge tone={availabilityTone[property.availability]}>{availabilityLabel[property.availability]}</Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5A5A0]">{property.location}</p>
        <Link href={`/real-estate/plots/${property.slug}`}>
          <h3 className="mt-1.5 text-lg font-semibold text-[#F4F1EA] transition-colors duration-300 group-hover:text-[#C8A45D]">
            {property.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-[#A5A5A0]">{property.description}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-[#A5A5A0]">
          <span>{property.size}</span>
          <span className="h-1 w-1 rounded-full bg-[#A5A5A0]/50" />
          <span>{property.dimensions}</span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#232628] pt-4">
          <span className="text-lg font-semibold text-[#F4F1EA]">{property.priceLabel}</span>
          <Link
            href={`/real-estate/plots/${property.slug}`}
            className="text-xs font-medium uppercase tracking-[0.15em] text-[#C8A45D] transition-colors hover:text-[#d9bf8c]"
          >
            View Details
          </Link>
        </div>

        {!isSold && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            <Link
              href={`/contact?type=real-estate&plot=${property.slug}`}
              className="col-span-1 flex items-center justify-center border border-[#F4F1EA]/15 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-[#F4F1EA] transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              Enquire
            </Link>
            <a
              href={`tel:${company.phone}`}
              aria-label="Call about this plot"
              className="col-span-1 flex items-center justify-center gap-1 border border-[#F4F1EA]/15 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-[#F4F1EA] transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              <Phone className="size-3.5" aria-hidden /> Call
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp about this plot"
              className="col-span-1 flex items-center justify-center gap-1 border border-[#F4F1EA]/15 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-[#F4F1EA] transition-colors hover:border-[#596B5A] hover:text-[#8ea28f]"
            >
              <MessageCircle className="size-3.5" aria-hidden /> Chat
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
