"use client";

import { useEffect, useState } from "react";
import { getAdminBlogs, saveAdminBlogs } from "@/lib/admin-data";
import type { AdminBlog } from "@/types/admin";
import { Newspaper, Plus } from "lucide-react";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);

  useEffect(() => {
    setBlogs(getAdminBlogs());
  }, []);

  function addBlog() {
    const newBlog: AdminBlog = {
      id: `blog-${Date.now()}`,
      title: "New editorial article",
      slug: "new-editorial-article",
      category: "Articles",
      tags: ["new"],
      author: "Admin",
      coverImage: "https://images.pexels.com/photos/37687676/pexels-photo-37687676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
      content: "This is a draft blog entry created from the admin panel.",
      publishedAt: new Date().toISOString().slice(0, 10),
      status: "draft",
      featured: false,
      updatedAt: new Date().toISOString().slice(0, 10),
    };

    const next = [
      ...blogs,
      newBlog,
    ];
    setBlogs(next);
    saveAdminBlogs(next);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">Editorial</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Blogs</h1>
        </div>
        <button onClick={addBlog} className="inline-flex items-center gap-2 border border-[#C8A45D] bg-[#C8A45D] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0D0E]">
          <Plus className="size-4" /> Add blog
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                <Newspaper className="size-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{blog.title}</p>
                <p className="text-sm text-[#A5A5A0]">{blog.category} • {blog.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
