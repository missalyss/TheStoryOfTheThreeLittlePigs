const theThreeLittlePigs = [
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
    name: "Figgy",
    feels: "She's not lazy at all! Good for her",
    eats: "healthy veggies",
    wisdomLevel: "smart"
  }
];

const firstPage = () => {
  return `Once upon a time, there were three little pigs. Their names were ${theThreeLittlePigs[0].name}, ${theThreeLittlePigs[1].name}, and ${theThreeLittlePigs[2].name}.`;
};

/*
  Once upon a time, there were three little pigs. Their names were Iggy, Ziggy, and Figgy.
*/


export { theThreeLittlePigs, firstPage };
