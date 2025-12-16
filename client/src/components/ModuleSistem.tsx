import { useState } from "react";
import { ModuleSistem } from "@/data/learningPathSistem";
import type { ComponentType, SVGProps, ReactElement } from "react";
import { isValidElement } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import TopicCard from "./TopicCard";
import FilterBar from "./FilterBar";
import ProgressBar from "./ProgressBar";

interface ModuleDetailProps {
  module: ModuleSistem;
  onBack: () => void;
  onTopicClick: (topicId: string) => void;
  completedTopics?: Set<string>;
}

export default function ModuleDetail({ module, onBack, onTopicClick,completedTopics = new Set(),}: ModuleDetailProps) {
  
  const [levelFilter, setLevelFilter] = useState<string | null>(null);

  const filteredTopics = levelFilter
    ? module.topics.filter((t) => t.level === levelFilter)
    : module.topics;

  const progressPercentage = Math.round(
    (Array.from(completedTopics).filter((id) =>
      module.topics.some((t) => t.id === id)
    ).length / module.topics.length) * 100
  );
  
  const renderIcon = (icon: ModuleSistem["icon"]) => {
    if (!icon) return null;
    if (typeof icon === "string") return <span className="text-6xl">{icon}</span>;
    if (isValidElement(icon as any)) return icon as unknown as ReactElement;
    const Icon = icon as ComponentType<SVGProps<SVGSVGElement>>;
    return <Icon className="w-16 h-16 text-white" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className={`${module.color} text-white py-12 px-4 md:px-8`}>
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white hover:bg-opacity-20 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar
          </Button>
          <div className="flex items-center gap-6 mb-4">
            {renderIcon(module.icon)}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {module.title}
              </h1>
              <p className="text-lg opacity-90">{module.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Progress */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <ProgressBar
            percentage={progressPercentage}
            label="Progresso do Modulo"
            showPercentage={true}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {module.topics.length}
            </div>
            <div className="text-gray-600 text-sm">Tópicos</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {module.topics.filter((t) => t.level === "beginner").length}
            </div>
            <div className="text-gray-600 text-sm">Iniciante</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {module.topics.filter((t) => t.level === "intermediate").length}
            </div>
            <div className="text-gray-600 text-sm">Intermediário</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {module.topics.filter((t) => t.level === "advanced").length}
            </div>
            <div className="text-gray-600 text-sm">Avançado</div>
          </div>
        </div>

        {/* Topics Grid */}
        <div>
          
          <FilterBar activeFilter={levelFilter} onFilterChange={setLevelFilter} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onClick={onTopicClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
