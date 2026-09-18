import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import type { Service } from "@/types";
import { ArrowRight } from "lucide-react";

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="bg-[#0B0D0E] py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading index="02 / 06" eyebrow="What We Build" title="Capability across every build type." light />
          <Link
            href="/construction/services"
            className="group inline-flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]"
          >
            All Services
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.id} className={i === 0 ? "sm:col-span-2" : ""}>
              <ServiceCard service={service} large={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
