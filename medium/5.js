/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function isPalindrome(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++)
      if (str[i] !== str[str.length - 1 - i]) return false;
    return true;
  }

  for (let i = s.length; i >= 1; i--)
    for (let j = 0; j + i <= s.length; j++)
      if (isPalindrome(s.substring(j, j + i))) return s.substring(j, j + i);
};

console.log(longestPalindrome("aaaaa"));
