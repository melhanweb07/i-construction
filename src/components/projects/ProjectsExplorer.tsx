"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "@/components/cards/ProjectCard";
import EmptyState from "@/components/ui/EmptyState";
import type { Project } from "@/types";

export default function ProjectsExplorer({
  projects,
  initialFilter = "All",
}: {
  projects: Project[];
  initialFilter?: string;
}) {
  const [filter, setFilter] = useState(initialFilter);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Ongoing") return projects.filter((p) => p.status === "ongoing");
    if (filter === "Completed") return projects.filter((p) => p.status === "completed");
    return projects.filter((p) => p.category === filter);
  }, [projects, filter]);

  return (
    <div>
      <ProjectFilter active={filter} onChange={setFilter} />

      <motion.div layout className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-12">
          <EmptyState title="No Projects Found" description="Try a different filter to see more projects." />
        </div>
      )}
    </div>
  );
}
