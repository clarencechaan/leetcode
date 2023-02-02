/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let evenDigits = new Set(["0", "2", "4", "6", "8"]);
  while (evenDigits.has(num.slice(-1))) num = num.substring(0, num.length - 1);
  return num;
};

console.log(largestOddNumber("35427"));
