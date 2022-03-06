import { theThreeLittlePigs } from "./page-1.js";
import { makes } from "./page-3.js";

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
