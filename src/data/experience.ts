/**
 * Content for the Career History section (rendered by components/Timeline.tsx).
 * Edit this file to change roles or education; no JSX changes needed.
 */

/** One entry on the career timeline. */
export interface TimelineEntry {
  /** Selects the icon and styling: a job or a qualification. */
  kind: "work" | "education";
  /** Job title or qualification (timeline card heading). */
  role: string;
  /** Employer or institution, with location. */
  organization: string;
  /** Display text for the dates, e.g. "2023 - 2024" or "2025 - present". */
  period: string;
  /** One-paragraph description of the role. */
  summary: string;
}

/** Shared organization line for the Boscosoft roles. */
const BOSCOSOFT = "Boscosoft Pvt Ltd, Tirupattur, Tamil Nadu, India";

/** Intro paragraph shown under the section heading. */
export const historyIntro =
  "One company, increasing ownership — from intern shipping prototypes to the engineer who owns delivery, not just code.";

/** Newest first. */
export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    role: "Associate Software Engineer",
    organization: BOSCOSOFT,
    period: "2025 - present",
    summary:
      "Own full-stack delivery on production systems — React and .NET features, release automation, and the operational work that keeps a go-live from becoming a fire drill. Trusted to take a problem from design through deploy, not only implement a ticket.",
  },
  {
    kind: "work",
    role: "Full Stack Developer",
    organization: BOSCOSOFT,
    period: "2023 - 2024",
    summary:
      "Built both sides of product features: interfaces people could use and APIs that held up. Started making system-design calls — how data should move, where a contract should sit, and how a teammate should pick the work up after me.",
  },
  {
    kind: "work",
    role: "Staff Engineer Intern",
    organization: BOSCOSOFT,
    period: "2023",
    summary:
      "Learned the product by building it: UI prototypes, APIs, and documentation that other engineers could follow. Converted intern speed into production habits — write it, prove it, leave a trail.",
  },
  {
    kind: "education",
    role: "BCA Graduate",
    organization: "Don Bosco College, Tamil Nadu",
    period: "2020 - 2023",
    summary:
      "Built the base I still use: data structures, OOP, and application design. The degree taught me how to reason about a problem; Boscosoft taught me how to ship it.",
  },
];
