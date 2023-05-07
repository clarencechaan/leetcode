/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let fresh = 0;
  let rotten = 0;
  for (const row of grid)
    for (const cell of row)
      if (cell === 1) fresh++;
      else if (cell === 2) rotten++;

  let minutes = 0;

  function cloneGrid(grid) {
    let result = [];
    for (const row of grid) result.push([...row]);
    return result;
  }

  let numNewlyRotted = 0;
  let prev = cloneGrid(grid);
  function rotAdjacent() {
    let newlyRotted = new Set();
    for (let i = 0; i < prev.length; i++)
      for (let j = 0; j < prev[0].length; j++)
        if (prev[i][j] === 2) {
          if (prev[i - 1]?.[j] === 1) {
            grid[i - 1][j] = 2;
            newlyRotted.add(i - 1 + "," + j);
          }
          if (prev[i + 1]?.[j] === 1) {
            grid[i + 1][j] = 2;
            newlyRotted.add(i + 1 + "," + j);
          }
          if (prev[i][j - 1] === 1) {
            grid[i][j - 1] = 2;
            newlyRotted.add(i + "," + (j - 1));
          }
          if (prev[i][j + 1] === 1) {
            grid[i][j + 1] = 2;
            newlyRotted.add(i + "," + (j + 1));
          }
        }
    if (newlyRotted.size) {
      numNewlyRotted += newlyRotted.size;
      minutes++;
      prev = cloneGrid(grid);
      rotAdjacent();
    }
  }

  rotAdjacent();
  if (numNewlyRotted === fresh) return minutes;
  else return -1;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
