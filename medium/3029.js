/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function (word, k) {
  let time = 0;
  while (time === 0 || !word.startsWith(word.slice(time * k))) time++;
  return time;
};

console.log(minimumTimeToInitialState("abacaba", 3));
