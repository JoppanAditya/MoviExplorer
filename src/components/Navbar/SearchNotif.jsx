import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DarkMode from "./DarkMode";

const SearchNotif = ({ toggleNotification, showNotification, toggleSearchBox, children }) => {
  return (
    <div className="Container-right">
      <ul className="Nav-links">
        <DarkMode />
        <li onClick={toggleNotification} className="Notif-icon">
          <FontAwesomeIcon icon={faBell} />
          <div className="Notification-box" style={{ display: showNotification ? "block" : "none" }}>
            Unread Notification <span>0</span>
          </div>
        </li>
        {children}
        <li onClick={toggleSearchBox}>
          <FontAwesomeIcon className="Search-icon" icon={faSearch} />
        </li>
      </ul>
    </div>
  );
};

export default SearchNotif;
