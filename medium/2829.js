/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minimumSum = function (n, k) {
  const set = new Set();
  for (let i = 1; set.size < n; i++) if (!set.has(k - i)) set.add(i);
  return [...set].reduce((sum, num) => sum + num, 0);
};

console.log(minimumSum(5, 4));
