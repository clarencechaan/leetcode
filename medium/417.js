/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights[0].length;
  const n = heights.length;

  let pathToPacific = [];
  let pathToAtlantic = [];
  for (let i = 0; i < n; i++) pathToPacific.push([]);
  for (let i = 0; i < n; i++) pathToAtlantic.push([]);

  function buildPathToPacific(row = 0, col = 0) {
    if (row < 0 || row >= n || col < 0 || col >= m || pathToPacific[row][col])
      return;
    pathToPacific[row][col] = true;
    if (heights[row - 1]?.[col] >= heights[row][col])
      buildPathToPacific(row - 1, col);
    if (col === 0 || heights[row + 1]?.[col] >= heights[row][col])
      buildPathToPacific(row + 1, col);
    if (heights[row][col - 1] >= heights[row][col])
      buildPathToPacific(row, col - 1);
    if (row === 0 || heights[row][col + 1] >= heights[row][col])
      buildPathToPacific(row, col + 1);
  }

  function buildPathToAtlantic(row = n - 1, col = m - 1) {
    if (row < 0 || row >= n || col < 0 || col >= m || pathToAtlantic[row][col])
      return;
    pathToAtlantic[row][col] = true;
    if (col === m - 1 || heights[row - 1]?.[col] >= heights[row][col])
      buildPathToAtlantic(row - 1, col);
    if (heights[row + 1]?.[col] >= heights[row][col])
      buildPathToAtlantic(row + 1, col);
    if (row === n - 1 || heights[row][col - 1] >= heights[row][col])
      buildPathToAtlantic(row, col - 1);
    if (heights[row][col + 1] >= heights[row][col])
      buildPathToAtlantic(row, col + 1);
  }

  buildPathToPacific();
  buildPathToAtlantic();

  let result = [];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++)
      if (pathToPacific[i][j] && pathToAtlantic[i][j]) result.push([i, j]);

  return result;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);

// pacific: there is a path of increasing heights
//    from element to top row or left column
// atlantic: there is a path of increasing heights
//    from element to bottom row or right column
