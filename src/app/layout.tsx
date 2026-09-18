import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import ChatbotLoader from "@/components/chatbot/ChatbotLoader";

const heading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "I Construction — Building Spaces. Creating Futures.",
    template: "%s | I Construction",
  },
  description:
    "I Construction is a construction and real-estate group delivering residential, commercial and industrial projects, alongside curated plots through I Real Estate.",
  openGraph: {
    title: "I Construction",
    description:
      "Building with precision, delivering with purpose — construction and real estate under one trusted group.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-[#0B0D0E] text-[#F4F1EA] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:bg-[#C8A45D] focus:px-4 focus:py-2 focus:text-[#0B0D0E]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ChatbotLoader />
      </body>
    </html>
  );
}
