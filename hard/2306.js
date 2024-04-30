/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function (ideas) {
  // naive approach, try every name
  // too slow O(n^2)

  const firstLetters = new Set(ideas.map((word) => word[0]));

  ideas = new Set(ideas);

  function isValidSwap(word, char) {
    return !ideas.has(char + word.slice(1));
  }

  const swapFreq = [];

  for (const word of ideas)
    for (const char of firstLetters)
      if (isValidSwap(word, char)) {
        const swap = word[0] + "," + char;
        swapFreq[swap] = (swapFreq[swap] || 0) + 1;
      }

  let result = 0;
  for (const swap in swapFreq) {
    const reverse = swap[2] + "," + swap[0];
    result += swapFreq[swap] * (swapFreq[reverse] || 0) * 2;
    delete swapFreq[swap];
    delete swapFreq[reverse];
  }

  return result;
};

console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));
