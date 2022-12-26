/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++)
      if (str[i] !== str[str.length - 1 - i]) return false;
    return true;
  }

  let result = [];

  (function recurse(arr = [], rest = s) {
    if (!rest) {
      result.push(arr);
      return;
    }
    for (let i = 1; i <= rest.length; i++)
      if (isPalindrome(rest.slice(0, i)))
        recurse([...arr, rest.slice(0, i)], rest.slice(i));
  })();

  return result;
};

console.log(partition("racecarxracecar"));
