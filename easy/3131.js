/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function (nums1, nums2) {
  const min1 = nums1.reduce((min, num) => Math.min(min, num), Infinity);
  const min2 = nums2.reduce((min, num) => Math.min(min, num), Infinity);
  return min2 - min1;
};

console.log(addedInteger([2, 6, 4], [9, 7, 5]));
