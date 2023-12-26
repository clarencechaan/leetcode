/**
 * @param {number} startPos
 * @param {number} endPos
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function (startPos, endPos, k) {
  let memo = [];
  for (let i = 0; i <= 2 * k; i++) memo.push([]);

  function recurse(pos = startPos, stepsRemaining = k) {
    if (pos === endPos && !stepsRemaining) return 1;
    if (stepsRemaining <= 0 || stepsRemaining < Math.abs(endPos - pos))
      return 0;
    if (memo[pos - startPos + k][stepsRemaining] !== undefined)
      return memo[pos - startPos + k][stepsRemaining];
    let result =
      (recurse(pos - 1, stepsRemaining - 1) || 0) +
      (recurse(pos + 1, stepsRemaining - 1) || 0);
    memo[pos - startPos + k][stepsRemaining] = result;
    return result % (10 ** 9 + 7);
  }

  return recurse();
};

console.log(numberOfWays(1, 2, 3));
