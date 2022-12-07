/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  function shift(s) {
    return s.slice(1) + s.slice(0, 1);
  }

  let shifted = s;

  for (let i = 0; i < s.length; i++) {
    if (shifted === goal) return true;
    shifted = shift(shifted);
  }

  return false;
};

console.log(rotateString("abcde", "eabcd"));
