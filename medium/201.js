/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  let result = left;
  for (let i = left + 1; i <= right; i++) {
    result = result & i;
    if (result === 0) break;
  }
  return result;
};

console.log(rangeBitwiseAnd(1, 2147483647));
