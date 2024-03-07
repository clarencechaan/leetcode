/**
 * @param {number[][]} tiles
 * @param {number} carpetLen
 * @return {number}
 */
var maximumWhiteTiles = function (tiles, carpetLen) {
  // sort tiles by ascending order
  tiles.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  // naive approach  (way too slow):
  // step1: create helper function that returns the number of covered white tiles
  //    when placing the carpet at tile i
  // step2: run helper function on every possible tile
  // step3: return the highest value returned by the helper function

  // optimized approach?:
  // (?) involves sliding window => still too slow
  // (?) naive approach, but instead of checking every tile, check the "l" of every tile range

  // another idea:
  // helper function that returns the number of white tiles in a given range [left, right]

  // sum up the total number of white tiles as you go from left to right
  // summedUpTiles === [[1,5, "tiles", 0], [6,9, "empty", 5], [10,11, "tiles", 5], [12,18, "tiles", 7], [19,19, "empty", 14], [20,25, "tiles", 14]]

  // figure out how to create summedUpTiles array
  let summedUpTiles = [[0, tiles[0][0] - 1, "empty", 0]];
  let numOfTiles = 0;
  for (let i = 0; i < tiles.length; i++) {
    const [l, r] = tiles[i];
    const prevR = summedUpTiles[summedUpTiles.length - 1]?.[1];
    const emptyL = prevR + 1;
    const emptyR = l - 1;
    if (emptyL <= emptyR)
      summedUpTiles.push([emptyL, emptyR, "empty", numOfTiles]);
    summedUpTiles.push([l, r, "tiles", numOfTiles]);
    numOfTiles += r - l + 1;
  }
  summedUpTiles.push([
    summedUpTiles[summedUpTiles.length - 1][1] + 1,
    Infinity,
    "empty",
    numOfTiles,
  ]);

  // helper function that gets the number of tiles to the left of the given position
  // binary search through summedUpTiles
  function getTileSum(position) {
    let min = 0;
    let max = summedUpTiles.length - 1;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (position < summedUpTiles[mid][0]) max = mid - 1;
      else if (position > summedUpTiles[mid][1]) min = mid + 1;
      else if (
        summedUpTiles[mid][0] <= position &&
        position <= summedUpTiles[mid][1]
      )
        break;
      mid = Math.floor((min + max) / 2);
    }
    const [l, r, rangeType, numOfTiles] = summedUpTiles[mid];
    if (rangeType === "empty") return numOfTiles;
    else return numOfTiles + position - l + 1;
  }

  function getNumOfWhiteTilesInRange(left, right) {
    return getTileSum(right - 1) - getTileSum(left - 1);
  }

  // to find result, run getNumOfWhiteTilesInRange(left, right) where right - left === carpetLen
  let result = 0;
  for (const [l, r] of tiles) {
    result = Math.max(result, getNumOfWhiteTilesInRange(l, l + carpetLen));
  }

  return result;
};

console.log(
  maximumWhiteTiles(
    [
      [1, 5],
      [10, 11],
      [12, 18],
      [20, 25],
      [30, 32],
    ],
    10
  )
);
