/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let length = 1;
  while (nums[length] === nums[length - 1] + 1) length++;

  let ans = nums.slice(0, length).reduce((sum, num) => sum + num, 0);

  const set = new Set(nums);
  while (set.has(ans)) ans++;

  return ans;
};

console.log(missingInteger([1, 2, 3, 2, 5]));
