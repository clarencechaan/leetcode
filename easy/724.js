/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = nums.reduce((sum, num) => sum + num, 0);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const tar = (total - nums[i]) / 2;
    if (sum === tar) return i;
    sum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
