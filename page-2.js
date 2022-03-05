import { theThreeLittlePigs, theBigBadWolf } from "./page-1";

const papaPiggy = {
  name: "papaPiggy",
  feels: "just really tired, as all dads are",
  children: theThreeLittlePigs,
  said: (words) => { return words; },
  wisdomLevel: "too tired to care"
}

const sendChildrenOffIntoTheWorld = (father) => {
  father.said(`My children! It's time to go off into the world. You've lived here much too long. As long as you're clever, you probably won't get eaten by the ${theBigBadWolf.name}. Either way, good luck. Send me postcards!`)
  return father.children;
}

sendChildrenOffIntoTheWorld(papaPiggy);
