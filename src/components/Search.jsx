import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/search.css";

const Search = () => {
  return (
    <div className="search-section">
      {/* Gradient Heading */}
      <h2 className="search-heading">
        Just <span> type the word and explore it</span>
      </h2>

      {/* Search Bar */}
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>

      {/* Search Button */}
      <button className="search-btn">Search</button>
    </div>
  );
};

export default Search;
