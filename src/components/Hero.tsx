/**
 * Hero (intro) section at the top of the page: portrait, name, job title,
 * email, tagline and social links.
 */
import { person } from "../config/portfolio";
import "../styles/hero.scss";
import SocialLinks from "./SocialLinks";

/**
 * Page intro. Holds the page's only <h1>; the portrait is preloaded by the
 * SEO plugin because it is the largest element on first paint.
 */
export default function Hero() {
  const { name, jobTitle, email, tagline, portrait } = person;

  return (
    <section className="hero" id="about" aria-labelledby="hero-heading">
      <div className="hero__avatar">
        <img
          src={portrait.src}
          alt={`Portrait of ${name}, ${jobTitle}`}
          width={portrait.width}
          height={portrait.height}
          decoding="async"
        />
      </div>
      <div className="hero__content">
        <SocialLinks className="hero__social" />
        <h1 id="hero-heading">{name}</h1>
        <p className="hero__title">{jobTitle}</p>
        <a className="hero__email" href={`mailto:${email}`}>
          {email}
        </a>
        <p className="hero__tagline">{tagline}</p>
      </div>
    </section>
  );
}
