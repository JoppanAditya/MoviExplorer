import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getMovieCredits, getMovieImages, getSimilarMovies } from "../../api/movieAPI";
import MovieHeader from "./MovieHeader";
import MoviePoster from "../MoviePoster/MoviePoster";
import DetailInfo from "./DetailInfo";
import Card from "../Card/Card";
import DetailImage from "./DetailImage";
import MovieInfo from "./MovieInfo";
import "./MovieDetails.css";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams();
  const backdrops = movieImages.backdrops;
  const posters = movieImages.posters;
  let images = [];

  useEffect(() => {
    Promise.all([getMovieDetails(id), getMovieCredits(id), getMovieImages(id), getSimilarMovies(id)])
      .then(([details, credits, images, similarMovies]) => {
        setMovieDetail(details);
        setMovieCredits(credits);
        setMovieImages(images);
        setSimilarMovies(similarMovies);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
      });
  }, [id]);

  if (backdrops && backdrops.length > 0) {
    images = backdrops.slice(0, 5).map((backdrop) => `${import.meta.env.VITE_ORIIMGURL}${backdrop.file_path}`);
  } else if (posters && posters.length > 0) {
    images = posters.slice(0, 5).map((poster) => `${import.meta.env.VITE_ORIIMGURL}${poster.file_path}`);
  }

  return (
    <div className="Detailpg-container" key={movieDetail.id}>
      <MovieHeader images={images} />
      <div className="Detailpg-content-container">
        <Suspense>
          <div className="Content-wrapper">
            <div className="Content-left">
              <DetailImage movieDetail={movieDetail} />
              <DetailInfo movieDetail={movieDetail} movieCredits={movieCredits} />
            </div>

            <div className="Content-right">
              <MovieInfo movieDetail={movieDetail} />
              <DetailInfo movieDetail={movieDetail} movieCredits={movieCredits} />
              <Card movieCredits={movieCredits.cast} type="cast" />
              <Card movieCredits={movieCredits.crew} type="crew" />
              <div className="Detailpg-similar-movie">
                <h2>Similar to {movieDetail.title}</h2>
                <ol className="Card-wrapper">
                  {similarMovies &&
                    similarMovies.map((movie) => (
                      <li className="Similar-card" key={movie.id}>
                        <MoviePoster movie={movie} />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
