/**
 * Single source of truth for identity, contact, social and SEO data.
 *
 * This module is plain data on purpose: it is imported both by the React app
 * and by the build (vite-plugin-seo.ts generates <head> tags, JSON-LD,
 * manifest.json and the <noscript> fallback from it). Do not import React,
 * MUI or styles here.
 */

/** Base URL of the CDN that hosts images and icons (no trailing slash). */
export const CDN_BASE =
  "https://albin-cdn-assets.albinanthony-tech.workers.dev/albin-portfolio";

/** Supported social networks. Each needs an icon in components/SocialLinks.tsx. */
export type SocialId = "github" | "linkedin" | "instagram" | "facebook" | "x";

/** A social profile link. */
export interface SocialProfile {
  id: SocialId;
  /** Network name, used in accessible labels (e.g. "GitHub"). */
  label: string;
  /** Full profile URL. Also listed as `sameAs` in the JSON-LD. */
  url: string;
}

/** A page section that the navigation can link to. */
export interface SectionLink {
  /** The section's element id (link target `#id`). */
  id: string;
  /** Link text in the navigation. */
  label: string;
}

/** The portfolio owner: shown in the hero and footer and used in SEO metadata. */
export const person = {
  name: "Albin Antony",
  jobTitle: "Full Stack Engineer",
  email: "albinanthony.tech@gmail.com",
  tagline: "Coding is about solving real world problems.",
  location: { region: "Tamil Nadu", countryCode: "IN" },
  portrait: {
    src: `${CDN_BASE}/images/albin-mylook.png`,
    width: 1254,
    height: 1254,
  },
} as const;

/** Rendered in this order wherever social links appear. */
export const socialProfiles: readonly SocialProfile[] = [
  { id: "github", label: "GitHub", url: "https://github.com/albin-anthony-john" },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/albin-anthony-john-784092410/",
  },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/de.anthony.albin" },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100079775847839",
  },
  { id: "x", label: "X", url: "https://x.com/albin_anthony24" },
];

/** Page sections reachable from the navigation. Components use these ids. */
export const sections = {
  expertise: { id: "expertise", label: "Expertise" },
  history: { id: "history", label: "History" },
  projects: { id: "projects", label: "Projects" },
  contact: { id: "contact", label: "Contact" },
} as const satisfies Record<string, SectionLink>;

/** Navigation links, in the order the sections are declared above. */
export const navItems: readonly SectionLink[] = Object.values(sections);

/** Site-wide metadata used by the SEO plugin (title, manifest, locale, favicon). */
export const site = {
  name: `${person.name} - Portfolio`,
  title: `${person.name} | ${person.jobTitle}`,
  locale: "en_IN",
  language: "en",
  favicon: `${CDN_BASE}/icons/favicon.ico`,
  /** Used for the meta description, keywords and JSON-LD `knowsAbout`. */
  specialties: [
    ".NET",
    "C#",
    "React",
    "TypeScript",
    "DevOps",
    "Docker",
    "Kubernetes",
    "Kafka",
    "Hangfire",
    "PostgreSQL",
    "High-performance SQL",
    "Valkey",
    "GitHub Actions",
    "Linux",
  ],
} as const;
