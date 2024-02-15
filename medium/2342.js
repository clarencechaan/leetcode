/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let sumMap = {};
  for (const num of nums) {
    const sum = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
    if (!sumMap[sum]) sumMap[sum] = [];
    sumMap[sum].push(num);
  }

  let result = -1;
  for (const sum in sumMap) {
    if (sumMap[sum].length < 2) continue;
    let maxes = [0, 0];
    for (const num of sumMap[sum])
      if (num >= maxes[0]) maxes = [num, maxes[0]];
      else if (num > maxes[1]) maxes[1] = num;
    result = Math.max(result, maxes[0] + maxes[1]);
  }

  return result;
};

console.log(maximumSum([18, 43, 36, 13, 7]));
