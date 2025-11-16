import { Module } from "@/data/learningPath";
import { ChevronRight } from "lucide-react";

interface ModuleCardProps {
  module: Module;
  onClick: (moduleId: string) => void;
}

export default function ModuleCard({ module, onClick }: ModuleCardProps) {
  return (
    <div
      onClick={() => onClick(module.id)}
      className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
    >
      <div className={`${module.color} h-24 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
        {module.icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {module.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {module.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {module.topics.length} tópicos
          </span>
          <ChevronRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={20} />
        </div>
      </div>
    </div>
  );
}
