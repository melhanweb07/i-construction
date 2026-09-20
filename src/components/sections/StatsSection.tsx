import StatCounter from "@/components/ui/StatCounter";
import type { CompanyStat } from "@/types";

export default function StatsSection({ stats }: { stats: CompanyStat[] }) {
  const availableStats = stats.filter((stat) => stat.value !== null);

  if (availableStats.length === 0) {
    return (
      <section className="border-y border-[#1c1e1f] bg-[#101213] py-16 md:py-20">
        <div className="container-fluid">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-[#A5A5A0]">
            Verified company metrics will appear here when confirmed.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-[#1c1e1f] bg-[#101213] py-16 md:py-20">
      <div className="container-fluid grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
        {availableStats.map((stat) => (
          <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
