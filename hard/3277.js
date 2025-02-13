/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximumSubarrayXor = function (nums, queries) {
  const n = nums.length;
  const xorMat = [[...nums]];
  for (let i = 1; i < n; i++) {
    xorMat[i] = Array(n).fill(0);
    for (let j = 0; j < n - i; j++) {
      xorMat[i][j] = xorMat[i - 1][j] ^ xorMat[i - 1][j + 1];
    }
  }

  function getXorScore(left, right) {
    const length = right - left;
    return xorMat[length][left];
  }

  const maxScoreDp = Array(n)
    .fill()
    .map(() => []);
  function getMaxScore(left, right) {
    if (left === right) return getXorScore(left, right);
    if (maxScoreDp[left][right] !== undefined) return maxScoreDp[left][right];
    const max = Math.max(
      getXorScore(left, right),
      getMaxScore(left + 1, right),
      getMaxScore(left, right - 1)
    );
    maxScoreDp[left][right] = max;
    return max;
  }

  const answer = queries.map((query) => getMaxScore(...query));
  return answer;
};
