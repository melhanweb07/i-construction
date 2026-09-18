import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgressTimeline from "@/components/projects/ProgressTimeline";
import CTASection from "@/components/ui/CTASection";
import { getProjectBySlug, getProjects } from "@/lib/api";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.filter((p) => p.status === "ongoing").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} — Progress`, description: `Live construction progress for ${project.title}.` };
}

export default async function ProjectProgressPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (project.progress / 100) * circumference;

  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <Image src={project.heroImage} alt={project.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-[#0B0D0E]/60 to-[#0B0D0E]/10" />
        </div>
        <div className="container-fluid relative pb-16">
          <Badge tone="green">Ongoing</Badge>
          <h1 className="mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-[1.05] tracking-tight text-[#F4F1EA]">
            {project.title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-[#A5A5A0]">
            <MapPin className="size-4" aria-hidden />
            {project.location}
          </p>
        </div>
      </section>

      <section className="bg-[#0B0D0E] py-20 md:py-28">
        <div className="container-fluid grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="flex flex-col items-center lg:col-span-4">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#A5A5A0]">Current Progress</p>
            <div className="relative flex size-40 items-center justify-center">
              <svg viewBox="0 0 120 120" className="size-40 -rotate-90">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#232628" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#C8A45D"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                />
              </svg>
              <span className="absolute text-3xl font-semibold text-[#F4F1EA]">{project.progress}%</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <SectionHeading eyebrow="Timeline" title="Progress Timeline" light />
            <p className="mt-4 max-w-lg text-sm text-[#A5A5A0]">
              Key construction milestones for {project.title}, updated as work progresses on site.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#101213] py-24">
        <div className="container-fluid">
          {project.updates.length > 0 ? (
            <ProgressTimeline updates={project.updates} />
          ) : (
            <p className="text-sm text-[#A5A5A0]">Progress updates for this project will be published soon.</p>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Stay Updated"
        title="Want a walkthrough of this project?"
        actions={[{ label: "Request a Site Visit", href: "/contact?type=construction" }]}
      />
    </>
  );
}
