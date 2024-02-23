import { useParams } from "react-router-dom";
import Movie from "../Movie/Movie";
import useMovie from "../../api/getMovie";
import "./Movies.css";

const Movies = ({ query, searchResults }) => {
  const { type } = useParams();
  const { movieList, trendingToday, trendingThisWeek } = useMovie({ query, searchResults });

  const renderMovies = (movies) => {
    if (movies.length === 0) {
      return <p>No movies found.</p>;
    }

    return (
      <div className="Movies-wrapper">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    );
  };

  return (
    <div className="Movies-container">
      {trendingToday.length > 0 && (
        <>
          <h2 className="Content-title">Featured Today</h2>
          {renderMovies(trendingToday)}
        </>
      )}

      {trendingThisWeek.length > 0 && (
        <>
          <h2 className="Content-title">Trending This Week</h2>
          {renderMovies(trendingThisWeek)}
        </>
      )}

      {type && <>{renderMovies(movieList)}</>}

      {query && <>{renderMovies(searchResults)}</>}
    </div>
  );
};

export default Movies;
