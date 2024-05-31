/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  const verticalChildren = Array(k)
    .fill()
    .map(() => []);
  const verticalParents = Array(k)
    .fill()
    .map(() => []);
  const horizontalChildren = Array(k)
    .fill()
    .map(() => []);
  const horizontalParents = Array(k)
    .fill()
    .map(() => []);

  for (const [above, below] of rowConditions) {
    verticalChildren[above - 1].push(below);
    verticalParents[below - 1].push(above);
  }

  for (const [left, right] of colConditions) {
    horizontalChildren[left - 1].push(right);
    horizontalParents[right - 1].push(left);
  }

  const vertDepths = [];
  function getVertDepths(num, depth) {
    if (depth > k) return false;
    if (depth <= vertDepths[num]) return true;
    vertDepths[num] = depth;
    for (const child of verticalChildren[num - 1])
      if (!getVertDepths(child, depth + 1)) return false;
    return true;
  }

  const horiDepths = [];
  function getHoriDepths(num, depth) {
    if (depth > k) return false;
    if (depth <= horiDepths[num]) return true;
    horiDepths[num] = depth;
    for (const child of horizontalChildren[num - 1])
      if (!getHoriDepths(child, depth + 1)) return false;
    return true;
  }

  for (let num = 1; num <= k; num++) {
    if (!getVertDepths(num, vertDepths[num] || 0)) return [];
    if (!getHoriDepths(num, horiDepths[num] || 0)) return [];
  }

  const rows = Array(k)
    .fill()
    .map((_, idx) => idx + 1)
    .sort((a, b) => (vertDepths[a] > vertDepths[b] ? 1 : -1));
  const cols = Array(k)
    .fill()
    .map((_, idx) => idx + 1)
    .sort((a, b) => (horiDepths[a] > horiDepths[b] ? 1 : -1));

  const rKeys = [];
  const cKeys = [];
  for (let row = 0; row < rows.length; row++) rKeys[rows[row]] = row;
  for (let col = 0; col < cols.length; col++) cKeys[cols[col]] = col;

  const ans = Array(k)
    .fill()
    .map(() => Array(k).fill(0));

  for (let num = 1; num <= k; num++) ans[rKeys[num]][cKeys[num]] = num;

  return ans;
};

console.log(
  buildMatrix(
    3,
    [
      [1, 2],
      [3, 2],
    ],
    [
      [2, 1],
      [3, 2],
    ]
  )
);
