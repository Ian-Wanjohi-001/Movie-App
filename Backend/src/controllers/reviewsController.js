import sql from 'mssql';
import config from '../DataBase/config.js';

// Creating a connection pool
const pool = new sql.ConnectionPool(config.sql);

// Function to fetch movie data
const fetchMovieData = async () => {
  let connection;
  try {
    connection = await pool.connect();

    // Query to fetch movie data
    const result = await connection.request().query('SELECT * FROM movies');

    // Return the movie data
    return result.recordset;
  } catch (error) {
    console.error('Error occurred while fetching movie data:', error);
    throw error;
  } finally {
    if (connection) {
      connection.close();
    }
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await fetchMovieData();

    res.json(movies);
  } catch (error) {
    console.error('Error occurred while fetching movies:', error);
    res.status(500).json({ error: 'An error occurred while fetching movies' });
  }
};
