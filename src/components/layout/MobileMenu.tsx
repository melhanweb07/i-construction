"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";
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
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="fixed inset-0 z-[90] flex flex-col bg-[#0B0D0E] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-fluid flex h-20 items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4F1EA]">
              I Construction
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex size-10 items-center justify-center border border-[#F4F1EA]/20 text-[#F4F1EA] transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <nav className="container-fluid flex flex-1 flex-col justify-center gap-1">
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.06 }}
                className="overflow-hidden border-b border-[#1e2021] py-4"
              >
                <Link
                  href={link.href}
                  className="text-3xl font-semibold tracking-tight text-[#F4F1EA] transition-colors hover:text-[#C8A45D]"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.5 }}
            className="container-fluid flex flex-col gap-6 pb-10"
          >
            <DivisionSwitcher />
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center bg-[#C8A45D] px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#0B0D0E]"
            >
              Enquire Now
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
