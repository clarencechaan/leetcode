/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  function gcd(x, y) {
    if (y === 0) return x;
    return gcd(y, x % y);
  }

  const gcdMap = Array(nums.length)
    .fill()
    .map(() => []);
  for (let i = 0; i < nums.length; i++)
    for (let j = i + 1; j < nums.length; j++) {
      gcdMap[i][j] = gcd(nums[i], nums[j]);
      gcdMap[j][i] = gcdMap[i][j];
    }

  function recursion(idx = 0, taken = new Set()) {
    if (taken.size === nums.length) return getScore([...taken]);
    if (taken.has(idx)) return recursion(idx + 1, taken);
    taken.add(idx);

    let result = 0;
    for (let otherIdx = idx + 1; otherIdx < nums.length; otherIdx++) {
      if (taken.has(otherIdx)) continue;
      taken.add(otherIdx);
      result = Math.max(result, recursion(idx + 1, taken));
      taken.delete(otherIdx);
    }

    taken.delete(idx);

    return result;
  }

  function getScore(indices) {
    let score = [];
    for (let i = 0; i < indices.length; i += 2)
      score.push(gcdMap[indices[i]][indices[i + 1]]);
    score.sort((a, b) => (a > b ? 1 : -1));
    score = score.reduce((sum, val, idx) => sum + val * (idx + 1), 0);
    return score;
  }

  return recursion();
};

console.log(maxScore([1, 2]));
