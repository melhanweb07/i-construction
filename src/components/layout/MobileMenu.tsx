"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { EASE } from "@/lib/animations";
import DivisionSwitcher from "./DivisionSwitcher";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/construction/services" },
  { label: "Projects", href: "/construction/projects" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 cursor-default bg-[#0B0D0E]/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: EASE }}
            className="absolute inset-y-0 right-0 flex w-[min(88vw,420px)] flex-col border-l border-[#F4F1EA]/10 bg-[#101213] shadow-[-24px_0_60px_rgba(0,0,0,0.35)]"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#F4F1EA]/10 px-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F4F1EA]">I Construction</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#C8A45D]">Build · Design · Invest</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex size-10 items-center justify-center border border-[#F4F1EA]/15 text-[#F4F1EA] transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-7" aria-label="Mobile primary">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-[#6b6d68]">Navigate</p>
              <div className="border-t border-[#F4F1EA]/10">
                {links.map((link, i) => {
                  const active = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, ease: EASE, delay: 0.08 + i * 0.04 }}
                      className="border-b border-[#F4F1EA]/10"
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-4 text-lg font-medium transition-colors ${
                          active ? "text-[#C8A45D]" : "text-[#F4F1EA] hover:text-[#C8A45D]"
                        }`}
                      >
                        <span className="flex items-center gap-4">
                          <span className="text-[10px] tracking-[0.15em] text-[#6b6d68]">0{i + 1}</span>
                          {link.label}
                        </span>
                        {active && <span className="h-1.5 w-1.5 bg-[#C8A45D]" aria-hidden />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            <div className="shrink-0 border-t border-[#F4F1EA]/10 px-5 py-5">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-[#6b6d68]">Choose a division</p>
              <DivisionSwitcher className="w-full justify-between" />
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-between bg-[#C8A45D] px-5 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#0B0D0E] transition-colors hover:bg-[#d9bf8c]"
              >
                Enquire Now
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
