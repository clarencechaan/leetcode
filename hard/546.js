/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function (boxes) {
  const n = boxes.length;

  const dp = Array(n + 1)
    .fill()
    .map(() =>
      Array(n + 1)
        .fill()
        .map(() => [])
    );

  function recursion(left = 0, right = n, numAttached = 0) {
    if (left >= right) return 0;
    if (right - left === 1) return (1 + numAttached) ** 2;

    if (dp[left][right][numAttached] >= 0) return dp[left][right][numAttached];

    const remove = (1 + numAttached) ** 2 + recursion(left + 1, right, 0);

    let keep = 0;
    for (let i = left + 1; i < right; i++) {
      if (boxes[i] !== boxes[left]) continue;
      keep = Math.max(
        keep,
        recursion(left + 1, i, 0) + recursion(i, right, numAttached + 1)
      );
    }

    const result = Math.max(keep, remove);
    dp[left][right][numAttached] = result;

    return result;
  }

  return recursion();
};

console.log(removeBoxes([1, 3, 2, 2, 2, 3, 4, 3, 1]));
