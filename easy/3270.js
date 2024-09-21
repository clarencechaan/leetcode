/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  num1 = num1.toString();
  num2 = num2.toString();
  num3 = num3.toString();
  if (num1.length < 4) num1 = "0".repeat(4 - num1.length) + num1;
  if (num2.length < 4) num2 = "0".repeat(4 - num2.length) + num2;
  if (num3.length < 4) num3 = "0".repeat(4 - num3.length) + num3;

  return +[
    Math.min(num1[0], num2[0], num3[0]),
    Math.min(num1[1], num2[1], num3[1]),
    Math.min(num1[2], num2[2], num3[2]),
    Math.min(num1[3], num2[3], num3[3]),
  ].join("");
};

console.log(generateKey(1, 10, 1000));
