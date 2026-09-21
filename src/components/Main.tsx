import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlbinImg from "../assets/images/albinImg-bg.png";
import "../assets/styles/Main.scss";
import { useGlobalValues } from "../store/GlobalStateContext";

function Main() {
  const { globalValues } = useGlobalValues();

  return (
    <section className="container" id="about" aria-labelledby="hero-heading">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={AlbinImg}
            alt="Portrait of Albin Antony, Full Stack Engineer"
            width={280}
            height={280}
            decoding="async"
          />
        </div>
        <div className="content">
          <nav className="social_icons" aria-label="Social profiles">
            <a
              href={globalValues.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Albin Antony on GitHub"
            >
              <GitHubIcon aria-hidden="true" />
            </a>
            <a
              href={globalValues.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Albin Antony on LinkedIn"
            >
              <LinkedInIcon aria-hidden="true" />
            </a>
            <a
              href={globalValues.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Albin Antony on Instagram"
            >
              <InstagramIcon aria-hidden="true" />
            </a>
            <a
              href={globalValues.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Albin Antony on Facebook"
            >
              <FacebookIcon aria-hidden="true" />
            </a>
            <a
              href={globalValues.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Albin Antony on X"
            >
              <TwitterIcon aria-hidden="true" />
            </a>
          </nav>
          <h1 id="hero-heading">Albin Antony</h1>
          <p>Full Stack Engineer</p>
          <p className="hero-tagline">
            Coding is about solving real world problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
