/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  function getDigitsSum(num) {
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => parseInt(digit) + sum, 0);
  }

  let result = num;
  while (result >= 10) result = getDigitsSum(result);
  return result;
};

console.log(addDigits(38));
