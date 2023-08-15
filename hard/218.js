/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  function getBuildingsOn(x, except, upperExclusive) {
    return buildings.filter(
      (building) =>
        !(
          building[0] === except[0] &&
          building[1] === except[1] &&
          building[2] === except[2]
        ) &&
        building[0] <= x &&
        (upperExclusive ? x < building[1] : x <= building[1])
    );
  }

  let result = {};
  for (const a of buildings) {
    const [leftA, , heightA] = a;
    if (result[leftA] !== undefined) continue;
    let set = getBuildingsOn(leftA, a);
    if (set.every(([, , height]) => heightA > height)) result[leftA] = heightA;
  }

  for (const a of buildings) {
    const [, rightA, heightA] = a;
    if (result[rightA] !== undefined) continue;
    let set = getBuildingsOn(rightA, a, true);
    if (set.every(([, , height]) => heightA > height)) {
      let heightB = set.reduce((max, [, , height]) => Math.max(max, height), 0);
      result[rightA] = heightB;
    }
  }

  result = Object.entries(result).map(([x, y]) => [parseInt(x), y]);
  return result;
};

console.log(
  getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8],
  ])
);
