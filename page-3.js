import { theThreeLittlePigs } from "./page-1";

const theFirstLittlePig = theThreeLittlePigs[0];

const makes = (pig, material) => {
  const house = {
    madeOf: material
  };
  return pig.house = house;
}

console.log(theFirstLittlePig);
/*
  {
    name: "Iggy",
    feels: "lazy"
    eats: "candy"
  }
*/

makes(theFirstLittlePig, 'straw');

console.log(`And so ${theFirstLittlePig.name} built their house out of ${theFirstLittlePig.house.madeOf}.`, theFirstLittlePig);
/*
  And so Iggy built their house out of straw.

  {
    name: "Iggy",
    feels: "lazy",
    eats: "candy",
    wisdomLevel: "low",
    house: {
      madeOf: 'straw'
    }
  }
*/

export default makes;
