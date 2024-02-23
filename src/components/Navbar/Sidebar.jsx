import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Sidebar = ({ showMenu, toggleMenu, closeMenu }) => {
  return (
    <>
      <div className={`sidebar ${showMenu ? "open" : ""}`}>
        <div className="row">
          <div className="close-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <h1 className="Nav-logo" onClick={toggleMenu}>
            <Link to={"/"}>
              <img alt="MoviEplorer Logo" />
              Movi<span>eXplorer</span>
            </Link>
          </h1>
        </div>
        <div className="col">
          <Navigation closeMenu={closeMenu} />
        </div>
      </div>

      {showMenu && <div className="dark-layer" onClick={closeMenu}></div>}
    </>
  );
};

export default Sidebar;
