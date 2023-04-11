/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
  let player = [0, 0];

  function difference(from, to) {
    return Math.abs(from[0] - to[0]) + Math.abs(from[1] - to[1]);
  }

  function optimalDirection(from, to, isPlayer) {
    let [fromX, fromY] = from;
    let minDist = Infinity;
    let distances = {
      N: { to: null, ghost: null, target: null },
      S: { to: null, ghost: null, target: null },
      W: { to: null, ghost: null, target: null },
      E: { to: null, ghost: null, target: null },
      stay: { to: null, ghost: null, target: difference(from, target) },
    };

    let dist = difference([fromX, fromY + 1], to);
    minDist = Math.min(minDist, dist);
    distances["N"].to = dist;
    if (isPlayer)
      for (const ghost of ghosts)
        distances["N"].ghost = Math.min(
          distances["N"].ghost,
          difference([fromX, fromY + 1], ghost)
        );
    else distances["N"].target = difference([fromX, fromY + 1], target);

    dist = difference([fromX, fromY - 1], to);
    minDist = Math.min(minDist, dist);
    distances["S"].to = dist;
    if (isPlayer)
      for (const ghost of ghosts)
        distances["S"].ghost = Math.min(
          distances["S"].ghost,
          difference([fromX, fromY - 1], ghost)
        );
    else distances["S"].target = difference([fromX, fromY - 1], target);

    dist = difference([fromX - 1, fromY], to);
    minDist = Math.min(minDist, dist);
    distances["W"].to = dist;
    if (isPlayer)
      for (const ghost of ghosts)
        distances["W"].ghost = Math.min(
          distances["W"].ghost,
          difference([fromX - 1, fromY], ghost)
        );
    else distances["W"].target = difference([fromX - 1, fromY], target);

    dist = difference([fromX + 1, fromY], to);
    minDist = Math.min(minDist, dist);
    distances["E"].to = dist;
    if (isPlayer)
      for (const ghost of ghosts)
        distances["E"].ghost = Math.min(
          distances["E"].ghost,
          difference([fromX + 1, fromY], ghost)
        );
    else distances["E"].target = difference([fromX + 1, fromY], target);

    dist = difference(from, to);
    minDist = Math.min(minDist, dist);
    distances["stay"].to = dist;

    let minDistDirections = [];
    for (const direction in distances)
      if (distances[direction].to === minDist)
        minDistDirections.push(direction);

    if (!isPlayer) {
      let minTargetDist = Infinity;
      for (const direction of minDistDirections)
        minTargetDist = Math.min(minTargetDist, distances[direction].target);

      for (const direction of minDistDirections)
        if (distances[direction].target === minTargetDist) return direction;
    } else {
      let maxGhostDist = 0;
      for (const direction of minDistDirections)
        maxGhostDist = Math.max(maxGhostDist, distances[direction].ghost);

      for (const direction of minDistDirections)
        if (distances[direction].ghost === maxGhostDist) return direction;
    }
  }

  function movePlayer() {
    const direction = optimalDirection(player, target, true);
    switch (direction) {
      case "N":
        player[1]++;
        break;
      case "S":
        player[1]--;
        break;
      case "W":
        player[0]--;
        break;
      case "E":
        player[0]++;
    }
  }

  function moveGhosts() {
    for (let ghost of ghosts) {
      const direction = optimalDirection(ghost, player);
      switch (direction) {
        case "N":
          ghost[1]++;
          break;
        case "S":
          ghost[1]--;
          break;
        case "W":
          ghost[0]--;
          break;
        case "E":
          ghost[0]++;
      }
    }
  }

  while (player[0] !== target[0] || player[1] !== target[1]) {
    movePlayer();
    moveGhosts();
    if (
      ghosts.some((ghost) => ghost[0] === player[0] && ghost[1] === player[1])
    )
      return false;
  }

  return true;
};

console.log(
  escapeGhosts(
    [
      [5, 0],
      [-10, -2],
      [0, -5],
      [-2, -2],
      [-7, 1],
    ],
    [7, 7]
  )
);
