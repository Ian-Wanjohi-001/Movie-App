// import React from 'react';
// import { Link, useHistory } from 'react-router-dom';

// const MovieCard = ({ movie }) => {
//   const history = useHistory();
//   const { id, title, synopsis, cast, crew, releaseDate, duration, imagePath } = movie;

//   const handleClick = () => {
//     // Navigate to the detailed movie page
//     history.push(`/movies/${id}`);
//   };

//   return (
//     <Link to={`/movies/${id}`}>
//       <div className="movie-card" onClick={handleClick}>
//         <img src={imagePath} alt={title} className="movie-card__image" />
//         <div className="movie-card__content">
//           <h2 className="movie-card__title">{title}</h2>
//           <p className="movie-card__synopsis">{synopsis}</p>
//           <p className="movie-card__cast">Cast: {cast}</p>
//           <p className="movie-card__crew">Crew: {crew}</p>
//           <p className="movie-card__release-date">Release Date: {releaseDate}</p>
//           <p className="movie-card__duration">Duration: {duration} minutes</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default MovieCard;
