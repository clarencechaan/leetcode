/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  let offset = 0;
  for (const interval of intervals)
    if (interval[0] < 0) offset = Math.max(Math.abs(interval[0]), offset);
  let maxIntervals = [];
  maxIntervals[intervals[0][1] + offset] = 1;

  for (const interval of intervals) {
    let start = interval[0] + offset;
    const end = interval[1] + offset;
    while (start > 0 && maxIntervals[start] === undefined) start--;
    maxIntervals[end] = Math.max(
      (maxIntervals[start] || 0) + 1,
      maxIntervals[maxIntervals.length - 1]
    );
  }

  return intervals.length - maxIntervals[maxIntervals.length - 1];
};

console.log(
  eraseOverlapIntervals([
    [-52, 31],
    [-73, -26],
    [82, 97],
    [-65, -11],
    [-62, -49],
    [95, 99],
    [58, 95],
    [-31, 49],
    [66, 98],
    [-63, 2],
    [30, 47],
    [-40, -26],
  ])
);
