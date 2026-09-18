import { cn } from "@/lib/utils";

function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#17191a] before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent",
        className,
      )}
      style={{
        animation: "none",
      }}
    >
      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Shimmer className="aspect-[4/3] w-full" />
      <Shimmer className="h-4 w-2/3" />
      <Shimmer className="h-3 w-1/3" />
    </div>
  );
}

export function ProjectSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Shimmer className="aspect-[16/10] w-full" />
      <div className="flex items-center justify-between">
        <Shimmer className="h-4 w-1/3" />
        <Shimmer className="h-4 w-16" />
      </div>
    </div>
  );
}

export function PropertySkeleton() {
  return (
    <div className="flex flex-col gap-4 border border-[#232628] p-4">
      <Shimmer className="aspect-[4/3] w-full" />
      <Shimmer className="h-4 w-1/2" />
      <Shimmer className="h-3 w-1/3" />
      <Shimmer className="h-3 w-1/4" />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0B0D0E]">
      <div className="flex flex-col items-center gap-4">
        <span className="text-xs uppercase tracking-[0.4em] text-[#C8A45D]">I Construction</span>
        <div className="h-px w-32 overflow-hidden bg-[#232628]">
          <div className="h-full w-1/3 animate-[loaderbar_1.1s_ease-in-out_infinite] bg-[#C8A45D]" />
        </div>
        <style>{`@keyframes loaderbar { 0% { transform: translateX(-100%);} 50% { transform: translateX(150%);} 100% { transform: translateX(300%);} }`}</style>
      </div>
    </div>
  );
}
