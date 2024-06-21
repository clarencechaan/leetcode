/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function (ring, key) {
  function getNextRingPos(rPos, direction, letter) {
    let count = 0;
    do {
      count++;
      rPos = (rPos + ring.length + direction) % ring.length;
    } while (ring[rPos] !== letter);
    return [rPos, count];
  }

  const dp = Array(ring.length)
    .fill()
    .map(() => []);
  function recursion(rPos = 0, keyIdx = 0) {
    if (keyIdx >= key.length) return 0;
    const letter = key[keyIdx];
    if (ring[rPos] === letter) return 1 + recursion(rPos, keyIdx + 1);
    if (dp[rPos][keyIdx] >= 0) return dp[rPos][keyIdx];

    let [leftPos, left] = getNextRingPos(rPos, -1, letter);
    let [rightPos, right] = getNextRingPos(rPos, 1, letter);

    left += 1 + recursion(leftPos, keyIdx + 1);
    right += 1 + recursion(rightPos, keyIdx + 1);

    const result = Math.min(left, right);
    dp[rPos][keyIdx] = result;
    return result;
  }

  return recursion();
};

console.log(findRotateSteps("godding", "gd"));
