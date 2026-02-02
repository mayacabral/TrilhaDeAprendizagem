import { AlertTriangle, Text,Shapes, BookOpen, Code, Database,Church, GitBranch, Rocket, WrapText,  Users, CheckCircle2, ArrowRight, Computer, AArrowDown, ALargeSmall,Activity, Airplay, AlarmClockCheck } from "lucide-react";
import type { ComponentType, SVGProps } from "react";


export interface Topic {
  id: string;
  title: string;
  description: string;
  icon?: string | ComponentType<SVGProps<SVGSVGElement>>;
  level: "beginner" | "intermediate" | "advanced";
  resources?: { title: string; link?: string; page?: number }[];
}

export interface Resource{
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  color: string;
  icon?: string | ComponentType<SVGProps<SVGSVGElement>>;
  topics: Topic[];
  
}

export const learningPathData: Module[] = [
  {
    id: "backend",
    title: "SQL server",
    description: "Servidores, APIs e lógica de negócio",
    color: "bg-green-500",
    icon: Database,
    topics: [
      {
        id: "nodejs",
        title: "Node.js e Express",
        description: "Servidores, rotas e middleware",
        
        level: "intermediate",
       
        resources: [
          { title: "Express", link: "https://expressjs.com" },
          { title: "Middleware (Express)", link: "https://expressjs.com/en/guide/using-middleware.html" },
          { title: "Routing (Express)", link: "https://expressjs.com/en/guide/routing.html" },
          { title: "Error Handling (Express)", link: "https://expressjs.com/en/guide/error-handling.html" },
        ],
      },
      {
        id: "databases",
        title: "Bancos de Dados",
        description: "SQL, NoSQL e modelagem de dados",
        
        level: "intermediate",
       
        resources: [
          { title: "PostgreSQL", link: "https://www.postgresql.org" },
          { title: "MongoDB", link: "https://www.mongodb.com" },
          { title: "Database Normalization", link: "https://en.wikipedia.org/wiki/Database_normalization" },
          { title: "SQL Docs (PostgreSQL)", link: "https://www.postgresql.org/docs/current/sql.html" },
        ],
      },
      {
        id: "apis",
        title: "APIs RESTful e GraphQL",
        description: "Design de APIs, autenticação e versionamento",
        
        level: "intermediate",
       
        resources: [
          { title: "REST", link: "https://restfulapi.net" },
          { title: "GraphQL", link: "https://graphql.org" },
          { title: "JWT", link: "https://jwt.io" },
          { title: "OAuth", link: "https://oauth.net" },
        ],
      },
      {
        id: "authentication",
        title: "Autenticação e Autorização",
        description: "JWT, OAuth2, sessões e segurança",
        
        level: "advanced",
       
        resources: [
          { title: "JWT", link: "https://jwt.io" },
          { title: "OAuth2", link: "https://oauth.net/2/" },
          { title: "Session Management (MDN)", link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Session_management" },
          { title: "CORS (MDN)", link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
        ],
      },
      {
        id: "backend-frameworks",
        title: "Frameworks Backend",
        description: "Django, Spring, Laravel e outras opções",
        
        level: "advanced",
       
        resources: [
          { title: "Django", link: "https://www.djangoproject.com" },
          { title: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
          { title: "Laravel", link: "https://laravel.com" },
          { title: "NestJS", link: "https://nestjs.com" },
        ],
      },
    ],
    
  },

  {
    id: "databases",
    title: "Mongo Db",
    description: "Armazenamento, consultas e otimização de dados",
    color: "bg-orange-500",
    icon: Database,
    topics: [
      {
        id: "sql-basics",
        title: "SQL Fundamentals",
        description: "SELECT, INSERT, UPDATE, DELETE e JOINs",
        
        level: "beginner",
       
        resources: [
          { title: "CRUD (wiki)", link: "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" },
          { title: "Table Expressions (Postgres)", link: "https://www.postgresql.org/docs/current/queries-table-expressions.html" },
          { title: "Aggregation (MongoDB)", link: "https://www.mongodb.com/docs/manual/aggregation/" },
          { title: "Subqueries (Postgres)", link: "https://www.postgresql.org/docs/current/queries-subqueries.html" },
        ],
      },
      {
        id: "database-design",
        title: "Design de Bancos de Dados",
        description: "Normalização, relacionamentos e índices",
        
        level: "intermediate",
       
        resources: [
          { title: "Database Normalization", link: "https://en.wikipedia.org/wiki/Database_normalization" },
          { title: "Database Schema", link: "https://en.wikipedia.org/wiki/Database_schema" },
          { title: "Use The Index Luke", link: "https://use-the-index-luke.com/" },
          { title: "Schema (generic)", link: "#" },
        ],
      },
      {
        id: "nosql",
        title: "Bancos NoSQL",
        description: "MongoDB, Redis, Cassandra e outros",
        
        level: "intermediate",
       
        resources: [
          { title: "MongoDB", link: "https://www.mongodb.com" },
          { title: "Redis", link: "https://redis.io" },
          { title: "Document Stores (wiki)", link: "https://en.wikipedia.org/wiki/Document-oriented_database" },
          { title: "Key-Value DBs (wiki)", link: "https://en.wikipedia.org/wiki/Key-value_database" },
        ],
      },
    ],
    
  },
  
 
  {
    id: "soft-skills",
    title: "Soft Skills e Profissionalismo",
    description: "Habilidades essenciais para carreira em desenvolvimento",
    color: "bg-indigo-500",
    icon: Text ,
    topics: [
      {
        id: "communication",
        title: "Comunicação Efetiva",
        description: "Documentação, apresentações e trabalho em equipe",
        icon: "💬",
        level: "intermediate",
       
        resources: [
          { title: "Documentação", link: "#" },
          { title: "Apresentações", link: "#" },
          { title: "Feedback", link: "#" },
          { title: "Empatia", link: "#" },
        ],
      },
      {
        id: "problem-solving",
        title: "Resolução de Problemas",
        description: "Debugging, análise e pensamento crítico",
        
        level: "intermediate",
       
        resources: [
          { title: "Debugging (wiki)", link: "https://en.wikipedia.org/wiki/Debugging" },
          { title: "Análise", link: "#" },
          { title: "Criatividade", link: "#" },
          { title: "Lógica", link: "#" },
        ],
      },
      {
        id: "agile",
        title: "Metodologias Ágeis",
        description: "Scrum, Kanban e práticas de desenvolvimento",
       
        level: "intermediate",
       
        resources: [
          { title: "Scrum", link: "https://scrum.org" },
          { title: "Kanban", link: "https://kanbanize.com/kanban-resources/getting-started/what-is-kanban" },
          { title: "Sprint", link: "#" },
          { title: "Retrospectiva", link: "#" },
        ],
      },
    ],
   
  },
  
];
