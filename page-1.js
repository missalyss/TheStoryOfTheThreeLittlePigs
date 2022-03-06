export const theThreeLittlePigs = [
   {
    name: "Iggy",
    feels: "lazy",
    eats: "candy",
    wisdomLevel: "pretty dumb, mostly because of his laziness"
  },
  {
    name: "Ziggy",
    feels: "about as lazy as Iggy",
    eats: "candle wax",
    wisdomLevel: "not very bright"
  },
  {
    name: "Jiggy",
    feels: "She's not lazy at all! Good for her",
    eats: "healthy veggies",
    wisdomLevel: "smart"
  }
];

export const theBigBadWolf = {
  name: "Biggie Baddie",
  feels: "hungry",
  eats: "little pigs",
  wisdomLevel: "cunning"
}

console.log(`Once upon a time, there were three little pigs. Their names were ${theThreeLittlePigs[0].name}, ${theThreeLittlePigs[1].name}, and ${theThreeLittlePigs[2].name}.`)

console.log(`There was also a big, bad wolf, named ${theBigBadWolf.name}. He was quite ${theBigBadWolf.feels}, especially for ${theBigBadWolf.eats}.`);

/*
  Once upon a time, there were three little pigs. Their names were Iggy, Ziggy, and Jiggy.

  There was also a big, bad wolf, named Biggie Baddie. He was quite hungry, especially for little pigs.
*/
