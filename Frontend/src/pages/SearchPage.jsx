
import React, { useState } from 'react';
import Axios from 'axios';
import './SearchPage.css';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movieNotFound, setMovieNotFound] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.get('http://localhost:3000/movies/title/' + searchQuery);
      if (response.data.length === 0) {
        setMovieNotFound(true);
      } else {
        setSearchResults(response.data);
        setMovieNotFound(false);
      }
    } catch (error) {
      console.error('Error occurred while searching movies:', error);
    }
  };

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="search-page">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Enter movie title"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      {movieNotFound && <p className="no-results-message">Movie Not Found</p>}

      <div className="movie-grid">
        {searchResults.map((movie) => (
          <div key={movie.movie_id} className="search-card">
            <div className="search-card-content">
              <h2 className="search-movie-title">{truncateText(movie.title, 2)}</h2>
              <div className="search-details">
                <p className="search-synopsis">{truncateText(movie.synopsis, 20)}</p>
                <p className="search-cast">Cast: {truncateText (movie.cast, 2)}</p>
                <p className="search-crew">Crew: {movie.crew}</p>
                <p className="search-release-date">Release Date: {new Date(movie.release_date).toLocaleDateString()}</p>
                <p className="search-runtime">Runtime: {movie.runtime} Minutes</p>
              </div>
              <Link to="rate-movie" className="search-rate-btn">
                Continue To Rate Movie
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;