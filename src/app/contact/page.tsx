import type { Metadata } from "next";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import ConstructionEnquiryForm from "@/components/forms/ConstructionEnquiryForm";
import RealEstateEnquiryForm from "@/components/forms/RealEstateEnquiryForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Contact I Construction for construction projects, property enquiries and real-estate opportunities.",
};

type ContactPageProps = {
  searchParams: Promise<{ type?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const enquiryType = params.type === "real-estate" ? "real-estate" : "construction";
  const isRealEstate = enquiryType === "real-estate";

  return (
    <>
      <section className="relative overflow-hidden bg-[#0B0D0E] pb-20 pt-32 md:pb-28 md:pt-44">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-0 h-full w-1/2 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(120deg, transparent 0 48%, #C8A45D 48.2% 48.4%, transparent 48.6%), linear-gradient(120deg, transparent 0 64%, #F4F1EA 64.2% 64.35%, transparent 64.5%)",
            backgroundSize: "180px 180px",
          }}
        />
        <div className="container-fluid relative">
          <div className="max-w-3xl">
            <span className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-[#C8A45D]">
              <span className="h-px w-8 bg-[#C8A45D]" />
              Start a conversation
            </span>
            <h1 className="max-w-2xl text-[clamp(2.7rem,7vw,5.6rem)] font-semibold uppercase leading-[1.02] tracking-tight text-[#F4F1EA]">
              Let&apos;s make the next move.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[#A5A5A0] md:text-lg">
              Tell us what you&apos;re planning. Whether it&apos;s a new build, a renovation
              or the right plot of land, our team will help you find a clear way forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#101213] py-16 md:py-24">
        <div className="container-fluid grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <aside>
            <SectionHeading
              index="01 / 02"
              eyebrow="Talk To Us"
              title="The right project starts with a good brief."
              description="Share as much or as little as you know. We will follow up with the right questions and the right team."
              light
            />

            <div className="mt-12 border-t border-[#F4F1EA]/15 pt-6">
              <ul className="flex flex-col gap-5 text-sm text-[#A5A5A0]">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-[#C8A45D]" aria-hidden />
                  <a href={`tel:${company.phone}`} className="transition-colors hover:text-[#F4F1EA]">
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-[#C8A45D]" aria-hidden />
                  <a href={`mailto:${company.email}`} className="transition-colors hover:text-[#F4F1EA]">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#C8A45D]" aria-hidden />
                  <span>{company.location}</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 border-l border-[#C8A45D] pl-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C8A45D]">Office hours</p>
              <p className="mt-3 text-sm leading-relaxed text-[#A5A5A0]">
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </aside>

          <div id="enquiry" className="scroll-mt-28 border border-[#232628] bg-[#121415] p-6 md:p-10">
            <div className="flex flex-col gap-6 border-b border-[#F4F1EA]/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#C8A45D]">02 / 02</span>
                <h2 className="mt-3 text-2xl font-semibold text-[#F4F1EA] md:text-3xl">Send an enquiry</h2>
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-[#6b6b67]">Required fields marked *</span>
            </div>

            <nav className="mt-8 grid grid-cols-2 border border-[#F4F1EA]/15" aria-label="Enquiry type">
              <a
                href="/contact?type=construction#enquiry"
                className={`flex items-center justify-between px-4 py-4 text-xs font-medium uppercase tracking-[0.12em] transition-colors md:px-6 ${
                  !isRealEstate ? "bg-[#C8A45D] text-[#0B0D0E]" : "text-[#A5A5A0] hover:text-[#F4F1EA]"
                }`}
              >
                Construction
                {!isRealEstate && <ArrowUpRight className="size-4" aria-hidden />}
              </a>
              <a
                href="/contact?type=real-estate#enquiry"
                className={`flex items-center justify-between border-l border-[#F4F1EA]/15 px-4 py-4 text-xs font-medium uppercase tracking-[0.12em] transition-colors md:px-6 ${
                  isRealEstate ? "bg-[#C8A45D] text-[#0B0D0E]" : "text-[#A5A5A0] hover:text-[#F4F1EA]"
                }`}
              >
                Real Estate
                {isRealEstate && <ArrowUpRight className="size-4" aria-hidden />}
              </a>
            </nav>

            <div className="mt-8">
              {isRealEstate ? <RealEstateEnquiryForm /> : <ConstructionEnquiryForm />}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EA] py-16 text-[#0B0D0E] md:py-20">
        <div className="container-fluid flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">Prefer a direct conversation?</p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">We&apos;re one call away.</h2>
          </div>
          <a
            href={`tel:${company.phone}`}
            className="inline-flex w-fit items-center gap-3 border border-[#0B0D0E]/20 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:border-[#C8A45D] hover:text-[#8f6d2c]"
          >
            Call {company.phone}
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </section>
    </>
  );
}