import axios from "axios";

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

const fetchMovie = async (path) => {
  try {
    const response = await axios.get(`${baseUrl}${path}api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data for ${path}:`, error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  return fetchMovie(`/movie/${movieId}?`);
};

export const getMovieCredits = async (movieId) => {
  return fetchMovie(`/movie/${movieId}/credits?`);
};

export const getMovieImages = async (movieId) => {
  return fetchMovie(`/movie/${movieId}/images?`);
};

export const getSimilarMovies = async (movieId) => {
  const data = await fetchMovie(`/movie/${movieId}/similar?page1&`);
  return data.results;
};

export const getMovieType = async (listType) => {
  const data = await fetchMovie(`/movie/${listType}?page=1&`);
  return data.results;
};

export const getTrendingMovies = async (time_window) => {
  const data = await fetchMovie(`/trending/movie/${time_window}?page=1&`);
  return data.results;
};

export const getVideos = async (movieId) => {
  const data = await fetchMovie(`/movie/${movieId}/videos?`);
  return data.results;
};

export const searchMovie = async (q) => {
  return await fetchMovie(`/search/movie?query=${q}&page=1&`);
};
