/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let expected = [...heights].sort((a, b) => (a > b ? 1 : -1));
  let count = 0;
  for (let i = 0; i < heights.length; i++)
    if (heights[i] !== expected[i]) count++;
  return count;
};

console.log(heightChecker([5, 1, 2, 3, 4]));
