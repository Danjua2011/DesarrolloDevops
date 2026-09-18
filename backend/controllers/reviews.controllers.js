import Review from "../models/Review.js";

export const getReviews = async (req, res) => {

    try {

        const reviews = await Review
            .find()
            .populate("movie")
            .sort({
                createdAt: -1
            });

        res.json(reviews);

    } catch (error) {

        res.status(500).json({
            message: "Error obteniendo las reseñas",
            error: error.message
        });

    }
};

export const getReviewsByMovie = async (req, res) => {

    try {

        const reviews = await Review
            .find({
                movie: req.params.movieId
            })
            .sort({
                createdAt: -1
            });

        res.json(reviews);

    } catch (error) {

        res.status(500).json({
            message: "Error obteniendo las reseñas",
            error: error.message
        });

    }
};

export const createReview = async (req, res) => {

    try {

        const review = await Review.create(req.body);

        res.status(201).json(review);

    } catch (error) {

        res.status(400).json({
            message: "Error creando la reseña",
            error: error.message
        });

    }
};