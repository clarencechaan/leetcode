/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  // 0: right, 1: down, 2: left, 3: up
  let direction = 0;

  let steps = 1;
  let y = rStart;
  let x = cStart;

  const result = [[y, x]];

  function moveOneStep() {
    switch (direction) {
      case 0:
        x++;
        break;
      case 1:
        y++;
        break;
      case 2:
        x--;
        break;
      case 3:
        y--;
        break;
    }
    if (0 <= x && x < cols && 0 <= y && y < rows) result.push([y, x]);
  }

  function changeDirection() {
    direction = (direction + 1) % 4;
  }

  while (result.length < rows * cols) {
    for (let i = 0; i < steps; i++) moveOneStep();
    changeDirection();
    for (let i = 0; i < steps; i++) moveOneStep();
    changeDirection();
    steps++;
  }

  return result;
};

console.log(spiralMatrixIII(1, 4, 0, 0));

// steps:
// 1 right
// 1 down
// 2 left
// 2 up
// 3 right
// 3 down
// 4 left
// 4 up
// 5 right
// 5 down
// ...
