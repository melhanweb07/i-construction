import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import type { Project } from "@/types";

export default function FeaturedProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-[#0B0D0E] py-24 md:py-32">
      <div className="container-fluid">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading index="03 / 06" eyebrow="Selected Projects" title="An editorial look at our recent work." light />
          <Link
            href="/construction/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#F4F1EA] transition-colors hover:text-[#C8A45D]"
          >
            Full Portfolio
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <div key={project.id} className={i === 0 || i === 3 ? "md:col-span-2" : ""}>
              <ProjectCard project={project} large={i === 0 || i === 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
