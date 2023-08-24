/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function (n, k) {
  n--;

  let dp = [];
  for (let i = 0; i < n; i++) dp.push([]);

  function recurse(idx = 0, seg = 0) {
    if (dp[idx][seg] !== undefined) return dp[idx][seg];
    if (seg === k - 1) {
      let width = n - idx;
      let combinations = (width * (width + 1)) / 2;
      return combinations;
    }

    let sum = 0;
    for (let i = idx; n - i >= k - seg; i++) {
      let width = i + 1 - idx;
      sum = sum + width * recurse(i + 1, seg + 1);
    }

    sum = sum % (10 ** 9 + 7);
    dp[idx][seg] = sum;
    return sum;
  }

  return recurse();
};

console.log(numberOfSets(4, 2));
