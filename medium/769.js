/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let numChunks = 0;
  let validChunks = [];

  for (let size = 1; size <= arr.length; size++) {
    for (let i = 0; i < arr.length - size + 1; i++) {
      if (isChunkValid(arr, i, i + size)) {
        validChunks.push(arr.slice(i, i + size));
        numChunks++;
      }
    }
  }

  return getBestCombination([], validChunks, arr.length).length;
};

function getBestCombination(combination, chunks, n) {
  if (combination.reduce((count, chunk) => count + chunk.length, 0) === n)
    return combination;
  if (!chunks.length) return [];
  else {
    let nextChunks = chunks.filter((chunk) => {
      const indices = combination.reduce(
        (indices, elem) => [...indices, ...elem],
        []
      );
      return indices.every((index) => !chunk.includes(index));
    });

    const maxPossible = n;
    let best = [];

    for (const chunk of nextChunks) {
      const nextCombination = getBestCombination(
        [...combination, chunk],
        chunks.filter((other) => chunk !== other),
        n
      );

      if (nextCombination.length > best.length) best = nextCombination;
      if (best.length === maxPossible) return best;
    }

    return best;
  }
}

function isChunkValid(arr, start, end) {
  const sorted = sort(arr.slice(start, end));
  for (let i = 0; i < end - start; i++) {
    if (sorted[i] !== i + start) return false;
  }

  return true;
}

function sort(arr) {
  return arr.sort((a, b) => (a > b ? 1 : -1));
}

console.log(maxChunksToSorted([3, 2, 1, 0, 4, 5, 6, 8, 7, 9]));
