/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  // check if it's even possible
  // it is not possible if both numbers at index i are greater than either last number
  // or if at least one number at index i is greater than both last numbers
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] > nums1.at(-1) && nums2[i] > nums1.at(-1)) return -1;
    if (nums1[i] > nums2.at(-1) && nums2[i] > nums2.at(-1)) return -1;
    if (nums1[i] > nums1.at(-1) && nums1[i] > nums2.at(-1)) return -1;
    if (nums2[i] > nums1.at(-1) && nums2[i] > nums2.at(-1)) return -1;
  }

  // don't swap last element:
  let swaps1 = 0;
  for (let i = 0; i < nums1.length; i++)
    if (nums1[i] > nums1.at(-1) || nums2[i] > nums2.at(-1)) swaps1++;

  // swap last element
  let swaps2 = 1;
  for (let i = 0; i < nums1.length - 1; i++)
    if (nums1[i] > nums2.at(-1) || nums2[i] > nums1.at(-1)) swaps2++;

  return Math.min(swaps1, swaps2);
};

console.log(minOperations([1, 2, 7], [4, 5, 2]));

// min number of swaps until last element in each array is >= all other elements in the array
// two cases:
// (1) don't swap last element
//      => iterate through each index to see if swap is necessary
//      => count number of swaps necessary
// (2) swap last element
//      => do same thing as above
