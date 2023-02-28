/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let max = 0;
  for (const str of strs) {
    let value;
    if (parseInt(str) != str) value = str.length;
    else value = parseInt(str);
    max = Math.max(value, max);
  }
  return max;
};

console.log(maximumValue(["3glko", "1"]));
