import { formatDate, year } from "../Common/FormatUtils";

const MovieInfo = ({ movieDetail }) => {
  return (
    <>
      <div className="Detailpg-movie-title">
        <h1>
          {movieDetail.title} <span>({year(movieDetail.release_date)})</span>
        </h1>
        <h2>Original Title: {movieDetail.original_title}</h2>
      </div>

      <div className="Detailpg-movie-tagline">
        <p>{movieDetail.tagline}</p>
      </div>

      <div className="Detailpg-movie-release">
        <h2>Release Date</h2>
        <p>{formatDate(movieDetail.release_date)}</p>
      </div>

      <div className="Detailpg-movie-overview">
        <h2>Synopsis</h2>
        <p>{movieDetail.overview}</p>
      </div>
    </>
  );
};

export default MovieInfo;
