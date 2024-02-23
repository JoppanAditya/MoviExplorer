import { MovieImage } from "../Common/MovieImage";
import "./Card.css";

const Card = ({ movieCredits, type }) => {
  return (
    <div className={`Detailpg-movie-${type}`}>
      <h2>{type === "cast" ? "Cast" : "Crew"}</h2>

      <ol className="Card-wrapper">
        {movieCredits &&
          movieCredits.map((member, index) => (
            <ul className="Card" key={index}>
              <MovieImage imageUrl={`${import.meta.env.VITE_BASEIMGURL}/${member.profile_path}`} altText={member.name} nameClass={"Empty-profile"} />
              <div className="Card-info">
                <div className={type === "cast" ? "Cast-name" : "Crew-name"}>
                  <h4>{member.name}</h4>
                </div>
                <div className={type === "cast" ? "Cast-char" : "Crew-job"}>
                  <p>{type === "cast" ? member.character : member.job}</p>
                </div>
              </div>
            </ul>
          ))}
      </ol>
    </div>
  );
};

export default Card;
