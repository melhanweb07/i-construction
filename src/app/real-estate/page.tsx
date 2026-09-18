import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyCard from "@/components/cards/PropertyCard";
import CTASection from "@/components/ui/CTASection";
import { getAvailableProperties, getSoldProperties } from "@/lib/api";

export const metadata: Metadata = {
  title: "I Real Estate",
  description: "Explore curated plots and land opportunities from I Real Estate.",
};

export default async function RealEstatePage() {
  const [available, sold] = await Promise.all([getAvailableProperties(), getSoldProperties()]);

  return (
    <>
      <Hero
        eyebrow="I Real Estate"
        headingLines={["Find The Right", "Plot For Your", "Future."]}
        description="Curated residential, farmland and commercial plots — verified documentation, transparent pricing."
        image="https://images.pexels.com/photos/36422828/pexels-photo-36422828.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        actions={[{ label: "View Available Plots", href: "/real-estate/plots" }]}
      />

      <section className="bg-[#0B0D0E] py-24 md:py-32">
        <div className="container-fluid">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading index="01 / 02" eyebrow="Available Now" title="A selection of listed plots." light />
            <Link href="/real-estate/plots" className="text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]">
              View All Plots
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {available.slice(0, 6).map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101213] py-24 md:py-32">
        <div className="container-fluid">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading index="02 / 02" eyebrow="Track Record" title="Previously sold — trusted transactions." light />
            <Link href="/real-estate/sold" className="text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]">
              View Sold Properties
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sold.slice(0, 3).map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Talk To Us"
        title="Looking for a plot that fits your plan?"
        actions={[{ label: "Real Estate Enquiry", href: "/contact?type=real-estate" }]}
      />
    </>
  );
}
