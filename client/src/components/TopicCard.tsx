import { Topic } from "@/data/learningPath";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap } from "lucide-react";

interface TopicCardProps {
  topic: Topic;
  onClick: (topicId: string) => void;
}

const levelColors: Record<string, string> = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
};

const levelLabels: Record<string, string> = {
  beginner: "Iniciante",
  intermediate: "Intermediário",
  advanced: "Avançado",
};

export default function TopicCard({ topic, onClick }: TopicCardProps) {
  return (
    <div
      onClick={() => onClick(topic.id)}
      className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-400 p-5"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{topic.icon}</span>
        <Badge className={`${levelColors[topic.level]} border-0`}>
          {levelLabels[topic.level]}
        </Badge>
      </div>
      
      <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {topic.title}
      </h4>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {topic.description}
      </p>
      
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{topic.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Zap size={14} />
          <span>{topic.resources?.length || 0} recursos</span>
        </div>
      </div>
    </div>
  );
}
