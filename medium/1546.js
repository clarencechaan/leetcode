/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
  let sum = [0];
  for (const num of nums) sum.push(sum[sum.length - 1] + num);

  function getMaxSubarrays(idx = 0) {
    if (idx >= sum.length) return 0;
    let set = new Set([sum[idx]]);
    for (let i = idx + 1; i < sum.length; i++)
      if (set.has(sum[i] - target)) return 1 + getMaxSubarrays(i);
      else set.add(sum[i]);
    return 0;
  }

  return getMaxSubarrays();
};

console.log(maxNonOverlapping([1, 1, 1, 1, 1], 2));
