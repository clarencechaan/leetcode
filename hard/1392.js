/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function (s) {
  function isValid(length) {
    return s.slice(0, length) === s.slice(s.length - length);
  }

  for (let length = s.length - 1; length >= 0; length--)
    if (isValid(length)) return s.slice(0, length);
};

console.log(longestPrefix("level"));
