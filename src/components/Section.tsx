/**
 * Shared layout wrapper used by every content section.
 */
import type { ReactNode } from "react";

interface SectionProps {
  /** Anchor id; navigation links target it. Use an id from `sections` in portfolio.ts. */
  id: string;
  /** Section heading, rendered as <h2>. */
  title: string;
  /** Optional small label shown above the heading. */
  eyebrow?: string;
  /** Optional intro paragraph shown under the heading. */
  lede?: string;
  /** Section body. */
  children: ReactNode;
}

/**
 * Standard page section: shared gutters, heading and optional intro.
 * The <section> is labelled by its heading for screen readers.
 */
export default function Section({ id, title, eyebrow, lede, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <header className="section__header">
        {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
        <h2 id={headingId} className="section__title">
          {title}
        </h2>
        {lede && <p className="section__lede">{lede}</p>}
      </header>
      {children}
    </section>
  );
}
