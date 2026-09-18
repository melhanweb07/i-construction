import { Ban } from "lucide-react";

export default function EmptyState({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-dashed border-[#2a2d2e] px-8 py-24 text-center">
      <Ban className="size-6 text-[#596B5A]" aria-hidden />
      <h3 className="text-lg font-medium text-[#F4F1EA]">{title}</h3>
      {description && <p className="max-w-sm text-sm text-[#A5A5A0]">{description}</p>}
    </div>
  );
}
