import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { year } from "../Common/FormatUtils";

const NavbarSearchResult = ({ showSearchBox, clearQuery, trendingToday, searchResults, showSearchResult, isSearching, children }) => {
  return (
    <div className={`Search-box ${showSearchBox ? "show" : ""}`}>
      <div className="Input-container">
        <div className="Input-input">
          {children}
          <FontAwesomeIcon icon={faTimes} onClick={clearQuery} />
        </div>
      </div>

      <div className={`Search-result ${showSearchResult ? "show" : "hide"}`}>
        {isSearching && searchResults.length > 0 ? (
          <ul>
            {searchResults.slice(0, 10).map((movie) => (
              <div className="Result-wrapper" key={movie.id}>
                <div className="Input-result">
                  <li>
                    <Link to={`/movie/${movie.id}`}>
                      {movie.title} ({year(movie.release_date)})
                    </Link>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          <ul>
            <div className="Result-title">
              <div className="Input-result">
                <li>
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                  Trending
                </li>
              </div>
            </div>
            {trendingToday.slice(0, 10).map((movie) => (
              <div className="Result-wrapper" key={movie.id}>
                <div className="Input-result">
                  <li>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarSearchResult;
