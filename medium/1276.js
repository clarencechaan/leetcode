/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  let s = 2 * cheeseSlices - tomatoSlices / 2;
  let j = cheeseSlices - s;

  if (j >= 0 && j % 1 === 0 && s >= 0 && s % 1 === 0) return [j, s];
  else return [];
};

console.log(numOfBurgers(16, 7));

// 4j + 2s = t
// j + s = c

// j = c - s
// 4(c-s) + 2s = t
// 4c - 4s + 2s = t
// 4c - t = 2s
// s = 2c - .5t
