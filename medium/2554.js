/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  banned = new Set(banned);

  let curr = 1;
  let sum = 0;
  let count = 0;

  while (sum + curr <= maxSum && curr <= n) {
    if (!banned.has(curr)) {
      count++;
      sum += curr;
    }
    curr++;
  }

  return count;
};

console.log(maxCount([1, 6, 5], 5, 6));
