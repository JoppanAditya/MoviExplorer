import { useState, useEffect } from "react";
import { searchMovie } from "./movieAPI";

const useSearchResult = (query) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (query && query.trim() !== "") {
          const result = await searchMovie(query);
          setSearchResults(result.results || []);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return searchResults;
};

export default useSearchResult;
