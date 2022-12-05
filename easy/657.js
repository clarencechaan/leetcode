/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let position = [0, 0];
  for (const move of moves)
    switch (move) {
      case "L":
        position[0]--;
        break;
      case "R":
        position[0]++;
        break;
      case "D":
        position[1]--;
        break;
      case "U":
        position[1]++;
    }

  return position[0] === 0 && position[1] === 0;
};

console.log(judgeCircle("LL"));
