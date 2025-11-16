import { useState, useEffect } from "react";

interface Progress {
  completedTopics: Set<string>;
  completedModules: Set<string>;
}

const STORAGE_KEY = "dev-learning-progress";

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({
    completedTopics: new Set(),
    completedModules: new Set(),
  });

  // Load progress from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setProgress({
          completedTopics: new Set<string>(parsed.completedTopics || []),
          completedModules: new Set<string>(parsed.completedModules || []),
        });
      } catch (error) {
        console.error("Failed to load progress:", error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    const toStore = {
      completedTopics: Array.from(progress.completedTopics || []),
      completedModules: Array.from(progress.completedModules || []),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
  }, [progress]);

  const markTopicComplete = (topicId: string) => {
    setProgress((prev) => {
      const newSet = new Set(prev.completedTopics);
      newSet.add(topicId);
      return {
        ...prev,
        completedTopics: newSet,
      };
    });
  };

  const markModuleComplete = (moduleId: string) => {
    setProgress((prev) => {
      const newSet = new Set(prev.completedModules);
      newSet.add(moduleId);
      return {
        ...prev,
        completedModules: newSet,
      };
    });
  };

  const isTopicComplete = (topicId: string) => {
    return progress.completedTopics.has(topicId);
  };

  const isModuleComplete = (moduleId: string) => {
    return progress.completedModules.has(moduleId);
  };

  const getProgressPercentage = (totalItems: number) => {
    if (totalItems === 0) return 0;
    const completed = progress.completedTopics ? progress.completedTopics.size : 0;
    return Math.round((completed / totalItems) * 100);
  };

  const resetProgress = () => {
    setProgress({
      completedTopics: new Set<string>(),
      completedModules: new Set<string>(),
    });
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    markTopicComplete,
    markModuleComplete,
    isTopicComplete,
    isModuleComplete,
    getProgressPercentage,
    resetProgress,
  };
}
