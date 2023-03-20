/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  return nums.map((a, aIdx) => {
    let idx = nums.findIndex((b, bIdx) => bIdx > aIdx && b > a);
    if (idx === -1) idx = nums.findIndex((b, bIdx) => bIdx < aIdx && b > a);
    if (idx === -1) return -1;
    else return nums[idx];
  });
};

console.log(nextGreaterElements([1, 2, 3, 4, 3]));
