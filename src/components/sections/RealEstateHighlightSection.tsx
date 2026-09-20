import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/cards/PropertyCard";
import Button from "@/components/ui/Button";
import type { Property } from "@/types";

export default function RealEstateHighlightSection({ properties }: { properties: Property[] }) {
  return (
    <section className="bg-[#0B0D0E] py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading index="06 — REAL ESTATE" eyebrow="I Real Estate" title="Curated land opportunities with long-term value." light />
          <Button href="/real-estate" variant="outline">
            Explore Real Estate
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/real-estate/plots"
            className="text-xs font-medium uppercase tracking-[0.15em] text-[#A5A5A0] underline decoration-[#C8A45D]/50 underline-offset-8 transition-colors hover:text-[#F4F1EA]"
          >
            View all available plots
          </Link>
        </div>
      </div>
    </section>
  );
}
