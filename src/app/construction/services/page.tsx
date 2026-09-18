import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/hero/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import { getServices } from "@/lib/api";

export const metadata: Metadata = {
  title: "Services",
  description: "Residential, commercial, renovation, interior, turnkey and civil construction services.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <Hero
        eyebrow="Our Capabilities"
        headingLines={["What We Build."]}
        description="Six core service lines covering the full lifecycle of a construction project."
        image="https://images.pexels.com/photos/35300835/pexels-photo-35300835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        minHeight="min-h-[60vh]"
      />

      <section className="bg-[#0B0D0E] py-20 md:py-28">
        <div className="container-fluid flex flex-col gap-24 md:gap-32">
          {services.map((service, i) => (
            <div
              id={service.slug}
              key={service.id}
              className="scroll-mt-28 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-[#17191a] lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="lg:col-span-6">
                <SectionHeading index={service.number} eyebrow="Service" title={service.title} light />
                <p className="mt-6 max-w-lg text-base leading-relaxed text-[#A5A5A0]">{service.longDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Ready When You Are"
        title="Tell us about your project requirements."
        actions={[{ label: "Construction Enquiry", href: "/contact?type=construction" }]}
      />
    </>
  );
}
