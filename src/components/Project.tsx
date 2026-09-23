import "../assets/styles/Project.scss";

function Project() {

  const filmateAiImage = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images/filmate-ai.png";
  const highSpeedChaseImage = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images/high-speed-chase.png";
  const astroRaidersImage = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images/astro-raiders.png";
  const datumImage = "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio/images/datum.png";

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
            href={filmateAiImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={filmateAiImage}
              className="zoom"
              alt="Filmate AI movie finder app screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={filmateAiImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Filmate AI</h3>
          </a>
          <p>
            Developed movie finder app with semantic search and sentiment
            analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.
          </p>
        </article>
        <article className="project">
          <a
            href={highSpeedChaseImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={highSpeedChaseImage}
              className="zoom"
              alt="High Speed Chase 3D racing game screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={highSpeedChaseImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>High Speed Chase</h3>
          </a>
          <p>
            Designed, developed, and launched a 3D multiplayer racing game with
            C# and Unity. This is available on Itch.io for gamers worldwide to
            enjoy.
          </p>
        </article>
        <article className="project">
          <a
            href={astroRaidersImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={astroRaidersImage}
              className="zoom"
              alt="Astro Raiders 2D shooting game screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={astroRaidersImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Astro Raiders</h3>
          </a>
          <p>
            Developed and released a 2D shooting game with C# and Unity. This
            project is hosted on the Itch.io public marketplace.
          </p>
        </article>
        <article className="project">
          <a
            href={datumImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={datumImage}
              className="zoom"
              alt="Datum integrated learning platform screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href={datumImage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Datum: Integrated Learning Platform</h3>
          </a>
          <p>
            This is an online educational platform that provides high-quality,
            data science-focused learning resources in the Japanese language. I
            created the entire platform from scratch using Ruby on Rails.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Project;
