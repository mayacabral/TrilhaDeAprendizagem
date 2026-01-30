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
    id: "rotinas",
    title: "Rotinas",
    description: "Principais rotinas de monitoramento e manutenção do sistema",
    color: "bg-purple-500",
    icon: Code,
    topics: [
      {
        id: "dje",
        title: "Comunicações no Domicílio Eletrônico",
        description: "Verificar se todas as comunicações expedidas ontem estão com ciência marcada. Se alguma comunicação estiver sem ciência, alertar a EJOTA.",        
        level: "intermediate",       
        resources: [
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
          { title: "DJE", link: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=domicilio-eletronico-frontend&redirect_uri=https%3A%2F%2Fdomicilio-eletronico.pdpj.jus.br%2F&state=515a0c86-ec0c-498f-b02a-442ada5e28b6&response_mode=fragment&response_type=code&scope=openid&nonce=d42bd2d4-e031-4c8a-88cc-55060ca6b8cd" },
          { title: "Manual de Soluções - Página 19", link: "/midia/manoel.pdf#page=19" },
        ],
      },
      {
        id: "DJE",
        title: "Intimações no DJE com o Sistema dos Clientes",
        description: "Comparar a quantidade de comunicações registradas no DJE com os dados que vieram via SQL. Caso haja divergência, acionar a equipe responsável pelo source.",        
        level: "intermediate",       
        resources: [
          { title: "SQL", link: "https://www.w3schools.com/sql/" },
          { title: "DJE", link: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?client_id=domicilio-eletronico-frontend&redirect_uri=https%3A%2F%2Fdomicilio-eletronico.pdpj.jus.br%2F&state=515a0c86-ec0c-498f-b02a-442ada5e28b6&response_mode=fragment&response_type=code&scope=openid&nonce=d42bd2d4-e031-4c8a-88cc-55060ca6b8cd" },
          { title: "Manual de Soluções - Página 21", link: "/midia/manoel.pdf#page=21" },
        ],
      },
      {
        id: "DJEPortal",
        title: "DJE em caso de erro no portal",
        description: "Fornecer um procedimento alternativo para verificar expedientes do DJE caso o portal esteja fora do ar ou com falhas na exibição.",        
        level: "intermediate",       
        resources: [
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
          { title: "Manual de Soluções - Página 22 ", link: "/midia/manoel.pdf#page=22" },
        ],
      },
      {
        id: "Source",
        title: "Fila no Source",
        description: "Monitorar o tamanho da collection “fila” do banco softurbano no MongoDB softurbano. Caso esteja muito grande, diagnosticar e corrigir gargalos no processamento.",       
        level: "intermediate",       
        resources: [
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
          { title: "Manual de Soluções - Página 24", link: "/midia/manoel.pdf#page=24" },
        ],
      },
      {
        id: "Tasks",
        title: "Transparência – Tasks no Turing",
        description: "Garantir que os processos da Transparência estão em execução automática, para evitar travamentos ou atrasos.", 
        level: "beginner",
        resources: [
          { title: "Manual de Soluções - Página 26", link: "/midia/manoel.pdf#page=26" },]
      },
      {
        id: "Privada",
        title: "Página de Tokens – Consulta Privada",
        description: "Identificar tokens/processos mais desatualizados e investigar a causa do atraso para corrigi-la.",        
        level: "intermediate",
       
        resources: [
          { title: "BigTable", link: "https://cs.processoagil.com.br/dashboard.html" },
          { title: "Manual de Soluções - Página 27", link: "/midia/manoel.pdf#page=27" },
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
        ],
      },
      {
        id: "Tokens",
        title: "Tokens Físicos Pendentes",
        description: "Identificar se há tokens físicos pendentes no sistema, a fim de garantir que os processos estejam com os dados atualizados e prontos para uso.",        
        level: "beginner",
       
        resources: [
          { title: "BigTable", link: "https://cs.processoagil.com.br/dashboard.html" },
          { title: "Manual de Soluções - Página 28", link: "/midia/manoel.pdf#page=28" },
        ],
      },
      {
        id: "Publica",
        title: "Página de Tribunais – Consulta Pública",
        description: "Monitorar o status de todos os sistemas de tribunais, identificar atrasos ou falhas, e realizar correções sistema a sistema com foco em manter a cobertura o mais próxima possível de 100%.",        
        level: "intermediate",
       
        resources: [
          { title: "BigTable", link: "https://cs.processoagil.com.br/dashboard.html" },
          { title: "Manual de Soluções - Página 30", link: "/midia/manoel.pdf#page=30" },
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
        ],
      },
      {
        id: "VelocidadeCaptura",
        title: "Página de Tribunais – Velocidade de captura",
        description: "Monitorar a quantidade de processos verificados por hora.",        
        level: "intermediate",
       
        resources: [
          { title: "BigTable", link: "https://cs.processoagil.com.br/dashboard.html" },
          { title: "Manual de Soluções - Página 32", link: "/midia/manoel.pdf#page=32" },
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
        ],
      },
      {
        id: "emailJuridico",
        title: "E-mails Jurídicos",
        description: "Verificar se o serviço de envio dos e-mails jurídicos (resumo dos diários) está rodando corretamente. Caso esteja travado, tomar providências para garantir que o DJEN seja executado.",        
        level: "beginner",
       
        resources: [
          { title: "Emails", link: "https://berners.processoagil.com/Sistema/Email/Email.asmx" },
          { title: "Manual de Soluções - Página 33", link: "/midia/manoel.pdf#page=33" },
        ],
      },
      {
        id: "emailExpediente",
        title: "E-mails de Expedientes",
        description: "Verificar se os e-mails de expedientes foram gerados corretamente. Se estiverem travados, diagnosticar e corrigir as causas, incluindo travas por códigos falsos ou fontes que não rodaram.",        
        level: "intermediate",  
       
        resources: [
          { title: "Emails", link: " https://berners.processoagil.com/Sistema/Email/Email.asmx" },
          { title: "Manual de Soluções - Página 34", link: "/midia/manoel.pdf#page=34" },
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
        ],
      },
      {
        id: "zabbix",
        title: "Velocidade das Páginas – Zabbix",
        description: "Monitorar o tempo de resposta das páginas dos sistemas por meio do painel do Zabbix, identificando possíveis lentidões ou falhas de carregamento.",        
        level: "beginner",  
       
        resources: [
          { title: "Zabix", link: "http://fallout.processoagil.com/zabbix" },
          { title: "Manual de Soluções - Página 36", link: "/midia/manoel.pdf#page=36" },
        ],
      },
      {
        id: "caern",
        title: "Controladoria Jurídica – CAERN",
        description: "Garantir que a página da controladoria jurídica da CAERN esteja acessível e com desempenho rápido, para que as equipes possam trabalhar sem lentidão ou travamentos.",        
        level: "beginner",  
       
        resources: [
          { title: "CAERN", link: "https://processoagil.com/caern" },
          { title: "Manual de Soluções - Página 37", link: "/midia/manoel.pdf#page=37" },
        ],
      },
      {
        id: "DJEN",
        title: "Execução do DJEN",
        description: "Garantir que os diários do DJEN sejam capturados corretamente pelo sistema ComunicaPJe, processados pelo programa BuscarDiários, e monitorar a execução ao longo do dia.",        
        level: "intermediate",  
       
        resources: [
          { title: "SQL", link: "https://www.w3schools.com/sql/default.asp" },
          { title: "Manual de Soluções - Página 38", link: "/midia/manoel.pdf#page=38" },
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
        ],
      },
      {
        id: "miniPc",
        title: "Mini PCs Ligados e Funcionando",
        description: "Garantir que todos os Mini PCs do setor estejam ativos, conectados e prontos para uso.",        
        level: "beginner",  
       
        resources: [
          { title: "Google remote", link: "https://remotedesktop.google.com/" },
          { title: "Manual de Soluções - Página 40", link: "/midia/manoel.pdf#page=40" },],
      },
      {
        id: "SAG",
        title: "SAG – BigTable",
        description: "Acompanhar a situação dos sistemas SAG na BigTable e identificar falhas, lentidão ou comportamento inesperado.",        
        level: "beginner",  
       
        resources: [
          { title: "BigTable", link: "https://cs.processoagil.com.br/dashboard.html" },
          { title: "Manual de Soluções - Página 41", link: "/midia/manoel.pdf#page=41" },],
      },
      {
        id: "CadastrarTokenA3",
        title: "Cadastrar Token A3 para SAG – INSS",
        description: "Cadastrar e ativar um Token A3 para uso no sistema SAG (INSS), incluindo a configuração de login automático via MongoDB.",        
        level: "intermediate",  
       
        resources: [
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
          { title: "Manual de Soluções - Página 43", link: "/midia/manoel.pdf#page=43" },],
      },
      {
        id: "TramitacoesDesconhecidas",
        title: "Tramitações desconhecidas",
        description: "Acompanhar registros de novos tribunais JusBr",        
        level: "intermediate",  
       
        resources: [
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
          { title: "SQL", link: "https://www.w3schools.com/sql/default.asp" },
          { title: "Manual de Soluções - Página 45", link: "/midia/manoel.pdf#page=45" },],
      },
      {
        id: "dataGiroFila",
        title: "Registro de Data de Giro da Fila",
        description: "Acompanhar a última vez que a fila rodou",        
        level: "intermediate",  
       
        resources: [
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
          { title: "Manual de Soluções - Página 47", link: "/midia/manoel.pdf#page=47" },],
      },
      {
        id: "palupRodando",
        title: "Registro de Palups Rodando",
        description: "Acompanhar a quantidade de programas ProcessoAgil LUP que estão rodando",        
        level: "intermediate",  
       
        resources: [
          { title: "MongoDB", link: "https://learn.mongodb.com/learning-paths/mongodb-python-developer-path" },
          { title: "Manual de Soluções - Página 48", link: "/midia/manoel.pdf#page=48" },],
      },
      {
        id: "velocidadeCaptura",
        title: "Velocidade de captura",
        description: "Acompanhar a quantidade de processos do JusBr que são capturados por hora",        
        level: "beginner",  
       
        resources: [
          { title: "Manual de Soluções - Página 49", link: "/midia/manoel.pdf#page=49" },],
      },
      {
        id: "ultimoDocumentoBt",
        title: "Ver data em que a transparência rodou",
        description: "Acompanhar a data de atualização em que a transparência rodou por último",        
        level: "beginner",  
       
        resources: [
          { title: "BigTable", link: "https://cs.processoagil.com.br/dashboard.html" },],
      },
      {
        id: "sistemaPaliteWeb",
        title: "Sistema Palite Web",
        description: "Identificar quantidade de requisições do sistema web",        
        level: "beginner",  
       
        resources: [
          { title: "Zabix", link: "http://fallout.processoagil.com/zabbix" },
          { title: "Manual de Soluções - Página 36", link: "/midia/manoel.pdf#page=36" },]
      },
      {
        id: "iisSites",
        title: "IIS de sites",
        description: "Acompanhar o desempenho dos servidores IIS, identificando requisições congestionadas e possíveis lentidões nos serviços",        
        level: "beginner",  
       
        resources: [
          { title: "Zabix", link: "http://fallout.processoagil.com/zabbix" },
          { title: "Manual de Soluções - Página 51", link: "/midia/manoel.pdf#page=51" },]
      },
      {
        id: "processosTravados",
        title: "Processos travados",
        description: "Acompanhar se existem processos que travam o sistema ",        
        level: "beginner",  
       
        resources: [
          { title: "Zabix", link: "http://fallout.processoagil.com/zabbix" },
          { title: "Manual de Soluções - Página 54", link: "/midia/manoel.pdf#page=54" },]
      },
      {
        id: "acumuloFila",
        title: "Acumulo na Fila",
        description: "Acompanhar se a fila esté tendo uma vazão significativa",        
        level: "beginner",  
       
        resources: [
          { title: "Manual de Soluções - Página 55", link: "/midia/manoel.pdf#page=55" },]
      },
      {
        id: "upandoFaltantesExp",
        title:"Upar expedientes",
        description: "Identificar e solucionar expedientes que não foram enviados (upados).",        
        level: "beginner",  
       
        resources: [
          { title: "Manual de Soluções - Página 59", link: "/midia/manoel.pdf#page=59" },]
      },
      {
        id: "diariosBugados",
        title:"Diários Bugados",
        description: "Identificar a existência de processos com algum tipo de problema que esteja impactando as capturas.",        
        level: "intermediate",  
       
        resources: [
          { title: "Manual de Soluções - Página 62", link: "/midia/manoel.pdf#page=62" },
          { title: "SQL", link: "https://www.w3schools.com/sql/default.asp" },]
      },
      {
        id: "numerosAtrasados",
        title:"Processos com atraso no envio ao Source",
        description: "Acompanhar processos que sofreram alteração, mas não foram inseridos ou atualizados no Source.",        
        level: "intermediate",  
       
        resources: [
          { title: "Manual de Soluções - Página 57", link: "/midia/manoel.pdf#page=57" },
          { title: "MongoDB", link: "https://www.mongodb.com" },]
      },
      {
        id: "atualizacaoNoSource",
        title:"Atualização no Source",
        description: "Acompanhar processos que sofreram alteração, mas não foram inseridos ou atualizados no Source.",        
        level: "intermediate",  
       
        resources: [
          { title: "Manual de Soluções - Página 57", link: "/midia/manoel.pdf#page=57" },
          { title: "MongoDB", link: "https://www.mongodb.com" },]
      },
      {
        id: "pagamentoProxy",
        title:"Pagamento dos planos de proxy",
        description: "Acompanhar a data para pagamento dos planos de proxy.",        
        level: "beginner",  
       
        resources: [
          { title: "Manual de Soluções - Página 71", link: "/midia/manoel.pdf#page=71" },
          ]
      },
      {
        id: "doubleCheck",
        title:"Double check",
        description: "Verificação de emails Double check e acompanhamento dos casos.",        
        level: "intermediate",
       
        resources: [
          { title: "Manual de Soluções - Página 77", link: "/midia/manoel.pdf#page=77" },
          ]
      },{
        id: "programasSuporte",
        title:"Programas de Suporte",
        description: "Verificar se os programas de suporte estão rodando corretamente.",        
        level: "beginner",  
       
        resources: [
          { title: "Manual de Soluções - Página 79", link: "/midia/manoel.pdf#page=79" },
          ]
      },{
        id: "verSaude",
        title:"Ver saúde",
        description: "Ver saude do onboarding",        
        level: "beginner",  
       
        resources: [
          { title: "zabbix", link: "http://fallout.processoagil.com/zabbix" },
          { title: "Manual de Soluções - Página 81", link: "/midia/manoel.pdf#page=81" },
          ]
      },{
        id: "monitorarReplicas",
        title:"Monitorar réplicas",
        description: "Acompanhar continuamente as replicações no Ômega, garantindo que estejam ocorrendo corretamente.",        
        level: "beginner",  
       
        resources: [
          { title: "Manual de Soluções - Página 65", link: "/midia/manoel.pdf#page=65" },
          ]
      },{
        id: "monitorarManutencao",
        title:"Monitorar manutenção",
        description: "Monitorar as manutenções no SQL, garantindo que estejam sendo executadas corretamente.",        
        level: "beginner",  
       
        resources: [
          { title: "Manual de Soluções - Página 67", link: "/midia/manoel.pdf#page=67" },
          ]
      }
    ],
    
  },
  {
    id: "databases",
    title: "Crítico",
    description: "Principais processos para situações críticas do sistema",
    color: "bg-red-500",
    icon: AlertTriangle,
    topics: [
      
      
    ],
    
  },
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
