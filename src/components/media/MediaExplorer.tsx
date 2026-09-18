"use client";

import { useState } from "react";
import BlogCard from "@/components/cards/BlogCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import { blogCategories } from "@/data/blogs";
import type { BlogPost } from "@/types";

export default function MediaExplorer({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<(typeof blogCategories)[number]>("All");
  const filtered = active === "All" ? posts : posts.filter((post) => post.category === active);

  return (
    <>
      <ProjectFilter
        active={active}
        onChange={(value) => setActive(value as (typeof blogCategories)[number])}
        categories={blogCategories}
      />
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-14 border border-dashed border-[#2a2d2e] py-16 text-center text-sm text-[#A5A5A0]">
          No stories in this category yet.
        </p>
      )}
    </>
  );
}