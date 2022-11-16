/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return n >= 1 && Math.pow(3, Math.round(Math.log(n) / Math.log(3))) === n;
};

console.log(isPowerOfThree(27));
