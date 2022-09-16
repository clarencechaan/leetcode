/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  let result = [];
  for (const interval of intervals) {
    if (
      intervals.every(
        (other) =>
          other === interval || interval[0] < other[0] || other[1] < interval[1]
      )
    )
      result.push(interval);
  }

  return result.length;
};

console.log(
  removeCoveredIntervals([
    [1, 4],
    [2, 3],
  ])
);
