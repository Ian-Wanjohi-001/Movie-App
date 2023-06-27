import config from "../database/config.js";
import sql from "mssql";

export const getMovies = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request().query("SELECT * FROM Movies");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: "An error while fetching movies ;"});
        console.error("An error while fetching movies :",error)
    }
    finally {
        sql.close();
    }
}

export const getMoviesByCrew = async (req, res) => {
    const { actors } = req.params;
    
    try {
      const pool = await sql.connect(config.sql);
      const query = `SELECT * FROM Movies WHERE cast LIKE '%${actors}%'`;
      const result = await pool.request().query(query);
  
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching movies by crew." });
      console.error("An error occurred while fetching movies by crew:", error);
    } finally {
      sql.close();
    }
  };
  

  export const getMoviesByTitle = async (req, res) => {
    const { title } = req.params;
    
    try {
      const pool = await sql.connect(config.sql);
      const query = `SELECT * FROM Movies WHERE title LIKE '%${title}%'`;
      const result = await pool.request().query(query);
  
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching movies by title." });
      console.error("An error occurred while fetching movies by title:", error);
    } finally {
      sql.close();
    }
  };
  

  export const getMoviesGenresAvailable = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request().query("SELECT * FROM Genres");
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: "An error while fetching movies ;"});
        console.error("An error while fetching movies :",error)
    }
    finally {
        sql.close();
    }
}


export const getMoviesGenreIsAction = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        let result = await pool.request().query(`SELECT m.*
        FROM Movies m
        JOIN Movie_Genres mg ON m.movie_id = mg.movie_id
        WHERE mg.genre_id = 1;
        ` );
        res.status(200).json(result.recordset);
    } catch (error) {
        res.status(500).json({ message: "An error while fetching movies ;"});
        console.error("An error while fetching movies :",error)
    }
    finally {
        sql.close();
    }
}