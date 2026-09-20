export type AdminStatus = "draft" | "published" | "scheduled" | "active" | "inactive" | "new" | "contacted" | "follow-up" | "converted" | "closed" | "available" | "sold";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Renovation"
  | "Interior";

export type ProjectStatus = "Ongoing" | "Completed" | "Draft";
export type PropertyStatus = "available" | "sold";
export type EnquiryStatus = "new" | "contacted" | "follow-up" | "converted" | "closed";
export type EnquiryType = "construction" | "real-estate";

export interface AdminService {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  process: string[];
  ctaText: string;
  displayOrder: number;
  status: "active" | "inactive";
  updatedAt: string;
}

export interface AdminProjectUpdate {
  id: string;
  title: string;
  description: string;
  date: string;
  progress: number;
  image?: string;
}

export interface AdminProject {
  id: string;
  name: string;
  slug: string;
  location: string;
  projectType: string;
  category: ProjectCategory;
  startDate: string;
  completionDate: string;
  status: ProjectStatus;
  progress: number;
  description: string;
  specifications: string[];
  highlights: string[];
  mainImage: string;
  gallery: string[];
  videos: string[];
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  updates: AdminProjectUpdate[];
  updatedAt: string;
}

export interface AdminProperty {
  id: string;
  name: string;
  slug: string;
  plotNumber: string;
  location: string;
  size: string;
  dimensions: string;
  price: number;
  priceLabel: string;
  availability: PropertyStatus;
  description: string;
  nearbyLocations: string[];
  roadAccess: string;
  amenities: string[];
  mainImage: string;
  gallery: string[];
  video?: string;
  soldDate?: string;
  updatedAt: string;
}

export interface AdminBlog {
  id: string;
  title: string;
  slug: string;
  category: string;
  tags: string[];
  author: string;
  coverImage: string;
  content: string;
  videoUrl?: string;
  publishedAt: string;
  status: "draft" | "published" | "scheduled";
  featured: boolean;
  updatedAt: string;
}

export interface AdminTestimonial {
  id: string;
  customerName: string;
  review: string;
  photo: string;
  project: string;
  rating: number;
  status: "active" | "inactive";
  updatedAt: string;
}

export interface AdminEnquiryBase {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  date: string;
  status: EnquiryStatus;
  notes?: string;
}

export interface AdminConstructionEnquiry extends AdminEnquiryBase {
  type: "construction";
  requirement: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
}

export interface AdminRealEstateEnquiry extends AdminEnquiryBase {
  type: "real-estate";
  preferredLocation: string;
  requiredPlotSize: string;
  budget: string;
  purpose: string;
  preferredContactMethod: "Call" | "WhatsApp" | "Email";
  message: string;
}

export type AdminEnquiry = AdminConstructionEnquiry | AdminRealEstateEnquiry;

export interface AdminMediaItem {
  id: string;
  name: string;
  type: "image" | "video" | "document";
  url: string;
  date: string;
  usedIn: string;
}

export interface AdminChatbotItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  status: "enabled" | "disabled";
  updatedAt: string;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Admin" | "Editor" | "Viewer";
  status: "active" | "inactive";
  lastLogin: string;
}

export interface AdminContent {
  companyName: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  areasOfOperation: string[];
  socialLinks: { instagram: string; facebook: string; linkedin: string; youtube: string };
  logo: string;
  favicon: string;
  homepageHeroTitle: string;
  homepageHeroDescription: string;
  homepageHeroImage: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  aboutHeading: string;
  aboutDescription: string;
  featuredProjects: string[];
  featuredServices: string[];
  footerCtaTitle: string;
  footerCtaDescription: string;
  footerCtaButton: string;
}

export interface AdminFaq {
  id: string;
  question: string;
  answer: string;
  category: string;
  status: "active" | "inactive";
  order: number;
}

export interface AdminDashboardStat {
  id: string;
  label: string;
  value: string;
  tone?: "default" | "success" | "warning";
}

export interface AdminNotification {
  id: string;
  title: string;
  detail: string;
  time: string;
  unread: boolean;
}

export interface AdminSettings {
  darkMode: boolean;
  compactSidebar: boolean;
  notifications: boolean;
  websiteName: string;
  contactEmail: string;
}

export interface AdminDashboardMetrics {
  totalProjects: number;
  completedProjects: number;
  ongoingProjects: number;
  totalProperties: number;
  availablePlots: number;
  soldPlots: number;
  blogPosts: number;
  newEnquiries: number;
}

export interface AdminActivity {
  id: string;
  title: string;
  detail: string;
  time: string;
}
