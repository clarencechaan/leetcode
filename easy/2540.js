/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let common = new Set();

  for (const num of set1) if (set2.has(num)) common.add(num);
  common = [...common].sort((a, b) => (a > b ? 1 : -1));
  return common[0] || -1;
};
