/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let str = "";
  for (let i = 0; i < words.length && str.length < s.length; i++)
    str += words[i];

  return str === s;
};

console.log(
  isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
);
