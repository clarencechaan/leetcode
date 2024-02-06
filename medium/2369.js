/**
 * @param {number[]} nums
 * @return {boolean}
 */
var validPartition = function (nums) {
  let memo = [];
  function isValid(idx = 0) {
    if (idx >= nums.length) return true;
    if (memo[idx] !== undefined) return memo[idx];
    let result = false;
    if (nums[idx] === nums[idx + 1]) result = result || isValid(idx + 2);
    if (nums[idx] === nums[idx + 1] && nums[idx + 1] === nums[idx + 2])
      result = result || isValid(idx + 3);
    if (nums[idx] + 1 === nums[idx + 1] && nums[idx + 1] + 1 === nums[idx + 2])
      result = result || isValid(idx + 3);
    memo[idx] = result;
    return result;
  }

  return isValid();
};

console.log(validPartition([4, 4, 4, 5, 6]));
