/**
 * @param {string[]} pieces
 * @param {number[][]} positions
 * @return {number}
 */
var countCombinations = function (pieces, positions) {
  // get all destination squares ([r, c]) for each piece
  function getDestinationSquares(piece, position) {
    const [r, c] = position;
    let destinationSquares = Array(8)
      .fill()
      .map(() => []);
    destinationSquares.push([[r, c]]);

    if (piece === "rook" || piece === "queen") {
      for (let d = 1; d <= 7; d++) {
        if (r + d <= 8) destinationSquares[0].push([r + d, c]);
        if (r - d >= 1) destinationSquares[1].push([r - d, c]);
        if (c + d <= 8) destinationSquares[2].push([r, c + d]);
        if (c - d >= 1) destinationSquares[3].push([r, c - d]);
      }
    }

    if (piece === "bishop" || piece === "queen") {
      for (let d = 1; d <= 7; d++) {
        if (r + d <= 8 && c + d <= 8)
          destinationSquares[4].push([r + d, c + d]);
        if (r - d >= 1 && c + d <= 8)
          destinationSquares[5].push([r - d, c + d]);
        if (r + d <= 8 && c - d >= 1)
          destinationSquares[6].push([r + d, c - d]);
        if (r - d >= 1 && c - d >= 1)
          destinationSquares[7].push([r - d, c - d]);
      }
    }

    destinationSquares = destinationSquares.filter((arr) => arr.length);
    return destinationSquares;
  }

  const allDestinationSquares = [];

  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    const position = positions[i];
    allDestinationSquares.push(getDestinationSquares(piece, position));
  }

  function isValidMoveCombination(moveCombination) {
    const length = Math.max(...moveCombination.map((moves) => moves.length));

    for (let i = 0; i < length; i++) {
      const positions = new Set();
      for (const moves of moveCombination) {
        const hashed =
          i < moves.length ? moves[i].join(",") : moves.at(-1).join(",");
        if (positions.has(hashed)) return false; // collision
        positions.add(hashed);
      }
    }

    return true;
  }

  function getNumValidMoveCombinations(
    pieceIdx = 0,
    directionIdx = 0,
    moveCombination = []
  ) {
    if (pieceIdx >= pieces.length)
      return +isValidMoveCombination(moveCombination);
    if (directionIdx >= allDestinationSquares[pieceIdx].length) return 0;

    // take current direction
    let take = 0;
    for (
      let length = 1;
      length <= allDestinationSquares[pieceIdx][directionIdx].length;
      length++
    ) {
      moveCombination.push(
        allDestinationSquares[pieceIdx][directionIdx].slice(0, length)
      );
      take += getNumValidMoveCombinations(pieceIdx + 1, 0, moveCombination);
      moveCombination.pop();
    }

    // skip current direction
    const skip = getNumValidMoveCombinations(
      pieceIdx,
      directionIdx + 1,
      moveCombination
    );

    return take + skip;
  }

  return getNumValidMoveCombinations();
};

console.log(countCombinations(["rook"], [[1, 1]]));
