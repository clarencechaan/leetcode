/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let result = 0;

  for (let i = num; i > 0; i--) {
    let sum = 0;
    for (const digit of i.toString()) sum += parseInt(digit);
    if (sum % 2 === 0) result++;
  }

  return result;
};

console.log(countEven(30));
