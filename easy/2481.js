/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
  if (n % 2 === 0) return n / 2;
  if (n > 1) return n;
  return 0;
};

console.log(numberOfCuts(8));
