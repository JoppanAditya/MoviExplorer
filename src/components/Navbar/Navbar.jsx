import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSearchResults from "../../api/getSearchResult";
import useMovie from "../../api/getMovie";
import { useSearch } from "../../utils/SearchContext";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchNotif from "./SearchNotif";
import NavbarSearchResult from "./NavbarSearchResult";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const searchResults = useSearchResults(searchQuery);
  const { trendingToday } = useMovie(searchQuery, searchResults);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/search")) {
      setShowSearchBox(true);
      setShowSearchResult(false);
    } else {
      setShowSearchBox(false);
      setShowSearchResult(true);
    }
  }, [location]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
      setShowSearchBox(true);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setIsSearching(true);
    setShowSearchResult(true);
  };

  const clearQuery = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos - currentScrollPos >= 5) {
        setVisible(true);
      } else if (currentScrollPos - prevScrollPos >= 2) {
        setVisible(false);
        setShowNotification(false);
        setShowSearchResult(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowNotification(false);
    setShowSearchBox(false);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setShowNotification(false);
    setShowSearchBox(false);
    clearQuery();
  };

  const toggleNotification = () => {
    setShowNotification(!showNotification);
    setShowSearchBox(false);
  };

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
    setShowNotification(false);
  };

  return (
    <nav className={visible ? "navbar" : "navbar hidden"}>
      <div className="Container">
        <Logo toggleMenu={toggleMenu} closeMenu={closeMenu} />
        <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} closeMenu={closeMenu} />

        <div className="Container-center">
          <Navigation closeMenu={closeMenu} />
        </div>

        <SearchNotif toggleNotification={toggleNotification} showNotification={showNotification} toggleSearchBox={toggleSearchBox}>
          <NavbarSearchResult showSearchBox={showSearchBox} clearQuery={clearQuery} trendingToday={trendingToday} searchResults={searchResults} showSearchResult={showSearchResult} isSearching={isSearching}>
            <SearchBar searchQuery={searchQuery} onSearchInputChange={handleSearchInputChange} onKeyPress={handleKeyPress} />
          </NavbarSearchResult>
        </SearchNotif>
      </div>
    </nav>
  );
};

export default Navbar;
