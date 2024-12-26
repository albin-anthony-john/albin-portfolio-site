import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </div>
          <h1>Albin Antony</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

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
