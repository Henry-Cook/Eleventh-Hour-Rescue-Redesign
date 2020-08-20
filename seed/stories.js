const db = require("../db/connection");
const Stories = require("../models/stories");

db.on("error", console.error.bind(console, "MongoDB connection error"));

const main = async () => {
  const stories = [
    {
      imgURL: "../assets/Israel.png",
      name: "ISREAL",
      story:
        "Israel is a true German Shepherd, with all that that entails for the breed. Big, beautiful, and protective! He bonds with his immediate family so strongly and feels he has to protect them from others. After being adopted this past June, Isreal and his new FURever family love to go to the park on the weekends to take longs walks and run around on the baseball field.",
    },
    {
      imgURL: "../assets/Colette.png",
      name: "COLETTE",
      story:
        "Since being adopted in July, Colette has been relaxing in her new home in Dover.  Colette is a complete mush, head butting, purr machine.  With her new family, Colette is the only pet in the home, because  she has to be the QUEEN of the house and snuggle up with her new owners.",
    },
  ];

  await Stories.insertMany(stories)
  console.log('Seeded DB!')
};

const run = async () => {
  await main()
  db.close
}

run();