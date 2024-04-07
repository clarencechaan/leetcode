/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function (n, cost) {
  function getPathCosts(i = 1, total = 0, pathCosts = []) {
    if (i > n) return;
    total += cost[i - 1];
    if (i > n / 2) pathCosts[i - Math.ceil(n / 2)] = total;
    getPathCosts(i * 2, total, pathCosts);
    getPathCosts(i * 2 + 1, total, pathCosts);
    return pathCosts;
  }

  const pathCosts = getPathCosts();

  let increments = 0;
  for (let blockSize = 1; blockSize < pathCosts.length; blockSize *= 2) {
    for (let i = 0; i < pathCosts.length; i += blockSize * 2) {
      const max = Math.max(pathCosts[i], pathCosts[i + blockSize]);
      const diff = Math.abs(pathCosts[i] - pathCosts[i + blockSize]);
      increments += diff;
      pathCosts[i] = max;
    }
  }

  return increments;
};

console.log(minIncrements(7, [1, 5, 2, 2, 3, 3, 1]));
