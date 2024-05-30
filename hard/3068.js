/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function (nums, k, edges) {
  const n = nums.length;

  // choose any `m` nodes to apply `XOR k` with, where `0 <= m <= n` and `m` is
  // even
  const m = n % 2 === 0 ? n : n - 1;

  const diffs = nums.map((num) => (num ^ k) - num);
  diffs.sort((a, b) => (a > b ? -1 : 1));

  let ans = nums.reduce((sum, num) => sum + num, 0);

  for (let i = 0; i < m; i += 2) {
    const sum = diffs[i] + diffs[i + 1];
    if (sum <= 0) break;
    ans += sum;
  }

  return ans;
};

console.log(
  maximumValueSum([1, 2, 1], 3, [
    [0, 1],
    [0, 2],
  ])
);
