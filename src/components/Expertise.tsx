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
      "I design and ship complete web products—APIs, data models, and interfaces—so features move from backlog to production as one coherent system.",
    capabilities: [
      "Own the full path from UI interaction to database write",
      "Build React frontends with typed contracts against .NET backends",
      "Shape schemas and queries that stay fast as data grows",
      "Translate product goals into maintainable SDLC deliverables",
    ],
    stacks: [
      {
        label: "Frontend",
        items: ["React", "JQuery", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "Tailwind", "Bootstrap"],
      },
      {
        label: "Backend",
        items: [".NET 10", "C#", "REST APIs", "Postman", "Microservices", "WebSocket", "Webhooks", "SignalR", "Kafka", "OpenTelemetry", "Prometheus", "Grafana", "Docker", "Kubernetes", "Nginx", "IIS"],
      },
      {
        label: "Data",
        items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB"],
      },
    ],
  },
  {
    index: "02",
    title: "DevOps & Delivery Automation",
    icon: faScrewdriverWrench,
    summary:
      "Shipping is unfinished until release is repeatable. I wire the pipeline so every merge can be built, verified, and promoted with confidence.",
    capabilities: [
      "Automate build, test, and deploy with GitHub Actions",
      "Cut release friction with CI/CD that teams actually trust",
      "Keep environments consistent from staging through go-live",
      "Track work clearly across engineering and delivery with Jira",
    ],
    stacks: [
      {
        label: "Pipeline",
        items: ["Git", "GitHub Actions", "CI/CD", "Git CLI"],
      },
      {
        label: "Delivery",
        items: ["Release automation", "User Secrets", "Environment Variables", "Jira", "Agile", "Scrum", "Kanban", "DevOps", "Continuous Integration", "Continuous Delivery", "Continuous Deployment"],
      },
    ],
  },
  {
    index: "03",
    title: "Cloud Native & AI Engineering",
    icon: faCloud,
    summary:
      "I build cloud-ready services and AI-assisted product features—semantic search, model APIs, and automation that turns raw data into useful answers.",
    capabilities: [
      "Design services that deploy cleanly on modern cloud platforms",
      "Integrate LLM APIs into real product workflows, not demos",
      "Build retrieval and semantic-search paths for grounded answers",
      "Combine automation with AI to reduce manual operational load",
    ],
    stacks: [
      {
        label: "Cloud",
        items: ["Docker", "Kubernetes", "Cloudflare", "Serverless patterns", "API gateways"],
      },
      {
        label: "AI",
        items: ["OpenAI APIs", "Prompt design", "MCP", "LLM APIs", "RAG Pipelines", "Vector Databases", "Vector search"],
      },
      {
        label: "Runtime",
        items: ["Python/FastAPI services", "Node services", "Observability basics"],
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
            Three practice areas I use to take systems from idea to production—
            product engineering, reliable delivery, and cloud-native AI features.
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
