/**
 * @param {number[][]} cuboids
 * @return {number}
 */
var maxHeight = function (cuboids) {
  for (const cuboid of cuboids) cuboid.sort((a, b) => (a > b ? -1 : 1));
  cuboids.sort((a, b) =>
    a[0] > b[0] ||
    (a[0] === b[0] && (a[1] > b[1] || (a[1] === b[1] && a[2] > b[2])))
      ? -1
      : 1
  );

  const dp = Array(cuboids.length).fill(-1);
  // returns the maximum height of a stack with `cuboids[idx]` as the base
  function recursiveMaxHeight(idx) {
    if (idx >= cuboids.length) return 0;
    if (dp[idx] >= 0) return dp[idx];
    const [height1, width1, length1] = cuboids[idx];
    let result = height1;
    for (let i = idx + 1; i < cuboids.length; i++) {
      const [height2, width2, length2] = cuboids[i];
      if (height2 <= height1 && width2 <= width1 && length2 <= length1)
        result = Math.max(result, height1 + recursiveMaxHeight(i));
    }
    dp[idx] = result;
    return result;
  }

  for (let i = 0; i < cuboids.length; i++) recursiveMaxHeight(i);
  return Math.max(...dp);
};

console.log(
  maxHeight([
    [50, 45, 20],
    [95, 37, 53],
    [45, 23, 12],
  ])
);
