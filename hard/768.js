/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const goal = [...arr].sort((a, b) => (a > b ? 1 : -1));

  function getValidChunkIdx(idx) {
    const freqChunk = {};
    const freqGoal = {};

    let offCounter = 0;
    let nextIdx = idx + 1;
    for (; nextIdx <= arr.length; nextIdx++) {
      const cChar = arr[nextIdx - 1];
      const gChar = goal[nextIdx - 1];
      freqChunk[cChar] = (freqChunk[cChar] || 0) + 1;
      freqGoal[gChar] = (freqGoal[gChar] || 0) + 1;
      if (cChar !== gChar) {
        if (freqChunk[cChar] === freqGoal[cChar]) offCounter--;
        else if (freqChunk[cChar] === (freqGoal[cChar] || 0) + 1) offCounter++;
        if (freqGoal[gChar] === freqChunk[gChar]) offCounter--;
        else if (freqGoal[gChar] === (freqChunk[gChar] || 0) + 1) offCounter++;
      }
      if (offCounter === 0) break;
    }

    return nextIdx;
  }

  const dp = [];
  function recursion(idx = 0) {
    if (idx >= arr.length) return 0;
    if (dp[idx] >= 0) return dp[idx];

    // find smallest chunk from `idx` that is valid
    const nextIdx = getValidChunkIdx(idx);
    let result = 1 + recursion(nextIdx);

    dp[idx] = result;
    return result;
  }

  return recursion();
};

console.log(maxChunksToSorted([5, 4, 3, 2, 1]));
