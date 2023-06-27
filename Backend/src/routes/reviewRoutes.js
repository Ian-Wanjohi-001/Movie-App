
import { createReview ,getReviews, deleteReview, updateReviewContent} from "../controllers/reviewsController.js";


const reviewsRoute = (app) => {
    // create review
    app.route('/review')
    .post(createReview)

    //fetch all reviews by a specific user
    app.route('/user/reviews/:user_id')
.get(getReviews)

app.route('/user/reviews/delete/:reviewId')
.delete(deleteReview);

app.route('/user/reviews/update/:reviewId')
.post(updateReviewContent)

}



export default reviewsRoute;