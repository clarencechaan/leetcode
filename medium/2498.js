/**
 * @param {number[]} stones
 * @return {number}
 */
var maxJump = function (stones) {
  // idea:
  // 1. create a helper function isPossible(jumpSize) that returns true if it is possible for the frog to travel to the last stone
  //    and return to the first stone with each jump <= jumpSize; otherwise return false
  // 2. run a binary search for smallest jumpSize where 0 < jumpSize <= stone[stones.length-1] and isPossible(jumpSize) returns true
  // (too slow)

  // another idea:
  // 1. create an array minCost where minCost[idx] === the minimum cost of a path for the frog to jump from
  //    stones[0] to stones[idx] and back
  // 2. return the last element of minCost

  let minCost = [stones[0], stones[1]];
  for (let i = 2; i < stones.length; i++)
    minCost[i] = Math.max(minCost[i - 1], stones[i] - stones[i - 2]);

  return minCost[minCost.length - 1];
};

console.log(maxJump([0, 2, 5, 6, 7]));
