import { BookOpen, Code, Database, GitBranch, Rocket, WrapText,  Users, CheckCircle2, ArrowRight, Computer } from "lucide-react";
import type { ComponentType, SVGProps } from "react";


export interface Topic {
  id: string;
  title: string;
  description: string;
  icon?: string | ComponentType<SVGProps<SVGSVGElement>>;
  level: "beginner" | "intermediate" | "advanced";
  resources?: { title: string; link?: string }[];
}

export interface Resource{
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface ModuleSistem {
  id: string;
  title: string;
  description: string;
  color: string;
  icon?: string | ComponentType<SVGProps<SVGSVGElement>>;
  topics: Topic[];
  
}

export const learningPathData: ModuleSistem[] = [
  {
    id: "fronte",
    title: "Sistemas internos",
    description: "Sistema de cofre de senhas",       
    color: "bg-blue-500",
    icon: WrapText,
    topics: [
      {
        id: "HUBBLE",
        title: "HUBBLE",
        description: "Sistema de cofre de senhas",        
        level: "beginner",       
        resources: [
          { title: "HUBBLE", link: "https://hubble.processoagil.com/" },
        ],
      },
    ],
    
  },
  
];
