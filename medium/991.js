/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {
  let val = startValue;
  let result = 0;

  while (val < target) {
    let multiplyFirstMoves;
    let subtractFirstMoves;
    let moves = 0;
    let v = val;
    while (v < target) {
      v *= 2;
      moves++;
    }
    moves += v - target;
    multiplyFirstMoves = moves;

    if (val <= 1) subtractFirstMoves = Infinity;
    else {
      moves = 1;
      v = val - 1;
      while (v < target) {
        v *= 2;
        moves++;
      }
      moves += v - target;
      subtractFirstMoves = moves;
    }

    if (subtractFirstMoves < multiplyFirstMoves) val--;
    else val *= 2;
    result++;
  }

  result += val - target;
  return result;
};

console.log(brokenCalc(9411921, 9411923));
