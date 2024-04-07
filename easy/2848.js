/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
  // idea:
  // 1. create a set `points` that contain every point that is covered by a car
  // 2. iterate through nums to fill up this set

  const points = new Set();
  for (const [start, end] of nums)
    for (let i = start; i <= end; i++) points.add(i);
  return points.size;
};

console.log(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ])
);
