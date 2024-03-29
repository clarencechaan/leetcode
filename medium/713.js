/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      if (product < k) result++;
      else break;
    }
  }

  return result;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
