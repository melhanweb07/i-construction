import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import EmptyState from "@/components/ui/EmptyState";
import CTASection from "@/components/ui/CTASection";
import { getSoldProperties } from "@/lib/api";

export const metadata: Metadata = {
  title: "Previously Sold",
  description: "A record of previously sold plots and properties by I Real Estate.",
};

export default async function SoldPropertiesPage() {
  const sold = await getSoldProperties();

  return (
    <>
      <Hero
        eyebrow="Track Record"
        headingLines={["Previously", "Sold."]}
        description="A record of successfully closed transactions across our plot portfolio."
        image="https://images.pexels.com/photos/37822408/pexels-photo-37822408.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        minHeight="min-h-[55vh]"
      />

      <section className="bg-[#0B0D0E] py-20 md:py-28">
        <div className="container-fluid">
          <SectionHeading eyebrow="Sold" title="Closed transactions" light />

          {sold.length === 0 ? (
            <div className="mt-14">
              <EmptyState title="No Sold Properties Yet" description="Check back soon for updates on closed transactions." />
            </div>
          ) : (
            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sold.map((property) => (
                <div key={property.id} className="group relative overflow-hidden border border-[#232628] bg-[#121415]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={property.images[0]}
                      alt={property.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover grayscale-[0.5]"
                    />
                    <div className="absolute inset-0 bg-[#0B0D0E]/30" />
                    <span className="absolute right-4 top-4 rotate-3 border border-[#F4F1EA] bg-[#F4F1EA] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B0D0E]">
                      Sold
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5A5A0]">{property.location}</p>
                    <h3 className="mt-1.5 text-lg font-semibold text-[#F4F1EA]">
                      {property.projectName ?? property.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#A5A5A0]">{property.size}</p>
                    {property.soldDate && (
                      <p className="mt-3 border-t border-[#1c1e1f] pt-3 text-[10px] uppercase tracking-[0.15em] text-[#596B5A]">
                        Sold{" "}
                        {new Date(property.soldDate).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Interested In Similar Plots?"
        title="Explore what's currently available."
        actions={[{ label: "View Available Plots", href: "/real-estate/plots" }]}
      />
    </>
  );
}
