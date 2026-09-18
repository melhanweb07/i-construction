import type { CompanyInfo, CompanyStat } from "@/types";

// NOTE: Placeholder company information. Replace with verified figures
// before production launch. Structured for future API integration.
export const company: CompanyInfo = {
  name: "I Construction",
  shortName: "I Construction",
  tagline: "Building with precision, delivering with purpose.",
  description:
    "I Construction is a construction and real-estate group delivering residential, commercial and industrial projects alongside curated land and plot opportunities through I Real Estate. Every project is approached with engineering discipline and architectural intent.",
  phone: "+91 90000 00000",
  email: "hello@iconstruction.in",
  location: "Vellore, Tamil Nadu, India",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

// Placeholder statistics — designed as data objects so they can later be
// sourced from an API without changing the presentation components.
export const companyStats: CompanyStat[] = [
  { id: "projects", value: 200, suffix: "+", label: "Projects Completed" },
  { id: "experience", value: 10, suffix: "+", label: "Years of Experience" },
  { id: "clients", value: 150, suffix: "+", label: "Happy Clients" },
  { id: "ongoing", value: 15, suffix: "+", label: "Ongoing Projects" },
];

export const heroInfoStrip = [
  { label: "Established", value: "Placeholder" },
  { label: "Projects", value: "200+" },
  { label: "Experience", value: "Placeholder" },
  { label: "Locations", value: "Placeholder" },
];

export const timeline = [
  {
    year: "Established",
    title: "The foundation",
    description:
      "I Construction was founded with a commitment to disciplined engineering and honest delivery. (Placeholder — replace with verified founding year.)",
  },
  {
    year: "Initial Projects",
    title: "First builds",
    description:
      "Early residential and small commercial projects established the company's reputation for quality execution.",
  },
  {
    year: "Expansion",
    title: "Growing scope",
    description:
      "The team expanded into commercial and industrial construction, broadening technical capability.",
  },
  {
    year: "Major Milestones",
    title: "I Real Estate launched",
    description:
      "The real-estate division was introduced to help clients acquire land and plots with the same trust as construction clients.",
  },
  {
    year: "Today",
    title: "A connected group",
    description:
      "I Construction and I Real Estate now operate as one group — construction, renovation, interiors and property, under a single standard of quality.",
  },
];

export const coreValues = [
  {
    title: "Integrity",
    description: "Transparent pricing, honest timelines, no shortcuts.",
  },
  {
    title: "Precision",
    description: "Every measurement, material and detail is engineered.",
  },
  {
    title: "Craftsmanship",
    description: "Skilled teams delivering finish quality that lasts.",
  },
  {
    title: "Accountability",
    description: "Clear communication from foundation to handover.",
  },
];

export const whyChooseUs = [
  {
    title: "200+ Completed Projects",
    description: "A growing portfolio across residential, commercial and industrial construction.",
  },
  {
    title: "Experienced Professionals",
    description: "Engineers, architects and site teams with hands-on execution expertise.",
  },
  {
    title: "Quality Construction",
    description: "Material-grade discipline and inspection at every stage of the build.",
  },
  {
    title: "Transparent Process",
    description: "Clear documentation, timelines and budgets shared with every client.",
  },
  {
    title: "Customer-Focused Approach",
    description: "Dedicated points of contact from enquiry through to final handover.",
  },
  {
    title: "Timely Execution",
    description: "Structured project planning to keep builds on schedule.",
  },
];

export const missionVision = {
  mission:
    "To deliver construction and real-estate experiences defined by precision, transparency and long-term value — for every client, at every scale.",
  vision:
    "To be recognised as a benchmark for trustworthy, future-ready construction and property investment in the region.",
};
