"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropertyFilter, { propertyFilterDefaults, type PropertyFilterState } from "./PropertyFilter";
import PropertyCard from "@/components/cards/PropertyCard";
import EmptyState from "@/components/ui/EmptyState";
import type { Property } from "@/types";

function matchesSize(property: Property, size: string) {
  if (size === "All Sizes") return true;
  const numeric = parseInt(property.size.replace(/,/g, ""), 10);
  if (Number.isNaN(numeric)) return true;
  if (size === "Under 2,000 SQ.FT") return numeric < 2000;
  if (size === "2,000 – 3,000 SQ.FT") return numeric >= 2000 && numeric <= 3000;
  if (size === "Above 3,000 SQ.FT") return numeric > 3000;
  return true;
}

function matchesPrice(property: Property, price: string) {
  if (price === "All Prices") return true;
  if (price === "Under ₹30L") return property.price < 3000000;
  if (price === "₹30L – ₹60L") return property.price >= 3000000 && property.price <= 6000000;
  if (price === "Above ₹60L") return property.price > 6000000;
  return true;
}

export default function PropertiesExplorer({ properties }: { properties: Property[] }) {
  const [filters, setFilters] = useState<PropertyFilterState>(propertyFilterDefaults);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.location !== "All Locations" && p.location !== filters.location) return false;
      if (!matchesSize(p, filters.size)) return false;
      if (!matchesPrice(p, filters.price)) return false;
      if (filters.availability !== "All" && p.availability !== filters.availability.toLowerCase()) return false;
      return true;
    });
  }, [properties, filters]);

  return (
    <div>
      <PropertyFilter state={filters} onChange={setFilters} />

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((property) => (
            <motion.div
              key={property.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-12">
          <EmptyState title="No Properties Found" description="Try adjusting your filters to see more plots." />
        </div>
      )}
    </div>
  );
}
