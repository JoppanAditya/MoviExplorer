import { useParams } from "react-router-dom";
import Movies from "../Movies/Movies";
import PropTypes from "prop-types";
import useSearchResult from "../../api/getSearchResult";

const SearchResults = () => {
  const { query } = useParams();
  const searchResults = useSearchResult(query);

  return (
    <>
      {searchResults.length === 0 ? (
        <div className="Movies-container">
          <h2 className="Content-title">No Result for &quot;{query}&quot;</h2>
        </div>
      ) : (
        <div className="Movies-container">
          <h2 className="Content-title">Search Results for {query}</h2>
          <Movies query={query} searchResults={searchResults} />
        </div>
      )}
    </>
  );
};

SearchResults.propTypes = {
  query: PropTypes.string,
  searchResults: PropTypes.node,
};

export default SearchResults;
