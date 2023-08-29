/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  let climbs = [];
  for (let i = 1; i < heights.length; i++)
    if (heights[i - 1] < heights[i])
      climbs.push([heights[i] - heights[i - 1], i]);

  function isClimbIdxValid(idx) {
    let arr = [];
    for (let i = 0; i <= idx; i++) arr.push(climbs[i][0]);
    arr.sort((a, b) => (a > b ? 1 : -1));
    let sum = 0;
    for (let i = 0; i < arr.length - ladders; i++) sum += arr[i];
    return sum <= bricks;
  }

  let min = -1;
  let max = climbs.length - 1;
  let mid = Math.ceil((min + max) / 2);
  while (min < max) {
    if (isClimbIdxValid(mid)) min = mid;
    else max = mid - 1;
    mid = Math.ceil((min + max) / 2);
  }

  let answer = mid >= 0 ? climbs[mid][1] : 0;
  while (heights[answer] >= heights[answer + 1]) answer++;

  return answer;
};

console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1));
