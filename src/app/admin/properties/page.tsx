"use client";

import { useEffect, useState } from "react";
import { getAdminProperties, saveAdminProperties } from "@/lib/admin-data";
import type { AdminProperty } from "@/types/admin";
import { Building2, Plus, Search } from "lucide-react";

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState<AdminProperty[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProperties(getAdminProperties());
  }, []);

  const filtered = properties.filter((property) => `${property.name} ${property.location}`.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-[#C8A45D]">Real Estate</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Properties</h1>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 rounded-xl border border-[#F4F1EA]/10 bg-[#111315] px-3 py-2 text-sm text-[#A5A5A0]">
            <Search className="size-4" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search property" className="w-40 bg-transparent outline-none placeholder:text-[#6B6B64]" />
          </label>
          <button onClick={() => {
            const newProperty: AdminProperty = {
              id: `prop-${Date.now()}`,
              name: "New Plot Listing",
              slug: "new-plot-listing",
              plotNumber: "NEW",
              location: "Vellore",
              size: "2400 sq.ft.",
              dimensions: "30 x 80 ft",
              price: 2500000,
              priceLabel: "₹25 Lakh",
              availability: "available",
              description: "New property listing created from admin dashboard.",
              nearbyLocations: ["School zone", "Road access"],
              roadAccess: "Straight entry from the main road.",
              amenities: ["Electricity", "Water supply"],
              mainImage: "https://images.pexels.com/photos/358636/pexels-photo-358636.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
              gallery: [],
              updatedAt: new Date().toISOString().slice(0, 10),
            };

            const next = [
              ...properties,
              newProperty,
            ];
            setProperties(next);
            saveAdminProperties(next);
          }} className="inline-flex items-center gap-2 border border-[#C8A45D] bg-[#C8A45D] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0B0D0E]">
            <Plus className="size-4" /> Add property
          </button>
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        {filtered.map((property) => (
          <div key={property.id} className="rounded-3xl border border-[#F4F1EA]/10 bg-[#111315] p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#C8A45D]/10 text-[#C8A45D]">
                  <Building2 className="size-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{property.name}</p>
                  <p className="text-sm text-[#A5A5A0]">{property.location} • {property.size}</p>
                </div>
              </div>
              <span className="rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#C8A45D]">{property.availability}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
