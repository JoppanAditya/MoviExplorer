import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import MoviesPage from "./pages/MoviesPage";
import Footer from "./components/Footer/Footer";
import ScrolltoTop from "./utils/scrollToTop";
import SearchPage from "./pages/SearchPage";
import Block from "./components/Block/Block";
import { SearchProvider } from "./utils/SearchContext";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Router basename="/moviexplorer/">
        <SearchProvider>
          <ScrolltoTop />
          <Block />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/movies/:type" element={<MoviesPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </SearchProvider>
      </Router>
    </>
  );
};

export default App;
