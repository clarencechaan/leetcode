/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  function difference(a, b) {
    return a.split("").filter((letter, idx) => letter !== b[idx]).length;
  }

  let diffs = bank.map((gene) => difference(gene, startGene));
  const endIdx = bank.indexOf(endGene);

  let startingIndices = [];
  for (let i = 0; i < diffs.length; i++)
    if (diffs[i] === 1) startingIndices.push(i);

  function minPath(idx, seen = new Set(), depth = 0) {
    if (idx === endIdx) return depth + 1;

    let nextIndices = [];
    for (let i = 0; i < bank.length; i++) {
      if (seen.has(i) || difference(bank[i], bank[idx]) !== 1) continue;
      nextIndices.push(i);
    }
    if (!nextIndices.length) return Infinity;

    let min = Infinity;
    for (const nextIdx of nextIndices) {
      let nextSeen = new Set(seen);
      nextSeen.add(nextIdx);
      min = Math.min(minPath(nextIdx, nextSeen, depth + 1), min);
    }

    return min;
  }

  let min = Infinity;
  for (const idx of startingIndices)
    min = Math.min(minPath(idx, new Set([idx])), min);
  return min === Infinity ? -1 : min;
};

console.log(
  minMutation("AACCGGTT", "AACCGCTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
);
