import { adminBlogs } from "@/data/mock/blogs";
import { adminConstructionEnquiries, adminRealEstateEnquiries } from "@/data/mock/enquiries";
import { adminContent, adminFaqs, adminMetrics, adminSettings } from "@/data/mock/content";
import { adminChatbotKnowledge } from "@/data/mock/chatbot";
import { adminProjects } from "@/data/mock/projects";
import { adminProperties } from "@/data/mock/properties";
import { adminServices } from "@/data/mock/services";
import { adminTestimonials } from "@/data/mock/testimonials";
import { adminUsers } from "@/data/mock/users";
import { readStorage, writeStorage } from "@/lib/storage";
import type { AdminBlog, AdminChatbotItem, AdminContent, AdminFaq, AdminProject, AdminProperty, AdminService, AdminSettings, AdminTestimonial, AdminUser, AdminEnquiry, AdminDashboardMetrics } from "@/types/admin";

export const ADMIN_STORAGE_KEYS = {
  projects: "iconstruction_projects",
  properties: "iconstruction_properties",
  services: "iconstruction_services",
  blogs: "iconstruction_blogs",
  testimonials: "iconstruction_testimonials",
  enquiries: "iconstruction_enquiries",
  content: "iconstruction_content",
  chatbot: "iconstruction_chatbot",
  users: "iconstruction_users",
  settings: "iconstruction_settings",
};

function hydrate<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return readStorage<T>(key, fallback);
}

export function getAdminServices(): AdminService[] {
  return hydrate(ADMIN_STORAGE_KEYS.services, adminServices);
}

export function saveAdminServices(items: AdminService[]) {
  writeStorage(ADMIN_STORAGE_KEYS.services, items);
}

export function getAdminProjects(): AdminProject[] {
  return hydrate(ADMIN_STORAGE_KEYS.projects, adminProjects);
}

export function saveAdminProjects(items: AdminProject[]) {
  writeStorage(ADMIN_STORAGE_KEYS.projects, items);
}

export function getAdminProperties(): AdminProperty[] {
  return hydrate(ADMIN_STORAGE_KEYS.properties, adminProperties);
}

export function saveAdminProperties(items: AdminProperty[]) {
  writeStorage(ADMIN_STORAGE_KEYS.properties, items);
}

export function getAdminBlogs(): AdminBlog[] {
  return hydrate(ADMIN_STORAGE_KEYS.blogs, adminBlogs);
}

export function saveAdminBlogs(items: AdminBlog[]) {
  writeStorage(ADMIN_STORAGE_KEYS.blogs, items);
}

export function getAdminTestimonials(): AdminTestimonial[] {
  return hydrate(ADMIN_STORAGE_KEYS.testimonials, adminTestimonials);
}

export function saveAdminTestimonials(items: AdminTestimonial[]) {
  writeStorage(ADMIN_STORAGE_KEYS.testimonials, items);
}

export function getAdminEnquiries(): AdminEnquiry[] {
  return hydrate(ADMIN_STORAGE_KEYS.enquiries, [
    ...adminConstructionEnquiries,
    ...adminRealEstateEnquiries,
  ] as AdminEnquiry[]);
}

export function saveAdminEnquiries(items: AdminEnquiry[]) {
  writeStorage(ADMIN_STORAGE_KEYS.enquiries, items);
}

export function getAdminContent(): AdminContent {
  return hydrate(ADMIN_STORAGE_KEYS.content, adminContent);
}

export function saveAdminContent(item: AdminContent) {
  writeStorage(ADMIN_STORAGE_KEYS.content, item);
}

export function getAdminFaqs(): AdminFaq[] {
  return hydrate("iconstruction_faqs", adminFaqs);
}

export function saveAdminFaqs(items: AdminFaq[]) {
  writeStorage("iconstruction_faqs", items);
}

export function getAdminChatbotKnowledge(): AdminChatbotItem[] {
  return hydrate(ADMIN_STORAGE_KEYS.chatbot, adminChatbotKnowledge);
}

export function saveAdminChatbotKnowledge(items: AdminChatbotItem[]) {
  writeStorage(ADMIN_STORAGE_KEYS.chatbot, items);
}

export function getAdminUsers(): AdminUser[] {
  return hydrate(ADMIN_STORAGE_KEYS.users, adminUsers);
}

export function saveAdminUsers(items: AdminUser[]) {
  writeStorage(ADMIN_STORAGE_KEYS.users, items);
}

export function getAdminSettings(): AdminSettings {
  return hydrate(ADMIN_STORAGE_KEYS.settings, adminSettings);
}

export function saveAdminSettings(settings: AdminSettings) {
  writeStorage(ADMIN_STORAGE_KEYS.settings, settings);
}

export function getAdminDashboardMetrics(): AdminDashboardMetrics {
  return adminMetrics;
}

export function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
