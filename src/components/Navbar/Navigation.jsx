import { Link } from "react-router-dom";

const Navigation = ({ closeMenu }) => {
  return (
    <ul className="Nav-links">
      <li>
        <Link className="Links" to="/movies/upcoming" onClick={closeMenu}>
          Upcoming
        </Link>
      </li>
      <li>
        <Link className="Links" to="/movies/popular" onClick={closeMenu}>
          Popular
        </Link>
      </li>
      <li>
        <Link className="Links" to="/movies/top_rated" onClick={closeMenu}>
          Top Rated
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
