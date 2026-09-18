"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { revealImage, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes = "100vw",
}: ImageRevealProps) {
  return (
    <motion.div
      variants={revealImage}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn("relative overflow-hidden bg-[#17191a]", className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imgClassName)}
      />
    </motion.div>
  );
}
