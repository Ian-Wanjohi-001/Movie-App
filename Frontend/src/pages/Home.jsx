import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "../components/Appbar";
import "./Home.css";
import { movieImageNames } from "../components/Images";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log("error fetching movies", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const mappedMovieData = movies.map((movie, index) => {
    const movieImageName = movieImageNames[index];
    const imageUrl = movieImageName;
    return {
      ...movie,
      imageUrl,
    };
  });

  return (
    <div>
      <AppBar />
      <div className="movie-grid">
        {mappedMovieData.map((movie) => (
          <div key={movie.movie_id} className="movie-card">
            <div className="movie-image-container">
              <img
                src={movie.imageUrl}
                alt={movie.title}
                className="movie-image"
                style={{height:'100%', width:'100%',display:'block' , borderRadius:'20px'}}
              />
            </div>
            <h2 className="movie-title">{movie.title}</h2>
            {/* <p className="movie-synopsis">{movie.synopsis}</p> */}
            {/* <p className="movie-cast">{movie.cast}</p> */}
              <button className="rate-movie-button">
                <Link  to='rate-movie' className="button-text">Rate Movie </Link>
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
