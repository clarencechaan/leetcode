/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let ans = 0;

  while (nums.length > 3) {
    if (nums[nums.length - 1] === 1) nums.pop();
    else {
      nums[nums.length - 1] = +!nums[nums.length - 1];
      nums[nums.length - 2] = +!nums[nums.length - 2];
      nums[nums.length - 3] = +!nums[nums.length - 3];
      ans++;
    }
  }

  if (new Set(nums.join("").split("")).size !== 1) return -1;
  if (nums[0] === 0) ans++;
  return ans;
};

console.log(minOperations([0, 1, 1, 1]));
