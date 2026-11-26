/**
 * List of small pill-style tags (technology names).
 */
interface TagListProps {
  /** Tag texts, rendered in order. Must be unique (used as keys). */
  items: readonly string[];
  /** Extra class added after the base `tag-list` class. */
  className?: string;
}

/** Renders `items` as a `<ul>` of `.tag` pills. Used by Expertise and Projects. */
export default function TagList({ items, className }: TagListProps) {
  return (
    <ul className={className ? `tag-list ${className}` : "tag-list"}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
