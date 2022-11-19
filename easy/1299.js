/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let result = [];
  [...arr].reverse().reduce((max, num) => {
    result.push(max);
    return Math.max(num, max);
  }, -1);
  return result.reverse();
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
