import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGallery from "@/components/projects/ProjectGallery";
import CTASection from "@/components/ui/CTASection";
import { getProjectBySlug, getProjects } from "@/lib/api";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const specs = [
    { label: "Start Date", value: new Date(project.startDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) },
    { label: "Completion Date", value: new Date(project.completionDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) },
    { label: "Project Type", value: project.category },
    { label: "Location", value: project.location },
  ];

  return (
    <>
      <section className="bg-[#0B0D0E] pb-10 pt-32 md:pt-40">
        <div className="container-fluid">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone={project.status === "ongoing" ? "green" : "gold"}>
              {project.status === "ongoing" ? "Ongoing" : "Completed"}
            </Badge>
            <Badge tone="neutral">{project.category}</Badge>
          </div>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight text-[#F4F1EA]">
            {project.title}
          </h1>
          <p className="mt-4 flex items-center gap-2 text-sm text-[#A5A5A0]">
            <MapPin className="size-4" aria-hidden />
            {project.location}
          </p>
        </div>
      </section>

      <section className="bg-[#0B0D0E] pb-16">
        <div className="container-fluid">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#17191a]">
            <Image src={project.heroImage} alt={project.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#0B0D0E] pb-24">
        <div className="container-fluid grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title="Project Overview" light />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A5A5A0]">{project.description}</p>

            <div className="mt-14">
              <SectionHeading eyebrow="Highlights" title="Project Highlights" light />
              <ol className="mt-8 flex flex-col gap-5">
                {project.highlights.map((h, i) => (
                  <li key={h} className="flex gap-4 border-b border-[#1c1e1f] pb-5">
                    <span className="text-sm font-medium text-[#C8A45D]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-[#F4F1EA]">{h}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="border border-[#232628] bg-[#121415] p-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">Project Specifications</h3>
              <dl className="mt-6 flex flex-col gap-4">
                {specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between border-b border-[#1c1e1f] pb-4">
                    <dt className="text-xs uppercase tracking-[0.1em] text-[#A5A5A0]">{s.label}</dt>
                    <dd className="text-sm font-medium text-[#F4F1EA]">{s.value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between">
                  <dt className="text-xs uppercase tracking-[0.1em] text-[#A5A5A0]">Area</dt>
                  <dd className="text-sm font-medium text-[#F4F1EA]">{project.area}</dd>
                </div>
              </dl>

              {project.status === "ongoing" && (
                <Link
                  href={`/construction/projects/${project.slug}/progress`}
                  className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#C8A45D]"
                >
                  View Project Progress
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#101213] py-24">
        <div className="container-fluid">
          <SectionHeading eyebrow="Journey" title="Project Journey" light />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {project.journey.map((j) => (
              <div key={j.stage} className="flex flex-col gap-3">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#17191a]">
                  <Image src={j.image} alt={j.stage} fill sizes="200px" className="object-cover" />
                </div>
                <p className="text-center text-[10px] uppercase tracking-[0.1em] text-[#A5A5A0]">{j.stage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B0D0E] py-24">
        <div className="container-fluid">
          <SectionHeading eyebrow="Gallery" title="Project Gallery" light />
          <div className="mt-12">
            <ProjectGallery images={project.gallery} alt={project.title} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Interested?"
        title="Enquire about a similar project."
        actions={[{ label: "Construction Enquiry", href: "/contact?type=construction" }]}
      />
    </>
  );
}
