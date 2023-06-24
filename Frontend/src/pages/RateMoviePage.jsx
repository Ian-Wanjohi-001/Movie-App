// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const RateMoviePage = () => {
//   const { movieId } = useParams(); // Retrieve the movie ID from URL parameters
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState('');
//   const [recommendation, setRecommendation] = useState('');

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleReviewChange = (event) => {
//     setReview(event.target.value);
//   };

//   const handleRecommendationChange = (event) => {
//     setRecommendation(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Example:
//     const data = {
//       movieId,
//       rating,
//       review,
//       recommendation,
//     };
//     // Send the data to your backend API endpoint
//     fetch('http://localhost:3000/submitRatingAndReview', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Handle successful submission (e.g., show a success message)
//           console.log('Rating and review submitted successfully!');
//         } else {
//           // Handle error response (e.g., show an error message)
//           console.log('Error submitting rating and review');
//         }
//       })
//       .catch((error) => {
//         // Handle error (e.g., show an error message)
//         console.log('Error submitting rating and review', error);
//       });
//   };

//   return (
//     <div className="rate-movie-page">
//       <h2>Rate and Review Movie</h2>
//       <div className="movie-details">
//         {/* Display movie details here */}
//       </div>
//       <form onSubmit={handleSubmit} className="rating-form">
//         <div>
//           <label>Rating:</label>
//           <div className="star-rating">
//             {/* Star rating inputs */}
//           </div>
//         </div>
//         <div>
//           <label>Review:</label>
//           <textarea
//             value={review}
//             onChange={handleReviewChange}
//             placeholder="Write your review here"
//             className="review-input"
//           ></textarea>
//         </div>
//         <div>
//           <label>Recommendation:</label>
//           <input
//             type="text"
//             value={recommendation}
//             onChange={handleRecommendationChange}
//             placeholder="Enter your recommendation"
//             className="recommendation-input"
//           />
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RateMoviePage;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const RateMoviePage = () => {
  const { movieId } = useParams(); // Retrieve the movie ID from URL parameters
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRecommendationChange = (event) => {
    setRecommendation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Example:
    const data = {
      movieId,
      rating,
      review,
      recommendation,
    };
    // Send the data to your backend API endpoint
    fetch('http://localhost:3000/submitRatingAndReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful submission (e.g., show a success message)
          console.log('Rating and review submitted successfully!');
        } else {
          // Handle error response (e.g., show an error message)
          console.log('Error submitting rating and review');
        }
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
        console.log('Error submitting rating and review', error);
      });
  };

  // Dummy movie details
  const movieDetails = {
    title: 'Example Movie',
    genre: 'Action',
    director: 'John Doe',
    releaseYear: 2021,
    // Add more details as needed
  };

  return (
    <div className="rate-movie-page">
      <h2>Rate and Review Movie</h2>
      <div className="movie-details">
        <h3>{movieDetails.title}</h3>
        <p>Genre: {movieDetails.genre}</p>
        <p>Director: {movieDetails.director}</p>
        <p>Release Year: {movieDetails.releaseYear}</p>
        {/* Add more movie details */}
      </div>
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
          <label>Review:</label>
          <textarea
            value={review}
            onChange={handleReviewChange}
            placeholder="Write your review here"
            className="review-input"
          ></textarea>
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
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default RateMoviePage;

