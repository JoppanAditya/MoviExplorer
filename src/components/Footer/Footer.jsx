import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="Footer-container">
      <div className="Footer-wrapper">
        Made with <FontAwesomeIcon icon={faHeart} /> from Indonesia.
      </div>
    </footer>
  );
};

export default Footer;
