import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/Footer.scss'
import { useGlobalValues } from '../store/GlobalStateContext';

function Footer() {

  const {globalValues} = useGlobalValues();

  return (
    <footer>
      <div>
        <a href={globalValues.github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={globalValues.linkedIn} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href={globalValues.instagram} target="_blank" rel="noreferrer"><InstagramIcon/></a>
        <a href={globalValues.facebook} target="_blank" rel="noreferrer"><FacebookIcon/></a>
        <a href={globalValues.twitter} target="_blank" rel="noreferrer"><TwitterIcon/></a>
      </div>
      <p>© {new Date().getFullYear()} <a href="mailto:albinantony@dbcyelagiri.edu.in" >Albin Antony</a>. All Rights Reserved.</p>
      <p>A Portfolio Designed & Built by <a href="mailto:albinantony@dbcyelagiri.edu.in" >Albin Antony</a> with 💜.</p>
    </footer>
  );
}

export default Footer;