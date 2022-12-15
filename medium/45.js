/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let minArr = [0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i] && i + j < nums.length; j++)
      if (!minArr[i + j]) minArr[i + j] = minArr[i] + 1;
  }

  return minArr.pop();
};

console.log(jump([1, 2, 1, 1, 1]));
