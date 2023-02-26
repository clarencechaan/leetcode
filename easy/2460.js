/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const n = nums.length;
  for (let i = 0; i < nums.length - 1; i++)
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }

  nums = nums.filter((num) => num);
  while (nums.length < n) nums.push(0);
  return nums;
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
