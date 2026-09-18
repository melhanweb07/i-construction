import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "gold" | "green" | "neutral" | "sold";
  className?: string;
}

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  gold: "border-[#C8A45D]/50 text-[#C8A45D]",
  green: "border-[#596B5A]/60 text-[#8ea28f]",
  neutral: "border-[#A5A5A0]/40 text-[#A5A5A0]",
  sold: "border-[#A5A5A0]/40 text-[#0B0D0E] bg-[#F4F1EA]",
};

export default function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
