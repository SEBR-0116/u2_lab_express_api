const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const db = require("./db");
const PORT = process.env.PORT || 3001;
const actorController = require("./controllers/actorController");
const movieController = require("./controllers/movieController");
const reviewController = require("./controllers/reviewController");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => {
  res.send("Welcome to Regal");
});

app.get("/actors", actorController.getAllActors);
app.get("/actors/:id", actorController.getActorById);
app.post("/actors", actorController.createActor);
app.put("/actors/:id", actorController.updateActor);
app.delete("/actors/:id", actorController.deleteActor);

app.get("/movies", movieController.getAllMovies);
app.get("/movies/:id", movieController.getMovieById);
app.post("/movies", movieController.createMovie);
app.put("/movies/:id", movieController.updateMovie);
app.delete("/movies/:id", movieController.deleteMovie);

app.get("/reviews", reviewController.getAllReviews);
app.get("/reviews/:id", reviewController.getReviewById);
app.post("/reviews", reviewController.createReview);
app.put("/reviews/:id", reviewController.updateReview);
app.delete("/reviews/:id", reviewController.deleteReview);
