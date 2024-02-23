import { useParams } from "react-router-dom";
import Movies from "../components/Movies/Movies";

const MoviesPage = () => {
  const { type } = useParams();

  const title = () => {
    if (type === "top_rated") return "Top Rated Movies";
    else if (type === "upcoming") return "Upcoming Movies";
    else if (type === "popular") return "Popular Movies";
  };

  return (
    <div className="Movies-container">
      <h2 className="Content-title">{title()}</h2>
      <Movies />
    </div>
  );
};

export default MoviesPage;
