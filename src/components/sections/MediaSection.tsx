import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/cards/BlogCard";
import type { BlogPost } from "@/types";

export default function MediaSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="bg-[#101213] py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading index="06 / 06" eyebrow="Latest Works" title="Stories from site and studio." light />
          <Link
            href="/media"
            className="group inline-flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]"
          >
            Visit Media
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
