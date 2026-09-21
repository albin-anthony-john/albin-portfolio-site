import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

function Project() {
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
            href="https://www.filmate.club/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mock10}
              className="zoom"
              alt="Filmate AI movie finder app screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.filmate.club/"
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
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mock09}
              className="zoom"
              alt="High Speed Chase 3D racing game screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
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
            href="https://yujisatojr.itch.io/spacecraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mock08}
              className="zoom"
              alt="Astro Raiders 2D shooting game screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://yujisatojr.itch.io/spacecraft"
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
            href="https://www.datumlearn.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mock07}
              className="zoom"
              alt="Datum integrated learning platform screenshot"
              width="100%"
              loading="lazy"
              decoding="async"
            />
          </a>
          <a
            href="https://www.datumlearn.com/"
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
