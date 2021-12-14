const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(req, res, next) {
  const review = await reviewsService(req.params.reviewId);
  if (review) {
    res.locals.review = review;
    next();
  }
  next({ status: 404, message: `Review cannot be found.` });
}
