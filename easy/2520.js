/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let result = 0;
  for (const digit of num.toString()) if (num % parseInt(digit) === 0) result++;
  return result;
};
