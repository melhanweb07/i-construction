import StatCounter from "@/components/ui/StatCounter";
import type { CompanyStat } from "@/types";

export default function StatsSection({ stats }: { stats: CompanyStat[] }) {
  return (
    <section className="border-y border-[#1c1e1f] bg-[#101213] py-16 md:py-20">
      <div className="container-fluid grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
        {stats.map((stat) => (
          <StatCounter key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
