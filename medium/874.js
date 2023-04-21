/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let obstacleSet = new Set();
  for (const [x, y] of obstacles) obstacleSet.add(x + "," + y);

  let max = 0;
  let x = 0;
  let y = 0;
  // 0: north, 1: east, 2: south, 3: west
  let dir = 0;
  for (let command of commands) {
    switch (command) {
      case -2:
        dir = (dir - 1 + 4) % 4;
        break;
      case -1:
        dir = (dir + 1) % 4;
        break;
      default:
        switch (dir) {
          case 0:
            while (!obstacleSet.has(x + "," + (y + 1)) && command) {
              y++;
              command--;
            }
            break;
          case 1:
            while (!obstacleSet.has(x + 1 + "," + y) && command) {
              x++;
              command--;
            }
            break;
          case 2:
            while (!obstacleSet.has(x + "," + (y - 1)) && command) {
              y--;
              command--;
            }
            break;
          case 3:
            while (!obstacleSet.has(x - 1 + "," + y) && command) {
              x--;
              command--;
            }
        }
    }
    max = Math.max(max, x * x + y * y);
  }

  return max;
};

console.log(robotSim((commands = [6, -1, -1, 6]), (obstacles = [])));
