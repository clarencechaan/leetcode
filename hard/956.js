/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function (rods) {
  const sum = rods.reduce((sum, rod) => sum + rod, 0);
  const maxHeight = Math.floor(sum / 2);

  const memo = Array(rods.length + 1)
    .fill()
    .map(() => []);

  function recursion(idx = 0, net = 0) {
    if (Math.abs(net) > maxHeight) return -Infinity;
    if (idx >= rods.length) return net === 0 ? 0 : -Infinity;
    if (memo[idx][maxHeight + net] !== undefined)
      return memo[idx][maxHeight + net];

    const skip = recursion(idx + 1, net);
    const takeLeft = rods[idx] + recursion(idx + 1, net + rods[idx]);
    const takeRight = recursion(idx + 1, net - rods[idx]);
    const result = Math.max(skip, takeLeft, takeRight);

    memo[idx][maxHeight + net] = result;

    return result;
  }

  return recursion();
};

console.log(tallestBillboard([1, 2, 3, 6]));
