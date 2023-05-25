/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  if (palindrome.length === 1) return "";
  for (let i = 0; i <= palindrome.length / 2 - 1; i++)
    if (palindrome[i] > "a")
      return palindrome.substring(0, i) + "a" + palindrome.substring(i + 1);
  return palindrome.substring(0, palindrome.length - 1) + "b";
};

console.log(breakPalindrome("abccba"));
