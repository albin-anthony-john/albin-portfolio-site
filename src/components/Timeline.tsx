/**
 * Career History section: work and education entries on a vertical timeline
 * (react-vertical-timeline-component). Content: src/data/experience.ts.
 */
import type { SvgIconComponent } from "@mui/icons-material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { sections } from "../config/portfolio";
import { historyIntro, timeline, type TimelineEntry } from "../data/experience";
import "../styles/timeline.scss";
import Section from "./Section";

/** Icon shown on the timeline for each entry kind. */
const ICONS: Record<TimelineEntry["kind"], SvgIconComponent> = {
  work: WorkIcon,
  education: SchoolIcon,
};

/**
 * Renders `timeline` in data order (newest first). The entry kind sets the
 * icon and a `vertical-timeline-element--{kind}` class for styling.
 */
export default function Timeline() {
  return (
    <Section id={sections.history.id} title="Career History" lede={historyIntro}>
      <VerticalTimeline lineColor="var(--pf-timeline-line)">
        {timeline.map(({ kind, role, organization, period, summary }) => {
          const Icon = ICONS[kind];
          return (
            <VerticalTimelineElement
              key={`${role}-${period}`}
              className={`vertical-timeline-element--${kind}`}
              date={period}
              icon={<Icon />}
            >
              <h3 className="vertical-timeline-element-title">{role}</h3>
              <h4 className="vertical-timeline-element-subtitle">{organization}</h4>
              <p>{summary}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
}
