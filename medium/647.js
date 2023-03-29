/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  function isPalindrome(left, right) {
    for (let i = 0; i < (right - left) / 2; i++)
      if (s[left + i] !== s[right - 1 - i]) return false;
    return true;
  }

  let result = 0;
  for (let length = s.length; length >= 1; length--)
    for (let i = 0; i + length <= s.length; i++)
      if (isPalindrome(i, i + length)) result++;
  return result;
};

console.log(countSubstrings("aaa"));
