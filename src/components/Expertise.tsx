import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCloud,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "../assets/styles/Expertise.scss";

type StackGroup = {
  label: string;
  items: string[];
};

type ExpertiseDomain = {
  index: string;
  title: string;
  icon: IconDefinition;
  summary: string;
  capabilities: string[];
  stacks: StackGroup[];
};

const domains: ExpertiseDomain[] = [
  {
    index: "01",
    title: "Full-Stack Product Engineering",
    icon: faCode,
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
    index: "02",
    title: "DevOps & Delivery Automation",
    icon: faScrewdriverWrench,
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
    index: "03",
    title: "Cloud Native & AI Engineering",
    icon: faCloud,
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

function Expertise() {
  return (
    <section
      className="container"
      id="expertise"
      aria-labelledby="expertise-heading"
    >
      <div className="skills-container">
        <header className="skills-header">
          <p className="skills-eyebrow">How I work</p>
          <h2 id="expertise-heading">Technical Expertise</h2>
          <p className="skills-lede">
            Most developers deliver tickets. I deliver systems — products,
            pipelines, and AI-backed services that other people can run after I
            step away.
          </p>
        </header>

        <div className="skills-grid">
          {domains.map((domain) => (
            <article className="skill-panel" key={domain.index}>
              <div className="skill-panel__top">
                <span className="skill-panel__index" aria-hidden="true">
                  {domain.index}
                </span>
                <FontAwesomeIcon
                  icon={domain.icon}
                  className="skill-panel__icon"
                  aria-hidden="true"
                />
              </div>

              <h3>{domain.title}</h3>
              <p className="skill-panel__summary">{domain.summary}</p>

              <ul className="skill-panel__capabilities">
                {domain.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="skill-panel__stacks">
                {domain.stacks.map((group) => (
                  <div className="stack-group" key={group.label}>
                    <p className="stack-group__label">{group.label}</p>
                    <ul className="stack-group__tags">
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="skill-tag">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
