import { theThreeLittlePigs } from "./page1.js";
import { makes } from "./page3.js";

const theThirdLittlePig = theThreeLittlePigs[2];
console.log(theThirdLittlePig);
/*
  {
    name: "Figgy",
    feels: "She's not lazy at all! Good for her",
    eats: "healthy veggies",
    wisdomLevel: "smart"
  }
*/

makes(theThirdLittlePig, 'bricks');

console.log(`Then, because ${theThirdLittlePig.name} was quite ${theThirdLittlePig.wisdomLevel}, she built her house out of ${theThirdLittlePig.house.madeOf}.`, theThirdLittlePig);

/*
Then, because Figgy was quite smart, she built her house out of bricks.

  {
    name: "Figgy",
    feels: "She's not lazy at all! Good for her",
    eats: "healthy veggies",
    wisdomLevel: "high",
    house: {
      madeOf: 'bricks'
    }
  };
*/
