/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  let indices = [];
  for (let i = 0; i < intervals.length; i++) indices.push(i);
  indices.sort((a, b) => (intervals[a][0] > intervals[b][0] ? 1 : -1));

  function findRight(end) {
    let min = 0;
    let max = intervals.length - 1;
    let mid = Math.floor((min + max) / 2);

    while (min < max) {
      if (intervals[indices[mid]][0] < end) min = mid + 1;
      else if (intervals[indices[mid]][0] > end) max = mid;
      else break;
      mid = Math.floor((min + max) / 2);
    }

    return intervals[indices[mid]][0] >= end ? indices[mid] : -1;
  }

  return intervals.map((interval) => findRight(interval[1]));
};

console.log(
  findRightInterval([
    [1, 4],
    [2, 3],
    [3, 4],
  ])
);
