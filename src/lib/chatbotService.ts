/**
 * Mock chatbot service.
 *
 * `getBotReply` currently uses simple keyword matching against local
 * company data. This is intentionally isolated behind a single async
 * function so it can later be replaced by a real AI API call
 * (e.g. POST /api/chat) without changing the Chatbot UI component.
 */
import { company, companyStats } from "@/data/company";
import { services } from "@/data/services";
import { availableProperties } from "@/data/properties";

export const quickQuestions: string[] = [
  "What services do you provide?",
  "How many projects have you completed?",
  "Where do you operate?",
  "What types of buildings do you construct?",
  "What plots are available?",
  "How can I contact you?",
];

function findStat(id: string) {
  return companyStats.find((s) => s.id === id);
}

export async function getBotReply(message: string): Promise<string> {
  const q = message.toLowerCase();

  await new Promise((r) => setTimeout(r, 450));

  if (q.includes("service")) {
    return `We provide ${services.map((s) => s.title).join(", ")}. Ask about any of these and I can share more detail.`;
  }

  if (q.includes("how many projects") || q.includes("completed")) {
    const stat = findStat("projects");
    return `We have completed ${stat?.value ?? "200"}${stat?.suffix ?? "+"} projects across residential, commercial and industrial construction.`;
  }

  if (q.includes("where") || q.includes("operate") || q.includes("location")) {
    return `Our projects are primarily based around ${company.location}. Reach out via the contact page for site-specific availability.`;
  }

  if (q.includes("type") && (q.includes("building") || q.includes("construct"))) {
    return "We construct residential homes, commercial buildings, industrial facilities, renovations and interior fit-outs.";
  }

  if (q.includes("plot") || q.includes("land") || q.includes("real estate") || q.includes("property")) {
    return `We currently have ${availableProperties.length} plots listed as available or limited availability. Visit /real-estate/plots to explore them.`;
  }

  if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("call")) {
    return `You can reach us at ${company.phone} or ${company.email}, or use the Contact page to send an enquiry.`;
  }

  if (q.includes("hi") || q.includes("hello") || q.includes("hey")) {
    return "Hello! I'm the I Construction Assistant. Ask me about our services, projects, or available plots.";
  }

  return "Thanks for your message. For detailed queries, please use the Contact page and our team will get back to you shortly.";
}
