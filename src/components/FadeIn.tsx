import { Children, type ReactNode } from "react";

/** Delay added between consecutive children's animations, in milliseconds. */
const STAGGER_MS = 50;

/**
 * Staggered fade-up of each child on first paint. Pure CSS animation
 * (see .fade-in in global.scss): no timers, no re-renders, and it is
 * disabled under prefers-reduced-motion.
 *
 * @param children - Each direct child is wrapped and animated in order.
 */
export default function FadeIn({ children }: { children: ReactNode }) {
  return (
    <>
      {Children.map(children, (child, index) => (
        <div className="fade-in" style={{ animationDelay: `${(index + 1) * STAGGER_MS}ms` }}>
          {child}
        </div>
      ))}
    </>
  );
}
