/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let sign = 1;
  let sum = 0;
  for (const digit of n.toString()) {
    sum += parseInt(digit) * sign;
    sign *= -1;
  }
  return sum;
};
