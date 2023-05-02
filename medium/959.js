/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const n = grid.length;
  let enlarged = [];
  for (let i = 0; i < n; i++) {
    enlarged.push([], [], []);
    for (let j = 0; j < n; j++)
      if (grid[i][j] === " ") {
        enlarged[3 * i][3 * j] = " ";
        enlarged[3 * i][3 * j + 1] = " ";
        enlarged[3 * i][3 * j + 2] = " ";
        enlarged[3 * i + 1][3 * j] = " ";
        enlarged[3 * i + 1][3 * j + 1] = " ";
        enlarged[3 * i + 1][3 * j + 2] = " ";
        enlarged[3 * i + 2][3 * j] = " ";
        enlarged[3 * i + 2][3 * j + 1] = " ";
        enlarged[3 * i + 2][3 * j + 2] = " ";
      } else if (grid[i][j] === "/") {
        enlarged[3 * i][3 * j] = " ";
        enlarged[3 * i][3 * j + 1] = " ";
        enlarged[3 * i][3 * j + 2] = "/";
        enlarged[3 * i + 1][3 * j] = " ";
        enlarged[3 * i + 1][3 * j + 1] = "/";
        enlarged[3 * i + 1][3 * j + 2] = " ";
        enlarged[3 * i + 2][3 * j] = "/";
        enlarged[3 * i + 2][3 * j + 1] = " ";
        enlarged[3 * i + 2][3 * j + 2] = " ";
      } else if (grid[i][j] === "\\") {
        enlarged[3 * i][3 * j] = "\\";
        enlarged[3 * i][3 * j + 1] = " ";
        enlarged[3 * i][3 * j + 2] = " ";
        enlarged[3 * i + 1][3 * j] = " ";
        enlarged[3 * i + 1][3 * j + 1] = "\\";
        enlarged[3 * i + 1][3 * j + 2] = " ";
        enlarged[3 * i + 2][3 * j] = " ";
        enlarged[3 * i + 2][3 * j + 1] = " ";
        enlarged[3 * i + 2][3 * j + 2] = "\\";
      }
  }

  let result = 0;
  for (let i = 0; i < 3 * n; i++)
    for (let j = 0; j < 3 * n; j++) {
      if (enlarged[i][j] === " ") {
        result++;
        fillSpace(i, j);
      }
    }

  function fillSpace(i, j) {
    if (enlarged[i]?.[j] !== " ") return;
    enlarged[i][j] = "X";
    fillSpace(i - 1, j);
    fillSpace(i + 1, j);
    fillSpace(i, j - 1);
    fillSpace(i, j + 1);
  }

  return result;
};

console.log(regionsBySlashes(["//", "/ "]));
