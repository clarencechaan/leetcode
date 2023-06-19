/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  function recurse(idx = 0, distribution = Array(k).fill(0)) {
    if (idx >= cookies.length)
      return distribution.reduce((max, val) => Math.max(max, val), 0);
    let min = Infinity;
    for (let i = 0; i < k; i++) {
      let nextDistribution = [...distribution];
      nextDistribution[i] += cookies[idx];
      min = Math.min(min, recurse(idx + 1, nextDistribution));
    }
    return min;
  }

  return recurse();
};

console.log(distributeCookies([6, 1, 3, 2, 2, 4, 1, 2], 3));
