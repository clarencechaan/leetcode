/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let intersection = [];
  for (const num of nums1) {
    if (!intersection.includes(num) && nums2.includes(num))
      intersection.push(num);
  }
  return intersection;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
