import "../assets/styles/Project.scss";

function Project() {

  const cipherVaultImg = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images/cipher-vault.png";
  const migrationStudioImg = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images/migration-studio.png";
  const olympusBackendImg = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images/olympus-backend.png";
  const openObjectStorageImg = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images/open-object-storage.png";

  return (
    <section
      className="projects-container"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading">Personal Projects</h2>
      <div className="projects-grid">
        <article className="project">
          <a
            href={cipherVaultImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cipherVaultImg}
              className="zoom"
              alt="Cipher Vault screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={migrationStudioImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Cipher Vault</h3>
          </a>
          <p>
            Developed a secure vault for storing sensitive data with AES-256 encryption and secure key management.
          </p>
        </article>
        <article className="project">
          <a
            href={migrationStudioImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={migrationStudioImg}
              className="zoom"
              alt="Migration Studio screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={migrationStudioImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Migration Studio</h3>
          </a>
          <p>
            Developed a migration studio for migrating data from one database to another with a user-friendly interface.
          </p>
        </article>
        <article className="project">
          <a
            href={olympusBackendImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={olympusBackendImg}
              className="zoom"
              alt="Olympus Backend screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={olympusBackendImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Olympus Backend</h3>
          </a>
          <p>
            Developed a backend for the Olympus project with a focus on scalability and performance.
          </p>
        </article>
        <article className="project">
          <a
            href={openObjectStorageImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={openObjectStorageImg}
              className="zoom"
              alt="Open Object Storage screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={openObjectStorageImg}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Open Object Storage</h3>
          </a>
          <p>
            Developed an open object storage for storing and retrieving objects with a focus on scalability and performance.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Project;
