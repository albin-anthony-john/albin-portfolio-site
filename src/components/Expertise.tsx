/**
 * Technical Expertise section: one numbered panel per domain, listing
 * capabilities and grouped technology tags. Content: src/data/expertise.ts.
 */
import { sections } from "../config/portfolio";
import { expertiseDomains, expertiseIntro } from "../data/expertise";
import "../styles/expertise.scss";
import Section from "./Section";
import TagList from "./TagList";

/** Renders every entry of `expertiseDomains` as a panel in a responsive grid. */
export default function Expertise() {
  return (
    <Section
      id={sections.expertise.id}
      eyebrow="How I work"
      title="Technical Expertise"
      lede={expertiseIntro}
    >
      <div className="expertise-grid">
        {expertiseDomains.map(({ title, icon: Icon, summary, capabilities, stacks }, index) => (
          <article className="skill-panel" key={title}>
            <div className="skill-panel__top">
              <span className="skill-panel__index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon className="skill-panel__icon" />
            </div>

            <h3>{title}</h3>
            <p className="skill-panel__summary">{summary}</p>

            <ul className="skill-panel__capabilities">
              {capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="skill-panel__stacks">
              {stacks.map((group) => (
                <div key={group.label}>
                  <p className="skill-panel__stack-label">{group.label}</p>
                  <TagList items={group.items} />
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
