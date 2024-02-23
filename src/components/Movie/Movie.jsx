import { Suspense } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { formatDate, formatRate } from "../Common/FormatUtils";
import MoviePoster from "../MoviePoster/MoviePoster";
import "./Movie.css";

const Movie = ({ movie }) => {
  return (
    <div className="Movies-card">
      <Suspense fallback>
        <MoviePoster movie={movie} />
        <div className="Movie-info">
          <Link to={`/movie/${movie.id}`}>
            <div className="Movie-title">{movie.title}</div>
          </Link>
          <div className="Movie-date">{formatDate(movie.release_date)}</div>
        </div>
        <div className="Movie-rate">
          <FontAwesomeIcon icon={faStar} />
          <p>{formatRate(movie.vote_average)}</p>
        </div>
      </Suspense>
    </div>
  );
};

export default Movie;
