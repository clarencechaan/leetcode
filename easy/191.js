/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((char) => char === "1").length;
};

console.log(hammingWeight(10000000000000000000000000000000));
