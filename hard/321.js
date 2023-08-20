/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  function maxNumOfLength(nums, length, left = 0) {
    if (length <= 0) return "";
    let idx;
    for (let i = left; i < nums.length - (length - 1); i++)
      if (idx === undefined || nums[i] > nums[idx]) idx = i;
    return nums[idx].toString() + maxNumOfLength(nums, length - 1, idx + 1);
  }

  let max = "";
  let lower = Math.max(0, k - nums2.length);
  let upper = Math.min(k, nums1.length);
  for (let length1 = lower; length1 <= upper; length1++) {
    let length2 = k - length1;
    let max1 = maxNumOfLength(nums1, length1);
    let max2 = maxNumOfLength(nums2, length2);
    let combined = "";
    let i = 0;
    let j = 0;
    while (i < length1 || j < length2) {
      let offset = 0;
      while (
        max1[i + offset] &&
        max2[j + offset] &&
        max1[i + offset] === max2[j + offset]
      )
        offset++;
      if (j + offset >= length2 || max1[i + offset] > max2[j + offset]) {
        combined += max1[i];
        i++;
      } else if (i + offset >= length1 || max2[j + offset] > max1[i + offset]) {
        combined += max2[j];
        j++;
      }
    }
    if (combined > max) max = combined;
  }

  return max.split("").map((str) => parseInt(str));
};

console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5));
