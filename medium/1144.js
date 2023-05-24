/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  // zigzag array where nums1[0] < nums1[1]
  let nums1 = [...nums];

  // zigzag array where nums2[0] > nums2[1]
  let nums2 = [...nums];

  for (let i = 1; i < nums1.length; i++)
    if (i % 2 === 0 && nums1[i - 1] >= nums1[i]) nums1[i - 1] = nums1[i] - 1;
    else if (i % 2 === 1 && nums1[i - 1] <= nums1[i])
      nums1[i] = nums1[i - 1] - 1;

  for (let i = 1; i < nums2.length; i++)
    if (i % 2 === 0 && nums2[i - 1] <= nums2[i]) nums2[i] = nums2[i - 1] - 1;
    else if (i % 2 === 1 && nums2[i - 1] >= nums2[i])
      nums2[i - 1] = nums2[i] - 1;

  let minMoves1 = 0;
  for (let i = 0; i < nums1.length; i++) minMoves1 += nums[i] - nums1[i];

  let minMoves2 = 0;
  for (let i = 0; i < nums2.length; i++) minMoves2 += nums[i] - nums2[i];

  return Math.min(minMoves1, minMoves2);
};

console.log(movesToMakeZigzag([9, 6, 1, 6, 2]));
