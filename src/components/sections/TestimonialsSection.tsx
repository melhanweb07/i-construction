import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/cards/TestimonialCard";
import type { Testimonial } from "@/types";

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-[#0B0D0E] py-24 md:py-32">
      <div className="container-fluid">
        <SectionHeading align="center" eyebrow="Client Voices" title="Client confidence built through consistent delivery." light className="mx-auto" />

        {testimonials.length === 0 ? (
          <div className="mt-14 rounded-[12px] border border-[#F4F1EA]/10 bg-[#101213] p-8 text-center text-sm uppercase tracking-[0.2em] text-[#A5A5A0]">
            Testimonials will be published here once verified client feedback is available.
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
