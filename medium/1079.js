/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let possibilities = new Set();

  function recurse(sequence = new Set()) {
    if (sequence.size > 0)
      possibilities.add([...sequence].map((idx) => tiles[idx]).join(""));
    for (let i = 0; i < tiles.length; i++) {
      if (sequence.has(i)) continue;
      else {
        let nextSequence = new Set(sequence);
        nextSequence.add(i);
        recurse(nextSequence);
      }
    }
  }

  recurse();
  return possibilities.size;
};

console.log(numTilePossibilities("AAB"));
