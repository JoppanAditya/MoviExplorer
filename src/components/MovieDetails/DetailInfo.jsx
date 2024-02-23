import { formatRate, formatRuntime } from "../Common/FormatUtils";

const DetailInfo = ({ movieDetail, movieCredits }) => {
  return (
    <div className="Detailpg-movie-info">
      <div className="Detailpg-movie-status">
        <h2>Status</h2>
        <p>{movieDetail.status}</p>
      </div>

      <div className="Detailpg-movie-rating">
        <h2>Rating</h2>
        <p>
          {formatRate(movieDetail.vote_average)}/10 <span>({movieDetail.vote_count} votes) </span>
        </p>
      </div>

      <div className="Detailpg-movie-genres">
        <h2>Genres</h2>
        {movieDetail.genres &&
          movieDetail.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}
              {index < movieDetail.genres.length - 1 ? ", " : ""}
            </span>
          ))}
      </div>

      <div className="Detailpg-movie-runtime">
        <h2>Runtime</h2>
        <p>{formatRuntime(movieDetail.runtime)}</p>
      </div>

      <div className="Detailpg-movie-prod">
        <h2>Production Country</h2>
        {movieDetail.production_countries &&
          movieDetail.production_countries.map((prod, index) => (
            <span key={index}>
              {prod.name}
              {index < movieDetail.production_countries.length - 1 ? ", " : ""}
            </span>
          ))}
      </div>

      <div className="Detailpg-movie-director">
        <h2>Director</h2>
        {movieCredits.crew &&
          movieCredits.crew.map((crewMember) => {
            if (crewMember.job === "Director") {
              return <p key={crewMember}>{crewMember.name}</p>;
            }
            return null;
          })}
      </div>

      <div className="Detailpg-movie-budget">
        <h2>Budget</h2>
        <p>{movieDetail.budget ? "$" + movieDetail.budget.toLocaleString() : "-"}</p>
      </div>

      <div className="Detailpg-movie-revenue">
        <h2>Revenue</h2>
        <p>{movieDetail.revenue ? "$" + movieDetail.revenue.toLocaleString() : "-"}</p>
      </div>
    </div>
  );
};

export default DetailInfo;
