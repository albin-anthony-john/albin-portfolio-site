import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <section id="history" aria-labelledby="history-heading">
      <div className="items-container">
        <h2 id="history-heading">Career History</h2>
        <p className="history-lede">
          One company, increasing ownership — from intern shipping prototypes to the engineer who owns delivery, not just code.
        </p>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2025 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Associate Software Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Boscosoft Pvt Ltd, Tirupattur, Tamil Nadu, India
            </h4>
            <p>
              Own full-stack delivery on production systems — React and .NET
              features, release automation, and the operational work that keeps
              a go-live from becoming a fire drill. Trusted to take a problem
              from design through deploy, not only implement a ticket.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Boscosoft Pvt Ltd, Tirupattur, Tamil Nadu, India
            </h4>
            <p>
              Built both sides of product features: interfaces people could
              use and APIs that held up. Started making system-design calls —
              how data should move, where a contract should sit, and how a
              teammate should pick the work up after me.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Staff Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Boscosoft Pvt Ltd, Tirupattur, Tamil Nadu, India
            </h4>
            <p>
              Learned the product by building it: UI prototypes, APIs, and
              documentation that other engineers could follow. Converted
              intern speed into production habits — write it, prove it, leave
              a trail.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BCA Graduate</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Don Bosco College, Tamil Nadu
            </h4>
            <p>
              Built the base I still use: data structures, OOP, and
              application design. The degree taught me how to reason about a
              problem; Boscosoft taught me how to ship it.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
