import { RiHeartFill, RiGithubFill, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © 2025 Mansi Srivastava. Built with <RiHeartFill className="footer-heart" /> using React.
      </p>
    </footer>
  );
};

export default Footer;