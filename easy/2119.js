/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  return num % 10 !== 0 || num === 0;
};

console.log(isSameAfterReversals(0));
