/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  dominoes.forEach((domino) => domino.sort());
  dominoes.sort();

  let counts = {};
  for (const domino of dominoes)
    if (!counts[domino]) counts[domino] = 1;
    else counts[domino]++;

  let result = 0;
  for (const domino in counts)
    result += ((counts[domino] - 1) * counts[domino]) / 2;

  return result;
};

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
);
