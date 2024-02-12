const db = require("../db");
const Review = require("../models/review");
const blackPanther = "65ca3d53806b4591b83022dd";
const guardiansOfTheGalaxy = "65ca3d53806b4591b83022de";
const venom = "65ca3d53806b4591b83022df";

db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
  const Reviews = [
    {
      userName: "Erik K.",
      movieRating: 89 / 100,
      reviewNote: "'Death Over Bondage' incredibly hard line!",
      movieId: blackPanther,
    },
    {
      userName: "Wankanda Forever",
      movieRating: 99 / 100,
      reviewNote: "The King Lives!",
      movieId: blackPanther,
    },
    {
      userName: "Star Prince",
      movieRating: 95 / 100,
      reviewNote: "The Dance moves could have been better but I digress",
      movieId: guardiansOfTheGalaxy,
    },
    {
      userName: "RaG",
      movieRating: 76 / 100,
      reviewNote: "I am Groot!",
      movieId: guardiansOfTheGalaxy,
    },
    {
      userName: "GodOfSymbiotes",
      movieRating: 82 / 100,
      reviewNote:
        "It could have been alot better but Venom is still true to his character",
      movieId: venom,
    },
    {
      userName: "Life Foundation",
      movieRating: 54 / 100,
      reviewNote:
        "Literally killed the franchise with Riot and Scream Lets hope carnage does better ps: (They Don't) ``Edited``",
      movieId: venom,
    },
  ];
  try {
    await Review.insertMany(Reviews);
    console.log("BlockBuster!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
const run = async () => {
  await main();
  db.close();
};
run();
