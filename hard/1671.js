/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const n = nums.length;

  // longest increasing subsequence ending in and including nums[end]
  const memo1 = Array(n)
    .fill()
    .map(() => []);
  function lis(start, end) {
    if (memo1[start][end] >= 0) return memo1[start][end];
    const num = nums[end - 1];
    let max = 1;
    for (let i = end - 1; i >= 0; i--)
      if (nums[i] < num) max = Math.max(max, 1 + lis(start, i + 1));
    memo1[start][end] = max;
    return max;
  }

  // longest decreasing subsequence starting from and including nums[start]
  const memo2 = Array(n)
    .fill()
    .map(() => []);
  function lds(start, end) {
    if (memo2[start][end] >= 0) return memo2[start][end];
    const num = nums[start];
    let max = 1;
    for (let i = start + 1; i < end; i++)
      if (num > nums[i]) max = Math.max(max, 1 + lds(i, end));
    memo2[start][end] = max;
    return max;
  }

  let ans = nums.length;

  for (let peak = 1; peak < nums.length - 1; peak++) {
    const length1 = lis(0, peak + 1);
    const length2 = lds(peak, nums.length);
    if (length1 > 1 && length2 > 1)
      ans = Math.min(ans, nums.length - length1 - length2 + 1);
  }

  return ans;
};

console.log(minimumMountainRemovals([1, 3, 1]));
