/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
var isPrintable = function (targetGrid) {
  // find the top-left and bottom-right corners of each colour

  const n = targetGrid.length;
  const m = targetGrid[0].length;

  const cornerCoords = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const colour = targetGrid[i][j];
      if (!cornerCoords[colour])
        cornerCoords[colour] = [Infinity, Infinity, -Infinity, -Infinity];
      cornerCoords[colour][0] = Math.min(cornerCoords[colour][0], j);
      cornerCoords[colour][1] = Math.min(cornerCoords[colour][1], i);
      cornerCoords[colour][2] = Math.max(cornerCoords[colour][2], j);
      cornerCoords[colour][3] = Math.max(cornerCoords[colour][3], i);
    }
  }

  const colours = new Set(
    cornerCoords
      .map((coord, colour) => (coord ? colour : null))
      .filter((colour) => colour)
  );

  // erase `colour` from grid if the rectangle created by `colour` is only made
  // up of 0s and/or `colour`; return true if successful
  function eraseFromTarget(colour, grid) {
    const [x1, y1, x2, y2] = cornerCoords[colour];
    for (let i = y1; i <= y2; i++)
      for (let j = x1; j <= x2; j++)
        if (grid[i][j] > 0 && grid[i][j] !== colour) return false;
    for (let i = y1; i <= y2; i++)
      for (let j = x1; j <= x2; j++) grid[i][j] = 0;
    return true;
  }

  // keep deleting colours from targetGrid until no longer possible
  // if all colours are deleted then targetGrid is possible, and return true;
  // otherwise return false
  while (colours.size) {
    let numColoursDeleted = 0;
    for (const colour of colours)
      if (eraseFromTarget(colour, targetGrid)) {
        colours.delete(colour);
        numColoursDeleted++;
      }
    if (!numColoursDeleted) return false;
  }

  return true;
};

console.log(
  isPrintable([
    [1, 2, 1],
    [2, 1, 2],
    [1, 2, 1],
  ])
);
