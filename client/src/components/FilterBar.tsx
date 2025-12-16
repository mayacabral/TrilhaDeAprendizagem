import { Button } from "@/components/ui/button";

interface FilterBarProps {
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

const filters = [
  { id: "all", label: "Todos" },
  { id: "beginner", label: "Iniciante" },
  { id: "intermediate", label: "Intermediário" },
  { id: "advanced", label: "Avançado" },
];

export default function FilterBar({activeFilter, onFilterChange,}: FilterBarProps) {

  return (
    
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() =>
            onFilterChange(filter.id === "all" ? null : filter.id)
          }
          variant={
            (activeFilter === null && filter.id === "all") ||
            activeFilter === filter.id
              ? "default"
              : "outline"
          }
          className={
            (activeFilter === null && filter.id === "all") ||
            activeFilter === filter.id
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : ""
          }
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
