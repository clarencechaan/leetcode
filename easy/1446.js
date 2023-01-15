/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 1;
  let power = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) power++;
    else power = 1;
    max = Math.max(max, power);
  }

  return max;
};

console.log(maxPower("leetcode"));
