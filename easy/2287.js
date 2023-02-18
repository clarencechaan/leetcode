/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  let sCounts = {};
  let targetCounts = {};

  for (const char of s)
    if (!sCounts[char]) sCounts[char] = 1;
    else sCounts[char]++;

  for (const char of target)
    if (!targetCounts[char]) targetCounts[char] = 1;
    else targetCounts[char]++;

  let result = 0;
  while (true) {
    for (const char in targetCounts)
      if (sCounts[char] >= targetCounts[char])
        sCounts[char] -= targetCounts[char];
      else return result;
    result++;
  }
};

console.log(rearrangeCharacters("abcbac", "abc"));
