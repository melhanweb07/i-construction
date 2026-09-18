import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, PhoneCall, MapPin, Check } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import PropertyGallery from "@/components/properties/PropertyGallery";
import RealEstateEnquiryForm from "@/components/forms/RealEstateEnquiryForm";
import { getPropertyBySlug, getProperties } from "@/lib/api";
import { company } from "@/data/company";

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };
  return { title: property.name, description: property.description };
}

const availabilityTone = { available: "green", limited: "gold", sold: "sold" } as const;
const availabilityLabel = { available: "Available", limited: "Limited", sold: "Sold" } as const;

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);
  if (!property) notFound();

  const isSold = property.availability === "sold";
  const whatsappHref = `https://wa.me/${company.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Hi, I'm interested in ${property.name} (${property.plotNumber}).`,
  )}`;

  const plotInfo = [
    { label: "Plot Number", value: property.plotNumber },
    { label: "Plot Size", value: property.size },
    { label: "Dimensions", value: property.dimensions },
    { label: "Price", value: property.priceLabel },
    { label: "Availability", value: availabilityLabel[property.availability] },
  ];

  return (
    <>
      <section className="bg-[#0B0D0E] pb-8 pt-32 md:pt-40">
        <div className="container-fluid">
          <Badge tone={availabilityTone[property.availability]}>{availabilityLabel[property.availability]}</Badge>
          <h1 className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-[1.05] tracking-tight text-[#F4F1EA]">
            {property.name}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-[#A5A5A0]">
            <MapPin className="size-4" aria-hidden />
            {property.location}
          </p>
        </div>
      </section>

      <section className="bg-[#0B0D0E] pb-16">
        <div className="container-fluid">
          <PropertyGallery images={property.images} alt={property.name} />
        </div>
      </section>

      <section className="bg-[#0B0D0E] pb-24">
        <div className="container-fluid grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Details" title="Plot Information" light />
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
              {plotInfo.map((info) => (
                <div key={info.label} className="border-b border-[#1c1e1f] pb-4">
                  <dt className="text-[10px] uppercase tracking-[0.15em] text-[#A5A5A0]">{info.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-[#F4F1EA]">{info.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-14">
              <SectionHeading eyebrow="Overview" title="Description" light />
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#A5A5A0]">{property.description}</p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">Nearby Locations</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {property.nearbyLocations.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-sm text-[#A5A5A0]">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#596B5A]" aria-hidden /> {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">Amenities</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {property.amenities.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-[#A5A5A0]">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-[#596B5A]" aria-hidden /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">Road Access</h3>
              <p className="mt-4 text-sm text-[#A5A5A0]">{property.roadAccess}</p>
            </div>

            <div className="mt-14">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">Map</h3>
              <div className="mt-4 flex aspect-[16/7] items-center justify-center border border-dashed border-[#2a2d2e] bg-[#101213] text-xs uppercase tracking-[0.15em] text-[#596B5A]">
                Map placeholder — {property.location}
              </div>
            </div>

            <div className="mt-14">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">Video</h3>
              <div className="mt-4 flex aspect-video items-center justify-center border border-dashed border-[#2a2d2e] bg-[#101213] text-xs uppercase tracking-[0.15em] text-[#596B5A]">
                Video walkthrough placeholder
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 border border-[#232628] bg-[#121415] p-8">
              <p className="text-2xl font-semibold text-[#F4F1EA]">{property.priceLabel}</p>
              {!isSold ? (
                <>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <a href={`tel:${company.phone}`} className="flex flex-col items-center gap-1.5 border border-[#F4F1EA]/15 py-3 text-[10px] uppercase tracking-[0.1em] text-[#F4F1EA] transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]">
                      <Phone className="size-4" aria-hidden /> Call
                    </a>
                    <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 border border-[#F4F1EA]/15 py-3 text-[10px] uppercase tracking-[0.1em] text-[#F4F1EA] transition-colors hover:border-[#596B5A] hover:text-[#8ea28f]">
                      <MessageCircle className="size-4" aria-hidden /> WhatsApp
                    </a>
                    <a href="#enquire" className="flex flex-col items-center gap-1.5 border border-[#F4F1EA]/15 py-3 text-[10px] uppercase tracking-[0.1em] text-[#F4F1EA] transition-colors hover:border-[#C8A45D] hover:text-[#C8A45D]">
                      <PhoneCall className="size-4" aria-hidden /> Callback
                    </a>
                  </div>
                  <div id="enquire" className="mt-8 scroll-mt-28 border-t border-[#1c1e1f] pt-8">
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">Enquire Now</h3>
                    <div className="mt-6">
                      <RealEstateEnquiryForm plotSlug={property.name} />
                    </div>
                  </div>
                </>
              ) : (
                <p className="mt-4 text-sm text-[#A5A5A0]">
                  This plot has been sold{property.soldDate ? ` on ${new Date(property.soldDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}` : ""}. Browse other available plots for similar opportunities.
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
