import sql from 'mssql';
import config from '../DataBase/config.js';

// Creating a connection pool
const pool = new sql.ConnectionPool(config.sql);



// POST /reviews // create review
export const createReview = async (req, res) => {
  const { movie_id, user_id, review_content, rating } = req.body;
  let connection;
  try {
    connection = await pool.connect();
    // Check if there is a similar review by the user
    const query = `SELECT * FROM Reviews WHERE user_id = @user_id AND review_content = @review_content`;
    const result = await connection.request()
      .input('user_id', user_id)
      .input('review_content', review_content)
      .query(query);

    if (result.recordset.length > 0) {
      return res.status(400).json({ error: 'Duplicate review. Please enter a different review' });
    }

    // Insert a new review
    const insertQuery = `INSERT INTO Reviews (movie_id, user_id, review_content, rating) VALUES (@movie_id, @user_id, @review_content, @rating)`;
    await connection.request()
      .input('movie_id',sql.Int, movie_id)
      .input('user_id', sql.Int, user_id)
      .input('review_content',sql.VarChar, review_content)
      .input('rating', sql.Int, rating)
      .query(insertQuery);

    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
    console.log(error)
  }
};



export const getReviews = async (req, res) => {
  try {
    const { user_id } = req.params;

    const pool = await sql.connect(config.sql);
    const request = new sql.Request(pool);

    const query = 'SELECT * FROM Reviews WHERE user_id = @user_id';
    request.input('user_id', sql.Int, user_id);

    const result = await request.query(query);

    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while fetching reviews.' });
    console.error('An error occurred while fetching reviews:', error);
  } finally {
    sql.close();
  }
};



export const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;

    const pool = await sql.connect(config.sql);
    const request = new sql.Request(pool);
    // Delete the review from the database
    await request.input('reviewId', sql.Int, reviewId).query('DELETE FROM Reviews WHERE review_id = @reviewId');

    
    

    res.status(200).json({ message: 'Review deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while deleting the review.' });
    console.error('An error occurred while deleting the review:', error);
    console.log(error)
  } finally {
    sql.close();
  }
};


export const updateReviewContent = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { reviewContent } = req.body;

    // Create a connection pool
    const pool = await sql.connect(config.sql);

    // Prepare the SQL query
    const query = `
      UPDATE Reviews
      SET review_content = @reviewContent
      WHERE review_id = @reviewId
    `;

    // Create a new request instance
    const request = new sql.Request(pool);

    // Set the parameters
    request.input('reviewId', sql.Int, reviewId);
    request.input('reviewContent', sql.VarChar, reviewContent);

    // Execute the query
    await request.query(query);

    res.status(200).json({ message: 'Review content updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the review content' });
    console.error('An error occurred while updating the review content:', error);
  } finally {
    // Close the connection pool
    sql.close();
  }
};
