/**
 * Content for the Technical Expertise section (rendered by components/Expertise.tsx).
 * Edit this file to change domains, capabilities or technologies.
 */
import type { SvgIconComponent } from "@mui/icons-material";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import CodeIcon from "@mui/icons-material/Code";

/** A labelled group of technologies, shown as a row of tags. */
export interface StackGroup {
  /** Group heading, e.g. "Frontend". */
  label: string;
  /** Technology names. Must be unique within the group. */
  items: string[];
}

/** One expertise panel. */
export interface ExpertiseDomain {
  /** Panel heading. Must be unique (used as the React key). */
  title: string;
  /** MUI icon shown in the panel's top corner. */
  icon: SvgIconComponent;
  /** Short paragraph under the heading. */
  summary: string;
  /** Bullet points describing what this work delivers. */
  capabilities: string[];
  /** Technology groups listed at the bottom of the panel. */
  stacks: StackGroup[];
}

/** Intro paragraph shown under the section heading. */
export const expertiseIntro =
  "Most developers deliver tickets. I deliver systems — products, pipelines, and AI-backed services that other people can run after I step away.";

/** Expertise panels, in display order (numbered 01, 02, ...). */
export const expertiseDomains: ExpertiseDomain[] = [
  {
    title: "Full-Stack Product Engineering",
    icon: CodeIcon,
    summary:
      "I don't ship isolated screens. I own the path from React UI to .NET API to the database, so a feature is one system — not three handoffs.",
    capabilities: [
      "Design APIs, schemas, and UI contracts together so front and back stay aligned",
      "Build React TypeScript clients against .NET services with explicit REST, SignalR, and webhook flows",
      "Model SQL and document data so queries stay predictable as volume grows",
      "Take a product idea through design, implementation, and production without dropping ownership",
    ],
    stacks: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind", "Bootstrap"],
      },
      {
        label: "Backend",
        items: [".NET 10", "C#", "REST APIs", "Microservices", "SignalR", "Webhooks", "Redis", "WebSocket", "Kafka"],
      },
      {
        label: "Data & runtime",
        items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Nginx", "IIS"],
      },
    ],
  },
  {
    title: "DevOps & Delivery Automation",
    icon: BuildIcon,
    summary:
      "A feature is unfinished until another engineer can ship it safely. I turn releases into a pipeline, not a ritual.",
    capabilities: [
      "Automate build, test, and deploy with GitHub Actions so merges can go live the same day",
      "Separate secrets and environment config from source so staging and production stay consistent",
      "Instrument services with OpenTelemetry, Prometheus, and Grafana so failures are visible before users report them",
      "Run delivery in Jira with a clear path from ticket to production, not status theater",
    ],
    stacks: [
      {
        label: "Pipeline",
        items: ["Git", "GitHub Actions", "CI/CD", "Docker", "Kubernetes"],
      },
      {
        label: "Operations",
        items: ["OpenTelemetry", "Prometheus", "Grafana", "User Secrets", "Environment Variables", "Postman"],
      },
    ],
  },
  {
    title: "Cloud Native & AI Engineering",
    icon: CloudIcon,
    summary:
      "I treat cloud and AI as product infrastructure: deployable services, retrieval over your data, and automation that removes manual work.",
    capabilities: [
      "Package services for Docker and Kubernetes so the same build runs locally and in the cloud",
      "Put LLM APIs behind real product flows — search, drafting, and ops helpers — not standalone chat demos",
      "Ground answers with RAG and vector search so the model uses your data, not guesswork",
      "Expose tools to agents through MCP when a workflow needs the model to act, not only reply",
    ],
    stacks: [
      {
        label: "Cloud",
        items: ["Docker", "Kubernetes", "Cloudflare", "Serverless patterns", "API gateways"],
      },
      {
        label: "AI",
        items: ["OpenAI APIs", "LLM APIs", "Prompt design", "RAG Pipelines", "Vector Databases", "MCP"],
      },
      {
        label: "Runtime",
        items: ["Python/FastAPI", "Node services", "Observability"],
      },
    ],
  },
];
