/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  let result = new Set();
  for (let i = 0; Math.pow(x, i) <= bound && !(x === 1 && i >= 1); i++) {
    for (let j = 0; Math.pow(y, j) <= bound && !(y === 1 && j >= 1); j++) {
      let sum = Math.pow(x, i) + Math.pow(y, j);
      if (sum > bound) break;
      else result.add(sum);
    }
  }

  result = [...result];
  return result;
};

console.log(powerfulIntegers(2, 1, 10));
