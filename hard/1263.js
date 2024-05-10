/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  let target;
  let box;
  let player;

  // get coords of target, box, and player
  for (let y = 0; y < n; y++)
    for (let x = 0; x < m; x++) {
      switch (grid[y][x]) {
        case "T":
          target = [x, y];
          grid[y][x] = ".";
          break;
        case "B":
          box = [x, y];
          grid[y][x] = ".";
          break;
        case "S":
          player = [x, y];
          grid[y][x] = ".";
          break;
      }
    }

  // returns the minimum number of pushes it takes for the player to push the
  // box to target
  function getMinPushes(player, box) {
    const queue = [[player, box, 0]];

    const seen = new Set();

    for (const [player, box, pushCount] of queue) {
      const [bx, by] = box;
      if (bx === target[0] && by === target[1]) return pushCount;

      const str = [...player, ...box].join(",");
      if (seen.has(str)) continue;
      seen.add(str);

      const directions = getPossiblePushes(player, box);
      for (const d of directions) {
        switch (d) {
          case "U":
            queue.push([box, [bx, by - 1], pushCount + 1]);
            break;
          case "R":
            queue.push([box, [bx + 1, by], pushCount + 1]);
            break;
          case "D":
            queue.push([box, [bx, by + 1], pushCount + 1]);
            break;
          case "L":
            queue.push([box, [bx - 1, by], pushCount + 1]);
            break;
        }
      }
    }

    return -1;
  }

  // returns all directions that the player can push the box
  function getPossiblePushes(player, box) {
    const pushUp =
      grid[box[1] - 1]?.[box[0]] === "." &&
      canReach(...player, box[0], box[1] + 1, box);
    const pushRight =
      grid[box[1]][box[0] + 1] === "." &&
      canReach(...player, box[0] - 1, box[1], box);
    const pushDown =
      grid[box[1] + 1]?.[box[0]] === "." &&
      canReach(...player, box[0], box[1] - 1, box);
    const pushLeft =
      grid[box[1]][box[0] - 1] === "." &&
      canReach(...player, box[0] + 1, box[1], box);

    let directions = [];
    if (pushUp) directions.push("U");
    if (pushRight) directions.push("R");
    if (pushDown) directions.push("D");
    if (pushLeft) directions.push("L");

    return directions;
  }

  // return true if there is a path from `[x1,y1]` to `[x2,y2]`
  function canReach(x1, y1, x2, y2, box, seen = new Set()) {
    if (x1 === x2 && y1 === y2) return true;
    if (
      x1 < 0 ||
      y1 < 0 ||
      x1 >= m ||
      y1 >= n ||
      (x1 === box[0] && y1 === box[1]) ||
      grid[y1]?.[x1] !== "." ||
      grid[y2]?.[x2] !== "."
    )
      return false;

    const str = x1 + "," + y1;
    if (seen.has(str)) return false;
    seen.add(str);

    return (
      canReach(x1 - 1, y1, x2, y2, box, seen) ||
      canReach(x1 + 1, y1, x2, y2, box, seen) ||
      canReach(x1, y1 - 1, x2, y2, box, seen) ||
      canReach(x1, y1 + 1, x2, y2, box, seen)
    );
  }

  return getMinPushes(player, box);
};

console.log(
  minPushBox([
    ["#", "#", "#", "#", "#", "#"],
    ["#", "T", "#", "#", "#", "#"],
    ["#", ".", ".", "B", ".", "#"],
    ["#", ".", "#", "#", ".", "#"],
    ["#", ".", ".", ".", "S", "#"],
    ["#", "#", "#", "#", "#", "#"],
  ])
);
