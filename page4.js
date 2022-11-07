import { theThreeLittlePigs } from "./page1.js";
import { makes } from "./page3.js";

const theSecondLittlePig = theThreeLittlePigs[1];
console.log(theSecondLittlePig);
/*
  {
    name: "Ziggy",
    feels: "also pretty lazy",
    eats: "candle wax"
  }
*/

makes(theSecondLittlePig, 'sticks');

console.log(`Then, ${theSecondLittlePig.name} built their house out of ${theSecondLittlePig.house.madeOf}.`, theSecondLittlePig);

/*
Then, Ziggy built their house out of sticks.
  {
    name: "Ziggy",
    feels: "also pretty lazy",
    eats: "candle wax",
    wisdomLevel: "even lower",
    house: {
      madeOf: 'sticks'
    }
  };
*/
