import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Logo = ({ toggleMenu, closeMenu }) => {
  return (
    <div className="Container-left">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <h1 className="Nav-logo">
        <Link to={"/"} onClick={closeMenu}>
          <img alt="MovieXplorer Logo" />
          Movi<span>eXplorer</span>
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
