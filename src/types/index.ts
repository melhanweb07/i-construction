export type Division = "construction" | "real-estate";

export interface CompanyStat {
  id: string;
  value: number | null;
  suffix?: string;
  label: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  location: string;
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
}

export interface Service {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Renovation"
  | "Interior";

export type ProjectStatus = "ongoing" | "completed";

export interface ProjectUpdate {
  id: string;
  index: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  status: ProjectStatus;
  progress: number;
  area: string;
  description: string;
  highlights: string[];
  startDate: string;
  completionDate: string;
  heroImage: string;
  gallery: string[];
  journey: { stage: string; image: string }[];
  updates: ProjectUpdate[];
  size: "large" | "small";
}

export type PlotAvailability = "available" | "limited" | "sold";

export interface Property {
  id: string;
  slug: string;
  name: string;
  plotNumber: string;
  location: string;
  size: string;
  dimensions: string;
  price: number;
  priceLabel: string;
  availability: PlotAvailability;
  description: string;
  nearbyLocations: string[];
  roadAccess: string;
  amenities: string[];
  images: string[];
  soldDate?: string;
  projectName?: string;
}

export type BlogCategory =
  | "Articles"
  | "Project Updates"
  | "Videos"
  | "Announcements";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: BlogCategory;
  date: string;
  author: string;
  coverImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

export interface ConstructionEnquiry {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  constructionType?: string;
  propertyUse?: "Residential" | "Commercial";
  landSize?: string;
  constructionArea?: string;
  budget?: string;
  expectedStartDate?: string;
  projectLocation?: string;
  additionalRequirements?: string;
  message?: string;
}

export interface RealEstateEnquiry {
  name: string;
  phone: string;
  email?: string;
  preferredLocation?: string;
  requiredPlotSize?: string;
  budget?: string;
  purpose?: string;
  preferredContactMethod?: "Call" | "WhatsApp" | "Email";
  message?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface EnquirySubmissionResult {
  success: boolean;
  message: string;
  referenceId?: string;
}
