/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  if (!arr.length) return true;
  else {
    for (const piece of pieces) {
      if (isPieceValid(arr, piece)) {
        return canFormArray(arr.slice(piece.length), pieces);
      }
    }
  }

  return false;
};

function isPieceValid(arr, piece) {
  for (let i = 0; i < piece.length; i++) {
    if (arr[i] !== piece[i]) return false;
  }
  return true;
}

console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
