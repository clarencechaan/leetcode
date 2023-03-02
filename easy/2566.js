/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
  let str = num.toString();
  let min = num;
  let max = num;

  min = parseInt(str.replaceAll(str[0], "0"));
  for (const digit of str)
    if (digit < "9") {
      max = parseInt(str.replaceAll(digit, "9")) || max;
      break;
    }
  return max - min;
};

console.log(minMaxDifference(99999));
