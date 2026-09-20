import type { AdminChatbotItem } from "@/types/admin";

export const adminChatbotKnowledge: AdminChatbotItem[] = [
  {
    id: "kb-1",
    question: "What services does I Construction provide?",
    answer: "We provide residential construction, commercial construction, renovation, interior and exterior works, turnkey delivery and civil works.",
    category: "Services",
    status: "enabled",
    updatedAt: "2026-09-12",
  },
  {
    id: "kb-2",
    question: "Where is the company based?",
    answer: "I Construction is based in Vellore, Tamil Nadu, with a focus on residential, commercial and real-estate opportunities.",
    category: "Company",
    status: "enabled",
    updatedAt: "2026-09-02",
  },
  {
    id: "kb-3",
    question: "Do you offer plots for sale?",
    answer: "Yes, I Real Estate manages curated plot opportunities and available property listings.",
    category: "Properties",
    status: "enabled",
    updatedAt: "2026-08-29",
  },
  {
    id: "kb-4",
    question: "How can I enquire about a project?",
    answer: "Use the contact page or the construction enquiry form to share your requirements and project location.",
    category: "Contact",
    status: "enabled",
    updatedAt: "2026-08-18",
  },
];
