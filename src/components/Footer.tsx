/**
 * Site footer: social links, copyright line (current year) and credit.
 */
import { person } from "../config/portfolio";
import "../styles/footer.scss";
import SocialLinks from "./SocialLinks";

/** Page footer. Name and email come from `person` in src/config/portfolio.ts. */
export default function Footer() {
  const mailto = `mailto:${person.email}`;

  return (
    <footer className="site-footer">
      <SocialLinks />
      <p>
        © {new Date().getFullYear()} <a href={mailto}>{person.name}</a>. All Rights Reserved.
      </p>
      <p>
        A Portfolio Designed & Built by <a href={mailto}>{person.name}</a>.
      </p>
    </footer>
  );
}
