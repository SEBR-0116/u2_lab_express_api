const db = require("../db");
const Movie = require("../models/movie");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const movies = [
    {
      title: "Black Panther",
      summary: `After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. 
            When a powerful enemy suddenly reappears T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. 
            Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people.`,
      actorList: [
        "Chadwick Boseman",
        "Michael B. Jordan",
        "Lupita Nyong'o",
        "Danai Gurira",
        "Martin Freeman",
        "Daniel Kaluuya",
        "Letitia Wright",
        "Winston Duke",
        "Angela Bassett",
        "Forest Whitaker",
        "Andy Serkis",
      ],
      rating: 96 / 100,
      yearReleased: 2018,
      runTime: "2 Hours and 14 Minutes",
    },
    {
      title: "Guardians of the Galaxy",
      summary: `Brash space adventurer Peter Quill finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. 
        To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. 
        But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.`,
      actorList: [
        "Chris Pratt",
        "Zoe Saldana",
        "Dave Bautista",
        "Vin Diesel",
        "Bradley Cooper",
        "Lee Pace",
      ],
      rating: 92 / 100,
      yearReleased: 2014,
      runTime: "2 Hours and 1 Minute",
    },
    {
      title: "Venom",
      summary: `Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation.
         While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. 
         Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.`,
      actorList: [
        "Tom Hardy",
        "Michelle Williams",
        "Riz Ahmed",
        "Scott Haze",
        "Reid Scott",
        "Jenny Slate",
      ],
      rating: 30 / 100,
      yearReleased: 2018,
      runTime: "1 Hour and 52 Minutes",
    },
  ];
  try {
    await Movie.insertMany(movies);
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
