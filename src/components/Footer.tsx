import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/X";
import "../assets/styles/Footer.scss";
import { useGlobalValues } from "../store/GlobalStateContext";

function Footer() {
  const { globalValues } = useGlobalValues();

  return (
    <footer role="contentinfo">
      <nav aria-label="Footer social profiles">
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
      <p>
        © {new Date().getFullYear()}{" "}
        <a href="mailto:albinantony@dbcyelagiri.edu.in">Albin Antony</a>. All
        Rights Reserved.
      </p>
      <p>
        A Portfolio Designed & Built by{" "}
        <a href="mailto:albinantony@dbcyelagiri.edu.in">Albin Antony</a>.
      </p>
    </footer>
  );
}

export default Footer;
