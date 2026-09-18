"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function close() {
    setActiveIndex(null);
  }
  function next() {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }
  function prev() {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setActiveIndex(i)}
            className={`relative overflow-hidden bg-[#17191a] ${i === 0 ? "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto" : "aspect-square"}`}
            aria-label={`Open image ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${alt} — image ${i + 1}`}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B0D0E]/97 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute right-5 top-5 flex size-11 items-center justify-center border border-[#F4F1EA]/20 text-[#F4F1EA] hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              <X className="size-5" aria-hidden />
            </button>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-[#F4F1EA]/20 text-[#F4F1EA] hover:border-[#C8A45D] hover:text-[#C8A45D] md:left-8"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <div className="relative h-[70vh] w-full max-w-4xl">
              <Image src={images[activeIndex]} alt={`${alt} — image ${activeIndex + 1}`} fill sizes="80vw" className="object-contain" />
            </div>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center border border-[#F4F1EA]/20 text-[#F4F1EA] hover:border-[#C8A45D] hover:text-[#C8A45D] md:right-8"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
