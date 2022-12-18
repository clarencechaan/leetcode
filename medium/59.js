/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let result = [];
  for (let i = 0; i < n; i++) result.push([]);

  let direction = "R";
  let length = n;
  let curr = length;
  let y = 0;
  let x = 0;

  for (let i = 1; i <= n * n; i++) {
    result[y][x] = i;
    curr--;

    if (curr === 0) {
      if (direction === "R") {
        direction = "D";
        length--;
      } else if (direction === "D") direction = "L";
      else if (direction === "L") {
        direction = "U";
        length--;
      } else if (direction === "U") direction = "R";

      curr = length;
    }

    switch (direction) {
      case "R":
        x++;
        break;
      case "D":
        y++;
        break;
      case "L":
        x--;
        break;
      case "U":
        y--;
    }
  }

  return result;
};

console.log(generateMatrix(5));
