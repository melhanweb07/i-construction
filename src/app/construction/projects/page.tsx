import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { getProjects } from "@/lib/api";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse residential, commercial, industrial, renovation and interior projects.",
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const [projects, params] = await Promise.all([getProjects(), searchParams]);
  const initialFilter = params.status === "ongoing" ? "Ongoing" : "All";

  return (
    <>
      <Hero
        eyebrow="Portfolio"
        headingLines={["Selected", "Projects."]}
        description="An editorial look at our residential, commercial, industrial and renovation work."
        image="https://images.pexels.com/photos/18367499/pexels-photo-18367499.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        minHeight="min-h-[60vh]"
      />

      <section className="bg-[#0B0D0E] py-20 md:py-28">
        <div className="container-fluid">
          <ProjectsExplorer projects={projects} initialFilter={initialFilter} />
        </div>
      </section>
    </>
  );
}
