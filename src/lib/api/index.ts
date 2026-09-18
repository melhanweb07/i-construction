/**
 * Mock API layer.
 *
 * Every function here simulates an async network call and returns local
 * mock data. This is intentional: it lets the entire frontend be built
 * against a stable contract now, and later — a real Node.js/Express +
 * PostgreSQL backend can replace each function body with a `fetch()`
 * call without any UI code changes.
 */
import { company, companyStats } from "@/data/company";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { properties } from "@/data/properties";
import { blogPosts } from "@/data/blogs";
import { testimonials } from "@/data/testimonials";
import type {
  ConstructionEnquiry,
  EnquirySubmissionResult,
  RealEstateEnquiry,
} from "@/types";

const LATENCY = 0;

function delay<T>(value: T, ms = LATENCY): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

export async function getCompany() {
  return delay(company);
}

export async function getCompanyStats() {
  return delay(companyStats);
}

export async function getServices() {
  return delay(services);
}

export async function getServiceBySlug(slug: string) {
  return delay(services.find((s) => s.slug === slug) ?? null);
}

export async function getProjects() {
  return delay(projects);
}

export async function getProjectBySlug(slug: string) {
  return delay(projects.find((p) => p.slug === slug) ?? null);
}

export async function getOngoingProjects() {
  return delay(projects.filter((p) => p.status === "ongoing"));
}

export async function getFeaturedProjects() {
  return delay(projects.filter((p) => p.status === "completed").slice(0, 4));
}

export async function getProperties() {
  return delay(properties);
}

export async function getPropertyBySlug(slug: string) {
  return delay(properties.find((p) => p.slug === slug) ?? null);
}

export async function getSoldProperties() {
  return delay(properties.filter((p) => p.availability === "sold"));
}

export async function getAvailableProperties() {
  return delay(properties.filter((p) => p.availability !== "sold"));
}

export async function getBlogs() {
  return delay(blogPosts);
}

export async function getBlogBySlug(slug: string) {
  return delay(blogPosts.find((b) => b.slug === slug) ?? null);
}

export async function getTestimonials() {
  return delay(testimonials);
}

// ---------------------------------------------------------------------------
// Enquiry submission — isolated so it can be swapped for a real API call.
// Example future implementation:
//   return fetch("/api/enquiries/construction", { method: "POST", body: ... })
// ---------------------------------------------------------------------------
export async function submitConstructionEnquiry(
  _data: ConstructionEnquiry,
): Promise<EnquirySubmissionResult> {
  await delay(null, 700);
  return {
    success: true,
    message:
      "Thank you. Your construction enquiry has been received — our team will contact you within 1-2 business days.",
    referenceId: `CE-${Date.now().toString().slice(-8)}`,
  };
}

export async function submitPropertyEnquiry(
  _data: RealEstateEnquiry,
): Promise<EnquirySubmissionResult> {
  await delay(null, 700);
  return {
    success: true,
    message:
      "Thank you. Your real-estate enquiry has been received — our team will contact you shortly.",
    referenceId: `RE-${Date.now().toString().slice(-8)}`,
  };
}
