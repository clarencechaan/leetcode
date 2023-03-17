/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const n = nums1.length;
  let result = 0;

  let ij = {};

  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      ij[nums1[i] + nums2[j]] = (ij[nums1[i] + nums2[j]] || 0) + 1;

  for (let k = 0; k < n; k++)
    for (let l = 0; l < n; l++) result += ij[-nums3[k] - nums4[l]] || 0;

  return result;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
