"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DivisionSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const isRealEstate = pathname?.startsWith("/real-estate");

  return (
    <div
      className={cn(
        "relative inline-flex items-center border border-[#F4F1EA]/15 p-1 text-[10px] font-medium uppercase tracking-[0.15em]",
        className,
      )}
      role="tablist"
      aria-label="Division switcher"
    >
      <Link
        href="/construction"
        role="tab"
        aria-selected={!isRealEstate}
        className={cn(
          "relative z-10 px-3.5 py-2 transition-colors duration-300",
          !isRealEstate ? "text-[#0B0D0E]" : "text-[#A5A5A0] hover:text-[#F4F1EA]",
        )}
      >
        Construction
      </Link>
      <Link
        href="/real-estate"
        role="tab"
        aria-selected={isRealEstate}
        className={cn(
          "relative z-10 px-3.5 py-2 transition-colors duration-300",
          isRealEstate ? "text-[#0B0D0E]" : "text-[#A5A5A0] hover:text-[#F4F1EA]",
        )}
      >
        Real Estate
      </Link>
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-[#C8A45D] transition-transform duration-300 ease-out"
        style={{ transform: isRealEstate ? "translateX(100%)" : "translateX(0%)" }}
      />
    </div>
  );
}
