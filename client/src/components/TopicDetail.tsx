import { Topic } from "@/data/learningPath";
import { Button } from "@/components/ui/button";
import { X, BookOpen, FileText, CheckCircle2, Circle } from "lucide-react";

interface TopicDetailProps {
  topic: Topic;
  onClose: () => void;
  isComplete?: boolean;
  onMarkComplete?: () => void;
}

const levelLabels: Record<string, string> = {
  beginner: "Iniciante",
  intermediate: "Intermediário",
  advanced: "Avançado",
};

const levelColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
};

export default function TopicDetail({
  topic,
  onClose,
  isComplete = false,
  onMarkComplete,
}: TopicDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{topic.icon}</span>
            <div>
              <h2 className="text-3xl font-bold mb-2">{topic.title}</h2>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[topic.level]}`}>
                  {levelLabels[topic.level]}
                </span>
                <span className="text-blue-100">Duração: {topic.duration}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-800 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600" />
              Descrição
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {topic.description}
            </p>
          </section>

          {/* Resources */}
          {topic.resources && topic.resources.length > 0 && (
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FileText size={20} className="text-blue-600" />
                Recursos de Aprendizado
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {topic.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{resource}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Learning Path Info */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
            <h3 className="font-bold text-gray-800 mb-2">💡 Dica de Aprendizado</h3>
            <p className="text-gray-700 text-sm">
              {topic.level === "beginner"
                ? "Este é um tópico fundamental. Dedique tempo para entender bem os conceitos básicos antes de avançar."
                : topic.level === "intermediate"
                ? "Você já tem uma base sólida. Agora é hora de aprofundar e praticar com projetos reais."
                : "Este é um tópico avançado. Certifique-se de dominar os tópicos anteriores antes de começar."}
            </p>
          </section>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Fechar
            </Button>
            {onMarkComplete && (
              <Button
                onClick={onMarkComplete}
                className={`flex-1 ${isComplete ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
              >
                {isComplete ? (
                  <>
                    <CheckCircle2 size={18} className="mr-2" />
                    Concluído
                  </>
                ) : (
                  <>
                    <Circle size={18} className="mr-2" />
                    Marcar como Concluído
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
