import Hero from "@/components/hero/Hero";
import CompanyIntroSection from "@/components/sections/CompanyIntroSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ConstructionProcessSection from "@/components/sections/ConstructionProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import OngoingProjectsSection from "@/components/sections/OngoingProjectsSection";
import RealEstateHighlightSection from "@/components/sections/RealEstateHighlightSection";
import MediaSection from "@/components/sections/MediaSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/ui/CTASection";
import {
  getCompanyStats,
  getServices,
  getFeaturedProjects,
  getOngoingProjects,
  getAvailableProperties,
  getBlogs,
  getTestimonials,
} from "@/lib/api";
import { heroInfoStrip } from "@/data/company";

export default async function HomePage() {
  const [stats, services, featuredProjects, ongoingProjects, properties, blogs, testimonials] =
    await Promise.all([
      getCompanyStats(),
      getServices(),
      getFeaturedProjects(),
      getOngoingProjects(),
      getAvailableProperties(),
      getBlogs(),
      getTestimonials(),
    ]);

  return (
    <>
      <Hero
        eyebrow="I CONSTRUCTION"
        headingLines={["Precision-built spaces.", "Designed to last."]}
        description="Construction and real-estate solutions shaped by disciplined planning, honest communication and enduring quality."
        image="https://images.pexels.com/photos/17638341/pexels-photo-17638341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        actions={[
          { label: "Book a Consultation", href: "/contact" },
          { label: "View Projects", href: "/construction/projects", variant: "outline" },
        ]}
        infoItems={heroInfoStrip}
      />

      <CompanyIntroSection />
      <StatsSection stats={stats} />
      <WhyChooseUsSection />
      <ConstructionProcessSection />
      <ServicesSection services={services} />
      <FeaturedProjectsSection projects={featuredProjects} />
      <OngoingProjectsSection projects={ongoingProjects} />
      <RealEstateHighlightSection properties={properties.slice(0, 3)} />
      <MediaSection posts={blogs.slice(0, 3)} />
      <TestimonialsSection testimonials={testimonials} />

      <CTASection
        eyebrow="Start Your Project"
        title="Let’s discuss your next move."
        description="Whether it’s a new build, renovation or a carefully chosen plot, we’ll help you move forward with clarity."
        actions={[
          { label: "Construction Enquiry", href: "/contact?type=construction" },
          { label: "Real Estate Enquiry", href: "/contact?type=real-estate", variant: "outline" },
        ]}
      />
    </>
  );
}
