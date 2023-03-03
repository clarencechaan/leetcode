/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((val, sum) => sum + val, 0) - nums[0];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    left[i] = leftSum;
    right[i] = rightSum;
    leftSum += nums[i];
    rightSum -= nums[i + 1];
  }

  let answer = [];
  for (let i = 0; i < nums.length; i++)
    answer[i] = Math.abs(left[i] - right[i]);
  return answer;
};

console.log(leftRigthDifference([10, 4, 8, 3]));
