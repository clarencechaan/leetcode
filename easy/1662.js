/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  // return word1.join("") === word2.join("");

  let str1 = "";
  let str2 = "";

  for (const sub of word1) str1 += sub;
  for (const sub of word2) str2 += sub;

  return str1 === str2;
};
