import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieType, getTrendingMovies } from "./movieAPI";

const useMovie = ({ query, searchResults }) => {
  const [movieData, setMovieData] = useState({
    movieList: [],
    trendingToday: [],
    trendingThisWeek: [],
  });
  const { type } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (!query) {
          if (type) {
            const result = await getMovieType(type);
            setMovieData((prevState) => ({
              ...prevState,
              movieList: result || [],
            }));
          } else {
            const trendingMoviesDay = await getTrendingMovies("day");
            const trendingMoviesWeek = await getTrendingMovies("week");

            setMovieData((prevState) => ({
              ...prevState,
              trendingToday: trendingMoviesDay || [],
              trendingThisWeek: trendingMoviesWeek || [],
            }));
          }
        } else {
          setMovieData((prevState) => ({
            ...prevState,
            movieList: searchResults || [],
          }));
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [type, query, searchResults]);

  return movieData;
};

export default useMovie;
