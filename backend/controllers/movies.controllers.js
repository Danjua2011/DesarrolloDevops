import Movie from "../models/movie.js";

export const getMovies = async (req, res) => {

    try {

        const movies = await Movie.find().sort({
            createdAt: -1
        });

        res.json(movies);

    } catch (error) {

        res.status(500).json({
            message: "Error obteniendo las películas",
            error: error.message
        });

    }
};

export const getMovieById = async (req, res) => {

    try {

        const movie = await Movie.findById(req.params.id);

        if (!movie) {
            return res.status(404).json({
                message: "Película no encontrada"
            });
        }

        res.json(movie);

    } catch (error) {

        res.status(500).json({
            message: "Error obteniendo la película",
            error: error.message
        });

    }
};

export const createMovie = async (req, res) => {

    try {

        const movie = await Movie.create(req.body);

        res.status(201).json(movie);

    } catch (error) {

        res.status(400).json({
            message: "Error creando la película",
            error: error.message
        });

    }
};

export const deleteMovie = async (req, res) => {

    try {

        const movie = await Movie.findByIdAndDelete(
            req.params.id
        );

        if (!movie) {
            return res.status(404).json({
                message: "Película no encontrada"
            });
        }

        res.json({
            message: "Película eliminada correctamente"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error eliminando la película",
            error: error.message
        });

    }
};