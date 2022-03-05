import { theThreeLittlePigs } from "./page-1";
import { makes } from "./page-3";

const theThirdLittlePig = theThreeLittlePigs[2];
console.log(theThirdLittlePig);
/*
  {
    name: "Jiggy",
    feels: "She's not lazy at all! Good for her",
    eats: "healthy veggies",
    wisdomLevel: "smart"
  }
*/

makes(theThirdLittlePig, 'bricks');

console.log(`Then, because ${theThirdLittlePig.name} was quite ${theThirdLittlePig.wisdomLevel}, she built her house out of ${theThirdLittlePig.house.madeOf}.`, theThirdLittlePig);

/*
Then, because Jiggy was quite smart, she built her house out of bricks.

  {
    name: "Jiggy",
    feels: "She's not lazy at all! Good for her",
    eats: "healthy veggies",
    wisdomLevel: "high",
    house: {
      madeOf: 'bricks'
    }
  };
*/
