import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  ".NET 8.0",
  "C#",
  "React",
  "Express",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "JQuery",
  "Bootstrap",
  "Tailwind",
  "SQL",
  "SQL Server",
  "MySql",
  "PostgreSql",
  "NoSql",
  "MongoDb",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Git CLI",
  "C#",
  "JavaScript",
  "Jira",
  "CI/CD Pipeline",
];

const labelsThird = [
  "Avalonia UI",
  "C#",
  "MVVM Pattern",
  "XML",
  "XAML",
  "AXAML",
];

function Expertise() {
  return (
    <section className="container" id="expertise" aria-labelledby="expertise-heading">
      <div className="skills-container">
        <h2 id="expertise-heading">Expertise</h2>
        <div className="skills-grid">
          <article className="skill">
            <FontAwesomeIcon icon={faCode} size="3x" aria-hidden="true" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse Array of web Applications from Scratch
              using modern technologies such as React and DotNet. I have a
              strong proficiency in the SDLC process and Frontend + Backend
              development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </article>

          <article className="skill">
            <FontAwesomeIcon icon={faGithub} size="3x" aria-hidden="true" />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients set up DevOps
              testing, CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </article>

          <article className="skill">
            <FontAwesomeIcon icon={faDesktop} size="3x" aria-hidden="true" />
            <h3>Cross Platform Desktop Development</h3>
            <p>
              Skilled Cross-Platform Desktop Developer specializing in creating
              robust and high-performance desktop applications using Avalonia UI
              and C#. Proficient in building modern, responsive, and
              platform-independent user interfaces.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
