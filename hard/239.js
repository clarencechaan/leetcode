/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let stack = [nums[0]];
  for (let i = 1; i < k; i++) {
    while (nums[i] > stack[stack.length - 1]) stack.pop();
    stack.push(nums[i]);
  }

  let start = 0;
  let result = [stack[0]];
  for (let i = k; i < nums.length; i++) {
    if (nums[i - k] === stack[start]) start++;
    while (stack.length > start && nums[i] > stack[stack.length - 1])
      stack.pop();
    stack.push(nums[i]);
    result.push(stack[start]);
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
