/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
  const n = grid.length;

  let distanceFromLand = [];
  for (let i = 0; i < n; i++) distanceFromLand[i] = [];

  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === 1) distanceFromLand[i][j] = 0;
      else distanceFromLand[i][j] = -1;

  function fillDistances(distance = 0) {
    let prev = [];
    for (const row of distanceFromLand) prev.push([...row]);

    let done = true;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (prev[i][j] === distance) {
          done = false;
          if (prev[i - 1]?.[j] === -1)
            distanceFromLand[i - 1][j] = distance + 1;
          if (prev[i + 1]?.[j] === -1)
            distanceFromLand[i + 1][j] = distance + 1;
          if (prev[i][j - 1] === -1) distanceFromLand[i][j - 1] = distance + 1;
          if (prev[i][j + 1] === -1) distanceFromLand[i][j + 1] = distance + 1;
        }
    if (!done) return fillDistances(distance + 1);
    else return distance - 1 || -1;
  }

  return fillDistances();
};

console.log(
  maxDistance([
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
);
