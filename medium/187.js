/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let result = new Set();
  let seen = new Set();

  for (let i = 0; i + 10 <= s.length; i++) {
    const substr = s.substring(i, i + 10);
    if (seen.has(substr)) result.add(substr);
    else seen.add(substr);
  }

  return [...result];
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));
