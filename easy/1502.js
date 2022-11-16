/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  const sorted = arr.sort((a, b) => a - b);
  const diff = sorted[0] - sorted[1];
  for (let i = 1; i < sorted.length - 1; i++) {
    if (sorted[i] - sorted[i + 1] !== diff) return false;
  }
  return true;
};

console.log(canMakeArithmeticProgression([-68, -96, -12, -40, 16]));
