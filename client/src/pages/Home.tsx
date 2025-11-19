import { useState, useMemo } from "react";
import { useProgress } from "@/hooks/useProgress";
import { learningPathData, Module, Topic } from "@/data/learningPath";
import ModuleCard from "@/components/ModuleCard";
import ModuleDetail from "@/components/ModuleDetail";
import TopicDetail from "@/components/TopicDetail";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function Home() {
  const { progress, markTopicComplete, isTopicComplete } = useProgress();
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const completedTopicsSet = useMemo(
    () => progress.completedTopics,
    [progress.completedTopics]
  );

  const filteredModules = learningPathData.filter((module) =>
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleModuleClick = (moduleId: string) => {
    const module = learningPathData.find((m) => m.id === moduleId);
    if (module) {
      setSelectedModule(module);
    }
  };

  const handleTopicClick = (topicId: string) => {
    if (selectedModule) {
      const topic = selectedModule.topics.find((t) => t.id === topicId);
      if (topic) {
        setSelectedTopic(topic);
      }
    }
  };

  const handleBackFromModule = () => {
    setSelectedModule(null);
  };

  const handleCloseTopicDetail = () => {
    setSelectedTopic(null);
  };

  const handleMarkTopicComplete = () => {
    if (selectedTopic) {
      markTopicComplete(selectedTopic.id);
    }
  };

  // If a module is selected, show module detail
  if (selectedModule) {
    return (
      <>
        <ModuleDetail
          module={selectedModule}
          onBack={handleBackFromModule}
          onTopicClick={handleTopicClick}
          completedTopics={completedTopicsSet}
        />
        {selectedTopic && (
          <TopicDetail
            topic={selectedTopic}
            onClose={handleCloseTopicDetail}
            isComplete={isTopicComplete(selectedTopic.id)}
            onMarkComplete={handleMarkTopicComplete}
          />
        )}
      </>
    );
  }

  // Main view - all modules
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className=" py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">

              <h4 className="w-fit" >
                🎯 Programa de Onboarding
              </h4>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Bem-vindo à sua{" "}
                <span className="text-primary">Jornada de Aprendizado</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Desenvolva as habilidades essenciais para se tornar um desenvolvedor de sucesso. 
                Nossa trilha de conhecimentos foi cuidadosamente estruturada para guiar você do básico ao avançado.
              </p>
              

            </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar módulos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {learningPathData.length}
            </div>
            <div className="text-gray-600 text-sm">Módulos</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {learningPathData.reduce((acc, m) => acc + m.topics.length, 0)}
            </div>
            <div className="text-gray-600 text-sm">Tópicos</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {Math.floor(
                learningPathData.reduce((acc, m) =>
                  acc +
                  m.topics.reduce((topicAcc, t) => {
                    const weeks = parseInt(t.duration.split("-")[0]);
                    return topicAcc + weeks;
                  }, 0),
                  0
                ) / 4
              )}
            </div>
            <div className="text-gray-600 text-sm">Meses de Estudo</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {learningPathData.reduce(
                (acc, m) =>
                  acc +
                  m.topics.reduce(
                    (topicAcc, t) => topicAcc + (t.resources?.length || 0),
                    0
                  ),
                0
              )}
            </div>
            <div className="text-gray-600 text-sm">Recursos</div>
          </div>
        </div>

        {/* Modules Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {searchTerm
              ? `Resultados para "${searchTerm}"`
              : "Explore os Módulos"}
          </h2>

          {filteredModules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredModules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onClick={handleModuleClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">
                Nenhum módulo encontrado para "{searchTerm}"
              </p>
              <Button
                onClick={() => setSearchTerm("")}
                variant="outline"
              >
                Limpar Busca
              </Button>
            </div>
          )}
        </div>

        
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Trilha de Conhecimento para Desenvolvedores. Desenvolvido com ❤️ para impulsionar sua carreira.
          </p>
        </div>
      </footer>
    </div>
  );
}
