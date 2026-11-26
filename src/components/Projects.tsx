/**
 * Projects section: a card per project with screenshot, problem, outcome
 * and tech stack. Content: src/data/projects.ts.
 */
import { sections } from "../config/portfolio";
import { PROJECT_IMAGE_SIZE, projects, projectsIntro } from "../data/projects";
import "../styles/projects.scss";
import Section from "./Section";
import TagList from "./TagList";

/**
 * Renders the project cards. Each card's image and title link to `href`
 * (or the full-size screenshot) in a new tab; images load lazily.
 */
export default function Projects() {
  return (
    <Section id={sections.projects.id} title="Systems I built" lede={projectsIntro}>
      <div className="projects-grid">
        {projects.map(({ title, image, href, problem, outcome, stack }) => (
          <article className="project" key={title}>
            <a
              className="project__link"
              href={href ?? image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="project__image"
                src={image}
                alt=""
                width={PROJECT_IMAGE_SIZE.width}
                height={PROJECT_IMAGE_SIZE.height}
                loading="lazy"
                decoding="async"
              />
              <h3 className="project__title">{title}</h3>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <p className="project__problem">{problem}</p>
            <p>{outcome}</p>
            <TagList items={stack} className="project__stack" />
          </article>
        ))}
      </div>
    </Section>
  );
}
