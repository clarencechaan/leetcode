/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function (pizza, k) {
  const height = pizza.length;
  const width = pizza[0].length;

  function hasApple(x1, y1, x2, y2) {
    for (let y = y1; y < y2; y++)
      for (let x = x1; x < x2; x++) if (pizza[y][x] === "A") return true;
    return false;
  }

  const memo = Array(width)
    .fill()
    .map(() =>
      Array(height)
        .fill()
        .map(() => [])
    );

  function recursionWays(x = 0, y = 0, cuts = k - 1) {
    if (cuts === 0) return +hasApple(x, y, width, height);
    if (memo[x][y][cuts] >= 0) return memo[x][y][cuts];

    let result = 0;

    for (let cy = y + 1; cy < height; cy++)
      if (hasApple(x, y, width, cy)) result += recursionWays(x, cy, cuts - 1);

    for (let cx = x + 1; cx < width; cx++)
      if (hasApple(x, y, cx, height)) result += recursionWays(cx, y, cuts - 1);

    result %= 10 ** 9 + 7;

    memo[x][y][cuts] = result;
    return result;
  }

  return recursionWays();
};

console.log(ways(["A..", "AAA", "..."], 3));
