import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import PropertiesExplorer from "@/components/properties/PropertiesExplorer";
import { getAvailableProperties } from "@/lib/api";

export const metadata: Metadata = {
  title: "Available Plots",
  description: "Browse available and limited-availability plots by location, size, price and availability.",
};

export default async function AvailablePlotsPage() {
  const properties = await getAvailableProperties();

  return (
    <>
      <Hero
        eyebrow="I Real Estate"
        headingLines={["Available", "Plots."]}
        description="Filter by location, size, price and availability to find the right plot."
        image="https://images.pexels.com/photos/34677187/pexels-photo-34677187.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        minHeight="min-h-[55vh]"
      />

      <section className="bg-[#0B0D0E] py-20 md:py-28">
        <div className="container-fluid">
          <PropertiesExplorer properties={properties} />
        </div>
      </section>
    </>
  );
}
