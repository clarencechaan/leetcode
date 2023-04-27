/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let subsetCount = stones.length;
  let parents = [];
  for (let i = 0; i < stones.length; i++) parents[i] = i;

  for (let i = 1; i < stones.length; i++)
    for (let j = 0; j < i; j++) {
      if (stones[i][0] !== stones[j][0] && stones[i][1] !== stones[j][1])
        continue;
      if (parents[i] === i) {
        parents[i] = j;
        subsetCount--;
      } else {
        let parentI = parents[i];
        while (parents[parentI] !== parentI) parentI = parents[parentI];
        let parentJ = parents[j];
        while (parents[parentJ] !== parentJ) parentJ = parents[parentJ];
        if (parentI !== parentJ) {
          parents[parentI] = parentJ;
          subsetCount--;
        }
      }
    }

  return stones.length - subsetCount;
};

console.log(
  removeStones([
    [3, 2],
    [0, 0],
    [3, 3],
    [2, 1],
    [2, 3],
    [2, 2],
    [0, 2],
  ])
);

// 0 0 0 0 1
// 0 0 0 0 0
// 1 0 0 1 0
// 0 1 0 1 0
// 0 0 0 0 1
