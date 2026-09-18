import express from "express";

import {
    getReviews,
    getReviewsByMovie,
    createReview
} from "../controllers/reviews.controller.js";

const router = express.Router();

router.get("/", getReviews);

router.get("/movie/:movieId", getReviewsByMovie);

router.post("/", createReview);

export default router;