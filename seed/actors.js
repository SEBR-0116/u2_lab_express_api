const db = require("../db");
const Actor = require("../models/actor");
const blackPanther = "65ca3d53806b4591b83022dd";
const guardiansOfTheGalaxy = "65ca3d53806b4591b83022de";
const venom = "65ca3d53806b4591b83022df";

db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
  const Actors = [
    {
      name: "Chadwick Boseman",
      age: 43,
      livingStatus: "Deceased",
      role: "Protaganist",
      characterName: "Black Panther",
      Image: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fvariety.com%2F2020%2Ffilm%2Fnews%2Fchadwick-boseman-legacy-black-panther-1234753760%2F&psig=AOvVaw2quHnw7f_C8Ogr1MQQpoXm&ust=1707837003082000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICVoeGKpoQDFQAAAAAdAAAAABAK`,
      movieId: blackPanther,
    },
    {
      name: "Michael B. Jordan",
      age: 37,
      livingStatus: "Living",
      role: "Antagonist",
      characterName: "Killmonger",
      Image: `https://cdn.vox-cdn.com/thumbor/LkAjn9yQT7MlCEvgATYJnJWoeLI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/8879749/Screen_Shot_2017_07_19_at_12.58.36_PM.png`,
      movieId: blackPanther,
    },
    {
      name: "Lupita Nyong'o",
      age: 40,
      livingStatus: "Living",
      role: "Protaganist",
      characterName: "Nakia",
      Image: `https://i.insider.com/5a6a0a3b7101ad5a3e388012?width=700`,
      movieId: blackPanther,
    },
    {
      name: "Chris Pratt",
      age: 44,
      livingStatus: "Living",
      role: " Protaganist",
      characterName: "Peter Quill",
      Image: `https://images.hindustantimes.com/img/2022/07/05/1600x900/_31c99f60-9c74-11e8-8838-278d266b5e3b_1657007673547.jpg`,
      movieId: guardiansOfTheGalaxy,
    },
    {
      name: "Zoe Sandala",
      age: 45,
      livingStatus: "Living",
      role: "Protaganist",
      characterName: "Gamora",
      Image: `https://www.looper.com/img/gallery/the-gamora-mcu-movie-zoe-saldana-wants-to-make/l-intro-1646768877.jpg`,
      movieId: guardiansOfTheGalaxy,
    },
    {
      name: "Dave Bautista",
      age: 55,
      livingStatus: "Living",
      role: "Protaganist",
      characterName: "Drax The Destroyer",
      Image: `https://insidethemagic.net/wp-content/uploads/2021/06/1-1-800x400.png`,
      movieId: guardiansOfTheGalaxy,
    },
    {
      name: "Tom Hardy",
      age: 46,
      livingStatus: "Living",
      role: "Protaganist/Antagonist",
      characterName: "Eddie Brock/Venom",
      Image: `https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F06%2Ftom-hardy-venom-sequel-confirmed-trilogy-teaser-1.jpg?cbr=1&q=90`,
      movieId: venom,
    },
    {
      name: "Michelle Williams",
      age: 43,
      livingStatus: "Living",
      role: "Protaganist",
      characterName: "Anne Weying",
      Image: `https://cdn.mos.cms.futurecdn.net/Kw9HUZSTfN6ekm5222Uxzg.jpg`,
      movieId: venom,
    },
    {
      name: "Riz Ahmed",
      age: 41,
      livingStatus: "Living",
      role: "Antagonist",
      characterName: "Carlton Drake/Riot",
      Image: `https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/dwayne-johnson-red-notice-trailer-1.jpg`,
      movieId: venom,
    },
  ];
  try {
    await Actor.insertMany(Actors);
    console.log("Lights, Camera, Action!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
const run = async () => {
  await main();
  db.close();
};
run();
