"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import type { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="group flex h-full flex-col"
    >
      <Link href={`/media/${post.slug}`} className="relative block aspect-[16/11] overflow-hidden bg-[#17191a]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 border border-[#C8A45D]/50 bg-[#0B0D0E]/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8A45D]">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5A5A0]">{date}</p>
        <Link href={`/media/${post.slug}`}>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-[#F4F1EA] transition-colors duration-300 group-hover:text-[#C8A45D]">
            {post.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-[#A5A5A0]">{post.excerpt}</p>
        <Link
          href={`/media/${post.slug}`}
          className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors group-hover:text-[#C8A45D]"
        >
          Read More
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
}
