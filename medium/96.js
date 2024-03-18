/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // idea:
  // 1. create a helper function numTreesRecursive(left, right) that returns the number of structurally unique BSTs with values
  //    ranging from left to right
  // 2. return numTreesRecursive(1, n)

  let dp = [];
  for (let i = 1; i <= n; i++) dp.push([]);
  function numTreesRecursive(left = 1, right = n) {
    if (left >= right) return 1;
    if (dp[left][right] !== undefined) return dp[left][right];
    let result = 0;
    for (let rootVal = left; rootVal <= right; rootVal++) {
      result +=
        numTreesRecursive(left, rootVal - 1) *
        numTreesRecursive(rootVal + 1, right);
    }
    dp[left][right] = result;
    return result;
  }

  return numTreesRecursive();
};

console.log(numTrees(3));
