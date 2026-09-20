"use client";

import { useEffect, useState } from "react";
import { getAdminContent, saveAdminContent } from "@/lib/admin-data";
import type { AdminContent } from "@/types/admin";
import { FileCog } from "lucide-react";

export default function AdminContentPage() {
  const [content, setContent] = useState<AdminContent | null>(null);

  useEffect(() => {
    setContent(getAdminContent());
  }, []);

  if (!content) return null;

  function updateField<K extends keyof AdminContent>(key: K, value: AdminContent[K]) {
    const next = { ...content, [key]: value } as AdminContent;
    setContent(next);
    saveAdminContent(next);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">Website settings</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Content</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
          <div className="mb-4 flex items-center gap-3 text-[#C8A45D]">
            <FileCog className="size-5" />
            <span className="text-xs uppercase tracking-[0.18em]">Brand</span>
          </div>
          <div className="space-y-3">
            <input value={content.companyName} onChange={(event) => updateField("companyName", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
            <textarea value={content.description} onChange={(event) => updateField("description", event.target.value)} className="min-h-[120px] w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
            <input value={content.phone} onChange={(event) => updateField("phone", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
            <input value={content.email} onChange={(event) => updateField("email", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
            <input value={content.address} onChange={(event) => updateField("address", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          </div>
        </div>

        <div className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
          <div className="mb-4 flex items-center gap-3 text-[#C8A45D]">
            <FileCog className="size-5" />
            <span className="text-xs uppercase tracking-[0.18em]">Landing page</span>
          </div>
          <div className="space-y-3">
            <input value={content.homepageHeroTitle} onChange={(event) => updateField("homepageHeroTitle", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
            <textarea value={content.homepageHeroDescription} onChange={(event) => updateField("homepageHeroDescription", event.target.value)} className="min-h-[100px] w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
            <input value={content.heroCtaPrimary} onChange={(event) => updateField("heroCtaPrimary", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
            <input value={content.heroCtaSecondary} onChange={(event) => updateField("heroCtaSecondary", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
            <input value={content.homepageHeroImage} onChange={(event) => updateField("homepageHeroImage", event.target.value)} className="w-full rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          </div>
        </div>
      </div>
    </div>
  );
}
