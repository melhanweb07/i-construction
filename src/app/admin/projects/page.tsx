"use client";

import { useEffect, useState } from "react";
import { getAdminProjects, saveAdminProjects } from "@/lib/admin-data";
import { createId } from "@/lib/admin-data";
import type { AdminProject } from "@/types/admin";
import { BriefcaseBusiness, Plus, Search } from "lucide-react";

const initialProject: Omit<AdminProject, "id" | "updatedAt"> = {
  name: "",
  slug: "",
  location: "",
  projectType: "",
  category: "Residential",
  startDate: "",
  completionDate: "",
  status: "Ongoing",
  progress: 0,
  description: "",
  specifications: [],
  highlights: [],
  mainImage: "",
  gallery: [],
  videos: [],
  featured: false,
  metaTitle: "",
  metaDescription: "",
  ogImage: "",
  updates: [],
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<AdminProject[]>([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formState, setFormState] = useState(initialProject);

  useEffect(() => {
    setProjects(getAdminProjects());
  }, []);

  const filtered = projects.filter((project) => `${project.name} ${project.location}`.toLowerCase().includes(search.toLowerCase()));

  function handleSave() {
    const trimmedName = formState.name.trim();
    if (!trimmedName) return;

    const payload: AdminProject = {
      ...formState,
      id: createId("prj"),
      slug: formState.slug || trimmedName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      updatedAt: new Date().toISOString().slice(0, 10),
      specification: formState.specifications,
      highlights: formState.highlights,
      gallery: formState.gallery.length ? formState.gallery : [formState.mainImage],
      videos: formState.videos,
      metaTitle: formState.metaTitle || trimmedName,
      metaDescription: formState.metaDescription || formState.description,
      ogImage: formState.ogImage || formState.mainImage,
    } as AdminProject;

    const next = [payload, ...projects];
    setProjects(next);
    saveAdminProjects(next);
    setFormState(initialProject);
    setShowForm(false);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">Portfolio</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Projects</h1>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 rounded-xl border border-[#F4F1EA]/10 bg-[#111315] px-3 py-2 text-sm text-[#A5A5A0]">
            <Search className="size-4" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search project"
              className="w-40 bg-transparent outline-none placeholder:text-[#6B6B64]"
            />
          </label>
          <button
            onClick={() => setShowForm((value) => !value)}
            className="inline-flex items-center gap-2 border border-[#C8A45D] bg-[#C8A45D] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0D0E]"
          >
            <Plus className="size-4" /> Add project
          </button>
        </div>
      </div>

      {showForm ? (
        <div className="mt-8 grid gap-4 rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5 md:grid-cols-2">
          <input value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} placeholder="Project name" className="rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          <input value={formState.location} onChange={(event) => setFormState({ ...formState, location: event.target.value })} placeholder="Location" className="rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          <input value={formState.projectType} onChange={(event) => setFormState({ ...formState, projectType: event.target.value })} placeholder="Project type" className="rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          <select value={formState.category} onChange={(event) => setFormState({ ...formState, category: event.target.value as AdminProject["category"] })} className="rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]">
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Industrial">Industrial</option>
            <option value="Renovation">Renovation</option>
            <option value="Interior">Interior</option>
          </select>
          <input value={formState.startDate} type="date" onChange={(event) => setFormState({ ...formState, startDate: event.target.value })} className="rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          <input value={formState.completionDate} type="date" onChange={(event) => setFormState({ ...formState, completionDate: event.target.value })} className="rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          <input value={formState.mainImage} onChange={(event) => setFormState({ ...formState, mainImage: event.target.value })} placeholder="Main image URL" className="md:col-span-2 rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          <textarea value={formState.description} onChange={(event) => setFormState({ ...formState, description: event.target.value })} placeholder="Project description" className="md:col-span-2 min-h-[120px] rounded-xl border border-[#F4F1EA]/10 bg-[#0B0D0E] px-3 py-2.5 text-sm text-white outline-none focus:border-[#C8A45D]" />
          <button onClick={handleSave} className="md:col-span-2 inline-flex w-full items-center justify-center border border-[#C8A45D] bg-[#C8A45D] px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0D0E]">Save project</button>
        </div>
      ) : null}

      <div className="mt-8 grid gap-4">
        {filtered.map((project) => (
          <div key={project.id} className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <BriefcaseBusiness className="size-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{project.name}</p>
                  <p className="text-sm text-[#A5A5A0]">{project.location} • {project.projectType}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#C8A45D]">{project.status}</span>
                <span className="rounded-full border border-[#F4F1EA]/10 bg-[#0B0D0E] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#A5A5A0]">{project.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
