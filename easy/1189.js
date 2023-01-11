/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let counts = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (const char of text) if (counts[char] !== undefined) counts[char]++;

  counts["l"] = Math.floor(counts["l"] / 2);
  counts["o"] = Math.floor(counts["o"] / 2);

  let result = Infinity;
  for (const char in counts) result = Math.min(counts[char], result);

  return result;
};

console.log(maxNumberOfBalloons("leetcode"));
