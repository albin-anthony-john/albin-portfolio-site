import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/bsoft-albin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="#" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="#" target="_blank" rel="noreferrer"><InstagramIcon/></a>
        <a href="#" target="_blank" rel="noreferrer"><FacebookIcon/></a>
        <a href="#" target="_blank" rel="noreferrer"><TwitterIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} <a href="mailto:albinantony@dbcyelagiri.edu.in" >Albin Antony</a>. All Rights Reserved.</p>
      <p>A Portfolio Designed & Built by <a href="mailto:albinantony@dbcyelagiri.edu.in" >Albin Antony</a> with 💜.</p>
    </footer>
  );
}

export default Footer;