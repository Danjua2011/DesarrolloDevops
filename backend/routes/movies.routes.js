import express from "express";

import {
    getMovies,
    getMovieById,
    createMovie,
    deleteMovie
} from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", getMovies);

router.get("/:id", getMovieById);

router.post("/", createMovie);

router.delete("/:id", deleteMovie);

export default router;