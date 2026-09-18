import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import moviesRoutes from "./routes/movies.routes.js";
import reviewsRoutes from "./routes/reviews.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "🎬 CineReview API funcionando"
    });
});

app.use("/api/movies", moviesRoutes);
app.use("/api/reviews", reviewsRoutes);

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {

        console.log("✅ MongoDB conectado");

        app.listen(PORT, () => {
            console.log(
                `🚀 Servidor ejecutándose en http://localhost:${PORT}`
            );
        });

    })
    .catch((error) => {

        console.error("❌ Error conectando a MongoDB:");
        console.error(error.message);

    });