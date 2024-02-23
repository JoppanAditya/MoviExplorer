import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, onSearchInputChange, onKeyPress }) => {
  return <input type="text" placeholder="Search a movie title....." value={searchQuery} onChange={onSearchInputChange} onKeyDown={onKeyPress} />;
};

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  onSearchInputChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

export default SearchBar;
