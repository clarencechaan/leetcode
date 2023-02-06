/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  let result = 0;

  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) num1 -= num2;
    else num2 -= num1;
    result++;
  }

  return result;
};

console.log(countOperations(10, 10));
