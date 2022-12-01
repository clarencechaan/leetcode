/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  return n >= 1 && Math.pow(4, Math.round(Math.log(n) / Math.log(4))) === n;
};

console.log(isPowerOfFour(16));
