/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n >= 1 && Math.pow(2, Math.round(Math.log2(n))) === n;
};

console.log(isPowerOfTwo(2));
