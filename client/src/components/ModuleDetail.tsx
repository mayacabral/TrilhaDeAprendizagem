import { useState } from "react";
import { Module } from "@/data/learningPath";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import TopicCard from "./TopicCard";
import FilterBar from "./FilterBar";
import ProgressBar from "./ProgressBar";

interface ModuleDetailProps {
  module: Module;
  onBack: () => void;
  onTopicClick: (topicId: string) => void;
  completedTopics?: Set<string>;
}

export default function ModuleDetail({
  module,
  onBack,
  onTopicClick,
  completedTopics = new Set(),
}: ModuleDetailProps) {
  const [levelFilter, setLevelFilter] = useState<string | null>(null);

  const filteredTopics = levelFilter
    ? module.topics.filter((t) => t.level === levelFilter)
    : module.topics;

  const progressPercentage = Math.round(
    (Array.from(completedTopics).filter((id) =>
      module.topics.some((t) => t.id === id)
    ).length / module.topics.length) * 100
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
            <span className="text-6xl">{module.icon}</span>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Tópicos de Aprendizado
          </h2>
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
