// import express from 'express';
// import { submitReview } from '../controllers/reviewsController.js';

// const router = express.Router();

// router.post('/reviews', submitReview);

// export default router;


import express from 'express';
import { getMovies } from '../controllers/RateMovieController.js';

const router = express.Router();

router.get('/movies', getMovies);

export default router;
