/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  // idea:
  // 1. convert stones to a set
  // 2. create a helper function canCrossRecursive(pos, lastJump) that returns whether the frog can reach the last stone
  //    if they are at position pos and the last jump taken was equal to lastJump
  // 3. return canCrossRecursive(0, 0)

  const lastStone = stones[stones.length - 1];
  stones = new Set(stones);
  const seen = new Set();
  function canCrossRecursive(pos = 0, lastJump = 0) {
    if (pos === lastStone) return true;
    if (!stones.has(pos)) return false;
    const arguments = pos + "," + lastJump;
    if (seen.has(arguments)) return false;
    seen.add(arguments);
    for (
      let nextPos = pos + lastJump - 1;
      nextPos <= pos + lastJump + 1;
      nextPos++
    ) {
      if (nextPos > pos && canCrossRecursive(nextPos, nextPos - pos))
        return true;
    }
    return false;
  }

  return canCrossRecursive();
};

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]));
