/**
 * @param {number} num
 * @return {string}
 */
// convertToBase7(100):
//  last digit = 100 % 7 = 2
//  second last digit = Math.floor(100 / 7) % 7 = 0
//  third last digit = Math.floor(100 / 7 / 7) % 7 = 2
//  stop because 7 * 7 * 7 > 100
var convertToBase7 = function (num) {
  let str = "";
  let n = 0;
  let abs = Math.abs(num);
  while (Math.pow(7, n) <= abs) {
    str = getNthLastDigit(abs, n) + str;
    n++;
  }
  if (num < 0) str = "-" + str;
  return str || "0";
};

function getNthLastDigit(num, n) {
  return Math.floor(num / Math.pow(7, n)) % 7;
}

console.log(convertToBase7(100));
