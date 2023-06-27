import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import './RateMoviePage.css';

const RateMoviePage = () => {
  const [rating, setRating] = useState(0);
  const [recommendation, setRecommendation] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('/api/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error occurred while fetching movies:', error);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleRecommendationChange = (event) => {
    setRecommendation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reviewData = {
      rating: rating,
      recommendation: recommendation,
    };

    try {
      const response = await axios.post('/api/reviews', reviewData);
      if (response.status === 200) {
        alert('Your review has been successfully received.');
        setRating(0);
        setRecommendation('');
      } else {
        alert('An error occurred while submitting your review. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred while submitting your review. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="rating-page">
      <nav className="navbar">
        <h1 className="navbar-title">Rate and Recommend Movie</h1>
        <a href="/" className="navbar-link">Back to Home</a>
      </nav>
      <form onSubmit={handleSubmit} className="rating-form">
        <div>
          <label>Rating:</label>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={() => handleRatingChange(value)}
                />
                <FaStar className="star" color={value <= rating ? '#FFD700' : '#C0C0C0'} />
              </label>
            ))}
          </div>
        </div>
        <div>
          <label>Recommendation:</label>
          <input
            type="text"
            value={recommendation}
            onChange={handleRecommendationChange}
            placeholder="Enter your recommendation"
            className="recommendation-input"
          />
        </div>
        <div>
          <label>Select a Movie:</label>
          <select className="movie-select">
            {movies.map((movie) => (
              <option key={movie.movie_id} value={movie.movie_id}>{movie.title}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default RateMoviePage;
