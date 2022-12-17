/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let runningTotal = 0;
  let min = 0;
  let largestDiff = 0;

  for (const num of nums) {
    runningTotal += num;
    largestDiff = Math.max(runningTotal - min, largestDiff);
    min = Math.min(runningTotal, min);
  }

  return (
    largestDiff ||
    nums.reduce((highest, num) => Math.max(highest, num), nums[0])
  );
};

console.log(maxSubArray([1, -1, -2]));

// [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//  -2 -1  -4  0  -1  1  2  -3  1   running total L->R
//   1  3   2  5   1  2  0  -1  4   running total R->L

// [5, 4, -1, 7, 8];
//  5  9   8 15 23
