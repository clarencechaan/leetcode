/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  let indices = [];

  for (let i = 0; i < nums.length; i++)
    if (nums[i] === key)
      for (
        let j = Math.max(
          i - k,
          indices[indices.length - 1] ? indices[indices.length - 1] + 1 : 0
        );
        j <= Math.min(i + k, nums.length - 1);
        j++
      )
        indices.push(j);

  return indices;
};

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1));
