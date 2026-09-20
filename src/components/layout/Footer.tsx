import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/SocialIcons";

const columns = [
  {
    title: "I Construction",
    links: [
      { label: "Construction", href: "/construction" },
      { label: "Services", href: "/construction/services" },
      { label: "Projects", href: "/construction/projects" },
      { label: "Ongoing Projects", href: "/construction/projects?status=ongoing" },
    ],
  },
  {
    title: "Real Estate",
    links: [
      { label: "Plots for Sale", href: "/real-estate/plots" },
      { label: "Sold Properties", href: "/real-estate/sold" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Media", href: "/media" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const social = [
  { label: "Instagram", href: company.social.instagram, icon: InstagramIcon },
  { label: "Facebook", href: company.social.facebook, icon: FacebookIcon },
  { label: "LinkedIn", href: company.social.linkedin, icon: LinkedinIcon },
  { label: "YouTube", href: company.social.youtube, icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#1c1e1f] bg-[#0B0D0E]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C8A45D 1px, transparent 1px), linear-gradient(to bottom, #C8A45D 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="container-fluid relative py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-lg font-bold uppercase tracking-[0.12em] text-[#F4F1EA]">
              I Construction
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#A5A5A0]">
              {company.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center border border-[#F4F1EA]/15 text-[#A5A5A0] transition-colors duration-300 hover:border-[#C8A45D] hover:text-[#C8A45D]"
                >
                  <s.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A5A5A0] transition-colors duration-300 hover:text-[#F4F1EA]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-[#A5A5A0]">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                <a href={`tel:${company.phone}`} className="hover:text-[#F4F1EA]">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                <a href={`mailto:${company.email}`} className="hover:text-[#F4F1EA]">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{company.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#1c1e1f] pt-8 text-xs text-[#6b6b67] sm:flex-row">
          <p>© {new Date().getFullYear()} I Construction. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#A5A5A0]">
            <Link href="/contact" className="hover:text-[#F4F1EA]">
              Enquiries
            </Link>
            <span>Documentation available on request.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
