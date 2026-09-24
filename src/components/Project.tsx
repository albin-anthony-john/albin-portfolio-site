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
    title: "Open Object Storage",
    image: `${CDN}/open-object-storage.png`,
    problem:
      "An Amazon S3–inspired object store for any file type — images, backups, documents, and blobs — at scale.",
    outcome:
      "Open Object Storage gives you bucket-style upload, fetch, and organization without locking you to one cloud vendor. It is built to hold large volumes of objects and serve them through a simple API, the way S3 does, so apps can treat files as infrastructure instead of local folders.",
    stack: [".NET", "S3-style API", "Object storage", "Scalable I/O"],
  },
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
          Four systems I designed and built: a password vault, an RDBMS
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
