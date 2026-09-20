import type { CompanyInfo, CompanyStat } from "@/types";

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

export const companyStats: CompanyStat[] = [
  { id: "projects", value: null, label: "Projects Completed" },
  { id: "experience", value: null, label: "Years of Experience" },
  { id: "clients", value: null, label: "Happy Clients" },
  { id: "ongoing", value: null, label: "Ongoing Projects" },
];

export const heroInfoStrip = [
  { label: "Based in", value: "Vellore, Tamil Nadu" },
  { label: "Division", value: "Construction + Real Estate" },
  { label: "Focus", value: "Residential • Commercial" },
  { label: "Approach", value: "Quality Driven" },
];

export const timeline = [
  {
    year: "Established",
    title: "The foundation",
    description:
      "I Construction began with a commitment to disciplined engineering, transparent project delivery and quality-first execution across residential and commercial work.",
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
    title: "Engineering First",
    description: "Every project begins with planning, precision and structural thinking.",
  },
  {
    title: "Transparent Process",
    description: "Clear communication, documentation and project visibility at every stage.",
  },
  {
    title: "Quality Materials",
    description: "Material selection focused on durability, finish and long-term performance.",
  },
  {
    title: "Complete Accountability",
    description: "One team from planning and execution to final handover.",
  },
];

export const constructionProcessSteps = [
  { number: "01", title: "Consultation", description: "Understanding the brief, site context and design intent." },
  { number: "02", title: "Site Visit", description: "Assessing constraints, approvals and practical build considerations." },
  { number: "03", title: "Design & Estimation", description: "Developing workable scopes, budgets and technical direction." },
  { number: "04", title: "Approval", description: "Coordinating necessary clearances and stakeholder sign-off." },
  { number: "05", title: "Construction", description: "Execution with daily oversight, scheduling and quality control." },
  { number: "06", title: "Quality Check", description: "Inspection at critical milestones before final handover." },
  { number: "07", title: "Handover", description: "Final walkthrough, documentation and completion-ready delivery." },
];

export const missionVision = {
  mission:
    "To deliver construction and real-estate experiences defined by precision, transparency and long-term value — for every client, at every scale.",
  vision:
    "To be recognised as a benchmark for trustworthy, future-ready construction and property investment in the region.",
};
