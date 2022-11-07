import { theThreeLittlePigs } from "./page1.js";

const papaPiggy = {
  name: "Papa",
  feels: "Tired, like all dads.",
  children: theThreeLittlePigs,
  said: (words) => { return words },
  wisdomLevel: "Too tired to care. He's just so... so very tired."
}

const theBigBadWolf = {
  name: "Biggie Baddie",
  feels: "hungry",
  eats: "little pigs",
  wisdomLevel: "cunning"
}


const secondPage = () => papaPiggy.said(`Little pigs, little pigs, come over here! You're actually not so little anymore. It's time to go off into the world. You've lived here much too long. As long as you're clever, you probably won't get eaten by ${theBigBadWolf.name}, whom you may also remember as the Big Bad Wolf. Either way, good luck. It'll be fine!`)

/*
Little pigs, little pigs, come over here! It's time to go off into the world. You've lived here much too long. As long as you're clever, you probably won't get eaten by $Biggie Baddie, whom you may also remember as the Big Bad Wolf. Either way, good luck. It'll be fine!
*/

export { theBigBadWolf, secondPage }
