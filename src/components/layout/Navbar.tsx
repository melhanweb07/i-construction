"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import DivisionSwitcher from "./DivisionSwitcher";
import MobileMenu from "./MobileMenu";

const centerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Construction", href: "/construction" },
  { label: "Projects", href: "/construction/projects" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-400",
        scrolled
          ? "border-b border-[#F4F1EA]/10 bg-[#0B0D0E]/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/40 to-transparent",
      )}
    >
      <div
        className={cn(
          "container-fluid flex items-center justify-between transition-all duration-400",
          scrolled ? "h-16 md:h-18" : "h-20 md:h-24",
        )}
      >
        <Link
          href="/"
          className="flex flex-col leading-none text-[#F4F1EA]"
          aria-label="I Construction — home"
        >
          <span className="text-base md:text-lg font-bold uppercase tracking-[0.12em]">
            I Construction
          </span>
          <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#C8A45D] sm:block">
            Build &middot; Design &middot; Invest
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {centerLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300",
                  active ? "text-[#C8A45D]" : "text-[#F4F1EA]/80 hover:text-[#F4F1EA]",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-[#C8A45D] transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <DivisionSwitcher />
          <Link
            href="/contact"
            className="inline-flex items-center border border-[#C8A45D] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-[#C8A45D] transition-colors duration-300 hover:bg-[#C8A45D] hover:text-[#0B0D0E]"
          >
            Start a Project
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="flex size-10 items-center justify-center border border-[#F4F1EA]/20 text-[#F4F1EA] lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" aria-hidden />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
