// consider having the story told at the end, and loop through all the pages.
// what if package.json was the title page?

import { firstPage } from './page1.js';
import { secondPage } from './page2.js';

// const tell = (page) => {
//   return page;
// };

const theStoryOfTheThreeLittlePigs = [ firstPage, secondPage ];

theStoryOfTheThreeLittlePigs.forEach((page) => {
  const readPage = page()
  console.log(readPage)
});
