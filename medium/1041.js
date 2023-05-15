/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let x = 0;
  let y = 0;
  // NORTH: 0, EAST: 1, SOUTH: 2, WEST: 3
  let dir = 0;
  let idx = 0;
  let history = new Set();

  function runInstructions() {
    function go() {
      switch (dir) {
        case 0:
          y++;
          break;
        case 1:
          x++;
          break;
        case 2:
          y--;
          break;
        case 3:
          x--;
          break;
      }
    }

    function turn() {
      if (instructions[idx] === "L") dir = (dir + 3) % 4;
      else if (instructions[idx] === "R") dir = (dir + 1) % 4;
    }

    function runChar() {
      if (history.has([x, y, dir, idx].toString())) return true;
      history.add([x, y, dir, idx].toString());

      switch (instructions[idx]) {
        case "G":
          if (go()) return true;
          break;
        case "L":
        case "R":
          turn();
          break;
      }
    }

    idx = 0;
    while (idx < instructions.length)
      if (runChar()) return true;
      else idx++;
  }

  for (let i = 0; i < 5; i++) if (runInstructions()) return true;
  return false;
};

console.log(isRobotBounded("GL"));
