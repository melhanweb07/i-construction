"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-[#C8A45D] text-[#0B0D0E] hover:bg-[#d9bf8c] border border-[#C8A45D]",
  secondary:
    "bg-[#F4F1EA] text-[#0B0D0E] hover:bg-white border border-[#F4F1EA]",
  outline:
    "bg-transparent text-[#F4F1EA] border border-[#F4F1EA]/30 hover:border-[#C8A45D] hover:text-[#C8A45D]",
  ghost: "bg-transparent text-[#F4F1EA] border border-transparent hover:text-[#C8A45D]",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "text-xs px-4 py-2.5 gap-2",
  md: "text-sm px-6 py-3.5 gap-2.5",
  lg: "text-sm md:text-base px-8 py-4 gap-3",
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    showArrow = true,
    className,
  } = props;

  const classes = cn(
    "group inline-flex items-center justify-center uppercase tracking-[0.08em] font-medium transition-all duration-300 ease-out active:scale-[0.98] whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a href={props.href} target="_blank" rel="noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={classes}>
      {content}
    </button>
  );
}
