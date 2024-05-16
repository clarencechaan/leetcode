/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (mat, k) {
  const n = mat.length;
  const m = mat[0].length;

  // naive approach:
  // 1. store every possible array sum in an array
  // 2. sort the array in ascending order
  // 3. return the k-1-th element
  // (n^m space, n^m log (n^m) time; speed & memory inefficient)

  // another idea:
  // 1. find a way to count the number of subarrays that have a sum <= some
  // number, put it in a helper function called `numSubarrays(sum)`
  // 2. declare `ans` as 0, and increment it until `numSubarrays(ans) >= k`

  const memo = Array(n)
    .fill()
    .map(() => []);
  function numSubarrays(sum, idx = 0) {
    if (sum < 0) return 0;
    if (idx >= n) return 1;
    if (memo[idx][sum] >= 0) return memo[idx][sum];

    const row = mat[idx];
    let count = 0;
    for (let i = 0; i < m; i++) count += numSubarrays(sum - row[i], idx + 1);

    memo[idx][sum] = count;
    return count;
  }

  let ans = 0;
  while (numSubarrays(ans) < k) ans++;
  return ans;
};

console.log(
  kthSmallest(
    (mat = [
      [1, 3, 11],
      [2, 4, 6],
    ]),
    (k = 5)
  )
);
