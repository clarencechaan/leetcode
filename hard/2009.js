/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;

  // need to find the longest sequence of unique numbers in `nums` where the max
  // elem is no greater than the min elem + `n-1`
  // => apply operation to all other numbers that are not part of this sequence

  const unique = [...new Set(nums)].sort((a, b) => (a > b ? 1 : -1));

  let left = 0;
  let right = 0;
  for (; right < unique.length; right++)
    if (unique[right] - unique[left] > n - 1) left++;

  return n - (right - left);
};

console.log(minOperations([4, 2, 5, 3]));
