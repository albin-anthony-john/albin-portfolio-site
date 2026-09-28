import "../assets/styles/Project.scss";

const CDN = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images";

type ProjectItem = {
  title: string;
  image: string;
  href?: string;
  problem: string;
  outcome: string;
  stack: string[];
};

const projects: ProjectItem[] = [
  {
    title: "Cipher Vault",
    image: `${CDN}/cipher-vault.png`,
    problem:
      "A Bitwarden-style central password manager — one vault for logins, secrets, and sensitive notes.",
    outcome:
      "Cipher Vault stores credentials in a zero-knowledge model: data is encrypted on the client, the master password never leaves the device, and only you can unlock the vault. Built for people who need a shared, safe place for secrets without trusting a plaintext database.",
    stack: [".NET", "MVC", "AES-256", "Argon2", "Zero-knowledge vault"],
  },
  {
    title: "Migration Studio",
    image: `${CDN}/migration-studio.png`,
    problem:
      "A high-speed, performance-first tool for moving database objects — same engine or cross-database, RDBMS only.",
    outcome:
      "Migration Studio copies tables, views, procedures, and related objects from one relational database to another. It is built for one-to-one and cross-DB moves (for example SQL Server to PostgreSQL or MySQL), not NoSQL. The goal is simple: keep the business running while the schema and data land complete, fast, and without a one-off script.",
    stack: [".NET", "RDBMS", "Cross-database migration", "SQL objects"],
  },
  {
    title: "Olympus Backend",
    image: `${CDN}/olympus-backend.png`,
    problem:
      "A complete Amazon-style ecommerce backend, designed from the first request for raw speed, scale, and security.",
    outcome:
      "Olympus is the server side of a high-volume store: catalog, cart, checkout, and order flows behind APIs that stay fast under load. The design follows the same hard rules used at Amazon, Netflix, Uber, Google, Microsoft, and GitHub — clear service boundaries, performance-first data access, and security as a default, not a later patch.",
    stack: [".NET", "Ecommerce APIs", "Microservices", "High-performance SQL"],
  },
  {
    title: "Educacion Pro",
    image: `${CDN}/educacion-app.png`,
    problem:
      "A multi-tenant school management system built specifically for Indian schools, bringing academics, administration, fees, attendance, communication, and daily operations into one platform.",
    outcome:
      "Educacion Pro provides a complete digital platform for managing multiple schools from a single system, with multilingual support, role-based access, academic and examination management, fee collection, transport, library, staff management, communication, reports, and more. The focus is simple UX, high performance, and practical support for the way Indian schools actually operate.",
    stack: [".NET", "React", "Multi-tenant", "Multilingual", "School Management"],
  },
  {
    title: "Open Object Storage",
    image: `${CDN}/open-storage-object.png`,
    problem:
      "An S3-inspired object storage platform for storing and managing files of any type — from documents and images to backups and large-scale application data.",
    outcome:
      "Open Object Storage provides bucket-based storage with public and private access, scalable object management, secure policies, and high-performance file I/O. It gives applications an S3-style storage layer without depending entirely on a single cloud provider, making objects available through simple APIs while keeping storage scalable and organized.",
    stack: [".NET", "S3-style API", "Object Storage", "Scalable I/O", "Access Policies"],
  },
  {
    title: "Albin.Export",
    image: `${CDN}/albin-export.png`,
    problem:
      "A reusable, fully customizable open-source .NET export library for generating high-quality reports, analytics, receipts, invoices, and business documents.",
    outcome:
      "Albin.Export provides a unified export architecture for PDF, Excel, CSV, Word, ZIP, PNG, SVG, and HTML. It is built around extensible interfaces, configurable properties, templates, styling, layouts, charts, and export-specific options, allowing developers to generate professional documents and reports without building a separate export implementation for every project.",
    stack: [".NET", "NuGet", "Open Source", "Custom Exporters", "Reports & Analytics"],
  },
  {
    title: "Unity Chat",
    image: `${CDN}/unity-chat-app.png`,
    problem:
      "A lightweight, high-speed team communication platform designed for direct conversations and low-to-medium sized group chats without the complexity of a large enterprise collaboration suite.",
    outcome:
      "Unity Chat delivers real-time messaging for individuals and teams with group conversations, file sharing, reactions, notifications, presence, and voice/video communication. The platform focuses on fast communication, a simple user experience, and efficient real-time infrastructure for teams that need a focused alternative to heavier collaboration platforms.",
    stack: [".NET", "React", "SignalR", "Real-time Chat", "WebSockets"],
  },
  {
    title: "Ticket Management System",
    image: `${CDN}/ticket-management-system.png`,
    problem:
      "A multi-tenant project and ticket management platform inspired by tools like Jira, allowing organizations to manage multiple projects, teams, and work items from one central system.",
    outcome:
      "The platform lets organizations register and manage their workspace, create unlimited projects, and organize work through project-specific Kanban boards. Teams can create, assign, prioritize, track, and complete tickets with statuses, labels, sprints, collaboration, and project-level visibility — providing a focused and lightweight alternative for structured software and business workflows.",
    stack: [".NET", "React", "Multi-tenant", "Kanban", "Ticket Management"],
  }
];

function Project() {
  return (
    <section
      className="projects-container"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <header className="projects-header">
        <h2 id="projects-heading">Systems I built</h2>
        <p className="projects-lede">
          Seven systems and One Custom Nuget Package I designed and built: a password vault, an RDBMS
          migration studio, an ecommerce backend, and S3-style object storage.
        </p>
      </header>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <a
              href={project.href ?? project.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                className="zoom"
                alt={`${project.title} screenshot`}
                width="100%"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a
              href={project.href ?? project.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.title}</h3>
            </a>
            <p className="project-problem">{project.problem}</p>
            <p>{project.outcome}</p>
            <ul className="project-stack">
              {project.stack.map((item) => (
                <li key={item}>
                  <span className="project-tag">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
