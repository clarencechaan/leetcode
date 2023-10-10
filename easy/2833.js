/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let counts = [0, 0, 0];
  for (const m of moves)
    switch (m) {
      case "L":
        counts[0]++;
        break;
      case "R":
        counts[1]++;
        break;
      case "_":
        counts[2]++;
    }

  return (
    Math.max(counts[0], counts[1]) - Math.min(counts[0], counts[1]) + counts[2]
  );
};

console.log(furthestDistanceFromOrigin("L_RL__R"));
