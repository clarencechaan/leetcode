/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function (blocked, source, target) {
  // idea:
  // dfs from `source` and dfs from `target`
  // if (dfs from `source` reaches 200 squares away or reaches `target`), AND
  // (dfs from `target` reaches 200 squares away or reaches `source`), return
  // true; otherwise return false

  const blockedMap = {};
  for (const [x, y] of blocked) {
    if (!blockedMap[x]) blockedMap[x] = {};
    blockedMap[x][y] = true;
  }

  function dfs(start, x = start[0], y = start[1], seen = new Set()) {
    if (x < 0 || x >= 1000000 || y < 0 || y >= 1000000 || blockedMap[x]?.[y])
      return false;

    if (start === source && x === target[0] && y === target[1]) return true;
    if (start === target && x === source[0] && y === source[1]) return true;

    const str = x + "," + y;
    if (seen.has(str)) return false;
    seen.add(str);

    if (Math.abs(x - start[0]) > 200 || Math.abs(y - start[1]) > 200)
      return true;

    return (
      dfs(start, x - 1, y, seen) ||
      dfs(start, x + 1, y, seen) ||
      dfs(start, x, y - 1, seen) ||
      dfs(start, x, y + 1, seen)
    );
  }

  return dfs(source) && dfs(target);
};

console.log(
  isEscapePossible(
    [
      [0, 1],
      [1, 0],
    ],
    [0, 0],
    [0, 2]
  )
);
