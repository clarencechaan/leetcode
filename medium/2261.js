/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function (nums, k, p) {
  const seen = new Set();

  function isValid(subarray) {
    const str = subarray.join(",");
    if (seen.has(str)) return false;
    seen.add(str);
    let count = 0;
    for (const num of subarray) if (num % p === 0) count++;
    return count <= k;
  }

  let result = 0;
  for (let left = 0; left < nums.length; left++)
    for (let right = left + 1; right <= nums.length; right++)
      if (isValid(nums.slice(left, right))) result++;
  return result;
};
