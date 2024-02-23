import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../utils/SearchContext";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState();
  const { setSearchQuery: setSearchQueryContext } = useSearch();
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
      setSearchQueryContext(searchQuery);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
      setSearchQueryContext(searchQuery);
    }
  };

  return (
    <header className="App-header">
      <div className="Header-content">
        <h1>Welcome.</h1>
        <p>Explore millions of movies here.</p>
        <div className="Search-movie">
          <div className="Input-wrapper">
            <SearchBar searchQuery={searchQuery} onSearchInputChange={handleSearchInputChange} onKeyPress={handleKeyPress} />
          </div>
          <button onClick={handleSearchButtonClick}>Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
