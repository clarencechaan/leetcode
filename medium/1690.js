/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  const n = stones.length;
  let sums = [0];
  for (let i = 0; i < n; i++) sums[i + 1] = sums[i] + stones[i];

  let memo = [];
  for (let i = 0; i < n; i++) memo.push([]);
  function recurse(left = 0, right = n - 1) {
    if (left === right) return [0, 0];
    if (memo[left][right] !== undefined) return memo[left][right];
    let sum = sums[right + 1] - sums[left];
    let turn = (left + n - 1 - right) % 2;
    let leftCall = recurse(left + 1, right);
    let rightCall = recurse(left, right - 1);
    leftCall[turn] += sum - stones[left];
    rightCall[turn] += sum - stones[right];

    let result;
    if (
      (turn === 0 && leftCall[0] - leftCall[1] > rightCall[0] - rightCall[1]) ||
      (turn === 1 && leftCall[0] - leftCall[1] < rightCall[0] - rightCall[1])
    )
      result = leftCall;
    else result = rightCall;
    memo[left][right] = [...result];
    return result;
  }

  let score = recurse();
  return score[0] - score[1];
};

console.log(stoneGameVII([5, 3, 1, 4, 2]));
