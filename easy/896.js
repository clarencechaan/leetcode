/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let nonDecreasing = true;
  let nonIncreasing = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) nonIncreasing = false;
    else if (nums[i] > nums[i + 1]) nonDecreasing = false;
  }

  return nonDecreasing || nonIncreasing;
};

console.log(isMonotonic([1, 3, 2]));
