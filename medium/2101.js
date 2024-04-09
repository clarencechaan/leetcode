/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
  // returns true if the detonation of `bomb1` reaches `bomb2`
  function isInRange(bomb1, bomb2) {
    const [x1, y1, r1] = bomb1;
    const [x2, y2] = bomb2;
    return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2) <= r1;
  }

  const memo = [];
  // returns the array of bomb indices that are in range of the detonation of `bombs[idx]`
  function getBombsInRange(idx) {
    if (memo[idx]) return memo[idx];
    let result = [];
    for (let i = 0; i < bombs.length; i++)
      if (isInRange(bombs[idx], bombs[i])) result.push(i);
    memo[idx] = result;
    return result;
  }

  // returns the total number of bombs detonated when detonating `bombs[idx]`
  function getNumOfBombsDetonated(idx, detonated = new Set()) {
    if (detonated.has(idx)) return;
    detonated.add(idx);
    const bombsInRange = getBombsInRange(idx);
    for (const b of bombsInRange) getNumOfBombsDetonated(b, detonated);
    return detonated.size;
  }

  let result = 0;
  for (let i = 0; i < bombs.length; i++)
    result = Math.max(result, getNumOfBombsDetonated(i));
  return result;
};

console.log(
  maximumDetonation([
    [1, 2, 3],
    [2, 3, 1],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 4],
  ])
);
