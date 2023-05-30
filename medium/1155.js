/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  let ways = Array(k).fill(1n);

  while (n > 1) {
    let prev = ways;
    ways = Array(prev.length).fill(0n);
    for (let i = 0; i < prev.length; i++)
      if (prev[i])
        for (let j = 1; j <= k; j++)
          ways[i + j] = (ways[i + j] || 0n) + prev[i];
    n--;
  }

  return Number((ways[target - 1] || 0n) % (10n ** 9n + 7n));
};

console.log(numRollsToTarget(2, 6, 7));
