import { Link } from "react-router-dom";
import { MovieImage } from "../Common/MovieImage";
import "./MoviePoster.css";

const MoviePoster = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="Img-container">
        <MovieImage imageUrl={`${import.meta.env.VITE_BASEIMGURL}/${movie.poster_path}`} altText={`Poster ${movie.title}`} nameClass={"Empty-image"} />
      </div>
    </Link>
  );
};

export default MoviePoster;
