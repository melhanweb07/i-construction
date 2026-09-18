"use client";

export interface PropertyFilterState {
  location: string;
  size: string;
  price: string;
  availability: string;
}

const locations = ["All Locations", "Katpadi, Vellore", "Gudiyatham Road, Vellore", "Ranipet Bypass, Tamil Nadu", "Chittoor Road, Vellore", "Arcot Road, Vellore", "Sathuvachari, Vellore", "Vellore–Chennai Highway", "Gandhi Nagar Extension, Vellore"];
const sizes = ["All Sizes", "Under 2,000 SQ.FT", "2,000 – 3,000 SQ.FT", "Above 3,000 SQ.FT"];
const prices = ["All Prices", "Under ₹30L", "₹30L – ₹60L", "Above ₹60L"];
const availabilities = ["All", "Available", "Limited", "Sold"];

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#A5A5A0]">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#232628] bg-[#121415] px-3 py-3 text-sm text-[#F4F1EA] focus:border-[#C8A45D] focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function PropertyFilter({
  state,
  onChange,
}: {
  state: PropertyFilterState;
  onChange: (state: PropertyFilterState) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <Select label="Location" value={state.location} options={locations} onChange={(v) => onChange({ ...state, location: v })} />
      <Select label="Plot Size" value={state.size} options={sizes} onChange={(v) => onChange({ ...state, size: v })} />
      <Select label="Price" value={state.price} options={prices} onChange={(v) => onChange({ ...state, price: v })} />
      <Select label="Availability" value={state.availability} options={availabilities} onChange={(v) => onChange({ ...state, availability: v })} />
    </div>
  );
}

export const propertyFilterDefaults: PropertyFilterState = {
  location: "All Locations",
  size: "All Sizes",
  price: "All Prices",
  availability: "All",
};
