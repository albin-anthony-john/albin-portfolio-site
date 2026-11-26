/**
 * Row of icon links to each social profile plus an email link.
 * Used in the hero and the footer.
 */
import type { SvgIconComponent } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { person, socialProfiles, type SocialId } from "../config/portfolio";

/** Typed by SocialId, so adding a network to the config requires an icon here. */
const ICONS: Record<SocialId, SvgIconComponent> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
};

interface SocialLinksProps {
  /** Extra class added after the base `social-links` class. */
  className?: string;
}

/**
 * Social profile links in `socialProfiles` order, then an email link.
 * Profiles open in a new tab; every icon has a descriptive aria-label.
 */
export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul
      className={className ? `social-links ${className}` : "social-links"}
      aria-label="Social profiles"
    >
      {socialProfiles.map(({ id, label, url }) => {
        const Icon = ICONS[id];
        return (
          <li key={id}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on ${label} (opens in a new tab)`}
            >
              <Icon />
            </a>
          </li>
        );
      })}
      <li>
        <a href={`mailto:${person.email}`} aria-label={`Email ${person.name} at ${person.email}`}>
          <EmailIcon />
        </a>
      </li>
    </ul>
  );
}
