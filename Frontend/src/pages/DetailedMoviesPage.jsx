// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const MovieDetailsPage = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/movies/${movieId}`);
//         const data = await response.json();
//         setMovie(data);
//       } catch (error) {
//         console.log('Error fetching movie details', error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   const { title, synopsis, cast, imagePath } = movie;

//   return (
//     <div className="movie-details">
//       <img src={require(`../assets/${imagePath}`).default} alt={title} />
//       <h2>{title}</h2>
//       <p>{synopsis}</p>
//       <p>{cast}</p>

//       {/* Rating component */}
//       {/* Review form component */}
//     </div>
//   );
// };

// export default MovieDetailsPage;
