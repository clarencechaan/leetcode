/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let seen = new Set(["0,0"]);

  let x = 0;
  let y = 0;

  for (let i = 0; i < path.length; i++) {
    switch (path[i]) {
      case "N":
        y++;
        break;
      case "S":
        y--;
        break;
      case "E":
        x++;
        break;
      case "W":
        x--;
    }
    if (seen.has(x + "," + y)) return true;
    seen.add(x + "," + y);
  }

  return false;
};

console.log(isPathCrossing("NESWW"));
