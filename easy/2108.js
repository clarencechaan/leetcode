/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (isPalindromic(word)) return word;
  }

  return "";
};

function isPalindromic(s) {
  return s === s.split("").reverse().join("");
}

console.log(firstPalindrome(["notapalindrome", "racecar"]));
