"use client";

import { cn } from "@/lib/utils";
import { projectCategories } from "@/data/projects";

export default function ProjectFilter({
  active,
  onChange,
  categories = projectCategories,
}: {
  active: string;
  onChange: (value: string) => void;
  categories?: readonly string[];
}) {
  return (
    <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1" role="tablist" aria-label="Filter projects">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={cn(
            "shrink-0 border px-4 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300",
            active === cat
              ? "border-[#C8A45D] bg-[#C8A45D] text-[#0B0D0E]"
              : "border-[#232628] text-[#A5A5A0] hover:border-[#C8A45D]/60 hover:text-[#F4F1EA]",
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
