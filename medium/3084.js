/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function (s, c) {
  // if c appears in s 3 times
  // then there would be how many substrings?
  // xcxcxcx
  // we count the number of pairs we can form for each occurence of c
  // => 3 + 2 + 1
  // 4 times?
  // xcxcxcxcx
  // => 4 + 3 + 2 + 1 === n + (n-1) + (n-2) + ... + 1 === n*(n+1)/2

  // idea:
  // 1. count the number of times that c appears in s, call this number n
  // 2. return n*(n+1)/2

  let n = 0;
  for (let i = 0; i < s.length; i++) if (s.slice(i, i + c.length) === c) n++;
  return (n * (n + 1)) / 2;
};

console.log(countSubstrings("abada", "a"));
