import type { AdminContent, AdminDashboardMetrics, AdminFaq, AdminSettings } from "@/types/admin";

export const adminContent: AdminContent = {
  companyName: "I Construction",
  description: "Construction and real-estate solutions shaped by disciplined planning, transparent communication and enduring quality.",
  phone: "+91 90000 00000",
  email: "hello@iconstruction.in",
  address: "Vellore, Tamil Nadu, India",
  areasOfOperation: ["Vellore", "Katpadi", "Chennai", "Ranipet"],
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  logo: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
  favicon: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200",
  homepageHeroTitle: "Precision-built spaces. Designed to last.",
  homepageHeroDescription: "Construction and real-estate solutions shaped by disciplined planning, honest communication and enduring quality.",
  homepageHeroImage: "https://images.pexels.com/photos/17638341/pexels-photo-17638341.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200",
  heroCtaPrimary: "Book a Consultation",
  heroCtaSecondary: "View Projects",
  aboutHeading: "Built on trust. Driven by detail.",
  aboutDescription: "We bring construction and property expertise together to create clearer, more dependable outcomes for you.",
  featuredProjects: ["prj-1", "prj-2"],
  featuredServices: ["svc-1", "svc-2"],
  footerCtaTitle: "Let’s discuss your next move.",
  footerCtaDescription: "Whether it’s a new build, renovation or a carefully chosen plot, we’ll help you move forward with clarity.",
  footerCtaButton: "Start an Enquiry",
};

export const adminFaqs: AdminFaq[] = [
  { id: "faq-1", question: "Do you support residential and commercial work?", answer: "Yes, we work across residential, commercial and industrial delivery models.", category: "General", status: "active", order: 1 },
  { id: "faq-2", question: "Can I enquire about plots and land?", answer: "Yes, the real-estate team handles plot and land opportunities with clear listing guidance.", category: "Real Estate", status: "active", order: 2 },
  { id: "faq-3", question: "How do project updates work?", answer: "Progress updates are shared across key construction stages and can be reviewed from the project dashboard.", category: "Projects", status: "active", order: 3 },
];

export const adminMetrics: AdminDashboardMetrics = {
  totalProjects: 200,
  completedProjects: 185,
  ongoingProjects: 15,
  totalProperties: 48,
  availablePlots: 21,
  soldPlots: 27,
  blogPosts: 24,
  newEnquiries: 18,
};

export const adminSettings: AdminSettings = {
  darkMode: true,
  compactSidebar: false,
  notifications: true,
  websiteName: "I Construction",
  contactEmail: "hello@iconstruction.in",
};
