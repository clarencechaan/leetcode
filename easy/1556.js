/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let str = n.toString();
  let result = "";

  for (let i = str.length - 3; i >= 1; i -= 3)
    result = "." + str.substring(i, i + 3) + result;
  result = str.substring(0, str.length % 3 || 3) + result;

  return result;
};

console.log(thousandSeparator(1234567890));
