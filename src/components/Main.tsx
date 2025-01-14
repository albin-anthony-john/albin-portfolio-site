import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlbinImg from '../assets/images/albinImg-bg.png';
import "../assets/styles/Main.scss";
import { useGlobalValues } from "../store/GlobalStateContext";

function Main() {

  const {globalValues} = useGlobalValues();

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={AlbinImg}
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href={globalValues.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a href={globalValues.linkedIn} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href={globalValues.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href={globalValues.facebook} target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href={globalValues.twitter} target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </div>
          <h1>Albin Antony</h1>
          <p>Full Stack Engineer</p>

          <div
            style={{
              textAlign: "right",
              fontStyle: "italic",
              fontSize: "0.7rem",
              marginTop : '3rem'
            }}
          >
            <p>Coding is about “Solving real world problem's”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
