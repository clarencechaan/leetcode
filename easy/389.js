/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sortedS = s.split("").sort((a, b) => (a > b ? 1 : -1));
  let sortedT = t.split("").sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < sortedT.length; i++) {
    if (sortedS[i] !== sortedT[i]) return sortedT[i];
  }
};

console.log(findTheDifference("abcd", "abcde"));
