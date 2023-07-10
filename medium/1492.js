/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  for (let i = 1; i <= n; i++)
    if (n % i === 0) {
      k--;
      if (!k) return i;
    }
  return -1;
};

console.log(kthFactor(12, 3));
