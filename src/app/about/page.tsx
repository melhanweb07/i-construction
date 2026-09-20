import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Hero from "@/components/hero/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import CTASection from "@/components/ui/CTASection";
import {
  company,
  companyStats,
  coreValues,
  missionVision,
  timeline,
  whyChooseUs,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about I Construction, a construction and real-estate group built on precision, transparency and long-term value.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About I Construction"
        headingLines={["Built on trust.", "Driven by detail."]}
        description={company.description}
        image="https://images.pexels.com/photos/37687676/pexels-photo-37687676.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        actions={[
          { label: "Our Services", href: "/construction/services" },
          { label: "Start a Conversation", href: "/contact", variant: "outline" },
        ]}
        infoItems={[
          { label: "Core divisions", value: "Construction + Real Estate" },
          { label: "Project focus", value: "Residential • Commercial" },
          { label: "Delivery style", value: "Transparent" },
          { label: "Based in", value: "Vellore" },
        ]}
        minHeight="min-h-[82vh]"
      />

      <section className="bg-[#101213] py-20 md:py-28">
        <div className="container-fluid grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-8">
          {companyStats.map((stat) => (
            <StatCounter key={stat.id} {...stat} />
          ))}
        </div>
      </section>

      <section className="bg-[#F4F1EA] py-24 text-[#0B0D0E] md:py-32">
        <div className="container-fluid grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#202324]">
            <Image
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1000"
              alt="Modern building exterior"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E]/50 to-transparent" />
            <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.25em] text-[#F4F1EA]">
              Build · Design · Invest
            </span>
          </div>
          <div>
            <SectionHeading
              index="01 / 05"
              eyebrow="Who We Are"
              title="A connected group with one standard."
            />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#4a4a47]">
              We bring construction and real estate together to make the journey from
              land to lasting space clearer, more considered and more dependable.
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-[#6b6b65]">
              From the first conversation to the final handover, our work is shaped by
              careful planning, transparent communication and respect for the details
              that make a project endure.
            </p>
            <Link
              href="/real-estate"
              className="group mt-9 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-[#0B0D0E]"
            >
              Explore I Real Estate
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0D0E] py-24 md:py-32">
        <div className="container-fluid">
          <SectionHeading
            index="02 / 05"
            eyebrow="Our Direction"
            title="The work is bigger than the build."
            description="Every decision is measured against the value it creates for clients, communities and the years ahead."
            light
          />
          <div className="mt-14 grid gap-px bg-[#F4F1EA]/10 md:grid-cols-2">
            <article className="bg-[#0B0D0E] p-8 md:p-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D]">Our Mission</span>
              <p className="mt-7 max-w-lg text-2xl leading-snug text-[#F4F1EA] md:text-3xl">
                {missionVision.mission}
              </p>
            </article>
            <article className="bg-[#0B0D0E] p-8 md:p-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D]">Our Vision</span>
              <p className="mt-7 max-w-lg text-2xl leading-snug text-[#F4F1EA] md:text-3xl">
                {missionVision.vision}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#17191A] py-24 md:py-32">
        <div className="container-fluid grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <SectionHeading
            index="03 / 05"
            eyebrow="What Guides Us"
            title="Values you can see in the work."
            description="The principles behind how we plan, build and stay accountable."
            light
          />
          <div className="grid gap-px bg-[#F4F1EA]/10 sm:grid-cols-2">
            {coreValues.map((value, index) => (
              <article key={value.title} className="bg-[#17191A] p-7 md:p-9">
                <span className="text-xs text-[#C8A45D]">0{index + 1}</span>
                <h3 className="mt-12 text-xl font-semibold text-[#F4F1EA]">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A5A5A0]">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EA] py-24 text-[#0B0D0E] md:py-32">
        <div className="container-fluid">
          <SectionHeading
            index="04 / 05"
            eyebrow="Our Journey"
            title="Growing with intention."
            description="A steady expansion of capability, shaped by the trust of the people we build for."
          />
          <div className="mt-14 border-t border-[#0B0D0E]/15">
            {timeline.map((item) => (
              <article key={item.title} className="grid gap-4 border-b border-[#0B0D0E]/15 py-7 md:grid-cols-[180px_1fr_2fr] md:gap-8">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">{item.year}</span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-[#5d5d58]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101213] py-24 md:py-32">
        <div className="container-fluid">
          <SectionHeading
            index="05 / 05"
            eyebrow="Why I Construction"
            title="Confidence, built into the process."
            light
          />
          <div className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason) => (
              <article key={reason.title} className="border-t border-[#F4F1EA]/15 pt-5">
                <Check className="size-5 text-[#C8A45D]" aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-[#F4F1EA]">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A5A5A0]">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work With Us"
        title="Let’s build something with staying power."
        description="Tell us what you are planning, and we’ll help you find the right next step."
        actions={[{ label: "Start an Enquiry", href: "/contact" }]}
      />
    </>
  );
}