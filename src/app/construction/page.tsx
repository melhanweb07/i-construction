import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/hero/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import ProjectCard from "@/components/cards/ProjectCard";
import CTASection from "@/components/ui/CTASection";
import { getServices, getFeaturedProjects, getOngoingProjects } from "@/lib/api";

export const metadata: Metadata = {
  title: "Construction",
  description: "Residential, commercial and industrial construction delivered with engineering precision.",
};

export default async function ConstructionPage() {
  const [services, featured, ongoing] = await Promise.all([
    getServices(),
    getFeaturedProjects(),
    getOngoingProjects(),
  ]);

  return (
    <>
      <Hero
        eyebrow="I Construction"
        headingLines={["Engineering", "Built Environments."]}
        description="From foundation to finish — residential, commercial and industrial construction delivered with engineering discipline."
        image="https://images.pexels.com/photos/37687676/pexels-photo-37687676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        actions={[
          { label: "View Services", href: "/construction/services" },
          { label: "View Projects", href: "/construction/projects", variant: "outline" },
        ]}
        minHeight="min-h-[75vh]"
      />

      <section className="bg-[#0B0D0E] py-24 md:py-32">
        <div className="container-fluid">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading index="01 / 03" eyebrow="What We Build" title="Six core service lines." light />
            <Link href="/construction/services" className="group inline-flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]">
              All Services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101213] py-24 md:py-32">
        <div className="container-fluid">
          <SectionHeading index="02 / 03" eyebrow="Portfolio" title="A selection of completed work." light />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {featured.map((p, i) => (
              <div key={p.id} className={i === 0 ? "md:col-span-2" : ""}>
                <ProjectCard project={p} large={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0D0E] py-24 md:py-32">
        <div className="container-fluid">
          <SectionHeading index="03 / 03" eyebrow="In Progress" title={`${ongoing.length} projects currently under construction.`} light />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ongoing.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/construction/projects" className="text-xs font-medium uppercase tracking-[0.15em] text-[#A5A5A0] underline decoration-[#C8A45D]/50 underline-offset-8 transition-colors hover:text-[#F4F1EA]">
              View full portfolio
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get Started"
        title="Have a construction project in mind?"
        actions={[{ label: "Construction Enquiry", href: "/contact?type=construction" }]}
      />
    </>
  );
}
