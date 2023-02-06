/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let digits = [];
  let str = num.toString();
  for (const char of str) digits.push(char);

  digits.sort((a, b) => (a > b ? -1 : 1));

  let new1 = "";
  let new2 = "";

  for (let i = 0; i < digits.length; i += 2) {
    new1 = digits[i] + new1;
    if (digits[i + 1]) new2 = digits[i + 1] + new2;
  }

  new1 = parseInt(new1);
  new2 = parseInt(new2);

  return new1 + new2;
};

console.log(minimumSum(4009));
