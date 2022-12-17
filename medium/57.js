/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let prevIdx = intervals.findIndex(
    (interval) => interval[0] >= newInterval[0]
  );

  let nextIdx = intervals.findIndex((interval) => interval[1] > newInterval[1]);

  if (prevIdx < 0) prevIdx = intervals.length;
  prevIdx--;
  if (nextIdx < 0) nextIdx = intervals.length - 1;

  let subarr = [];
  if (prevIdx >= 0) subarr.push(intervals[prevIdx]);
  subarr.push(newInterval);
  subarr.push(...intervals.slice(prevIdx + 1, nextIdx + 1));

  for (let i = 0; i < subarr.length - 1; i++) {
    if (subarr[i][1] >= subarr[i + 1][0]) {
      subarr[i][1] = Math.max(subarr[i + 1][1], subarr[i][1]);
      subarr = [...subarr.slice(0, i + 1), ...subarr.slice(i + 2)];
      i--;
    }
  }

  intervals = [
    ...intervals.slice(0, prevIdx > 0 ? prevIdx : 0),
    ...subarr,
    ...intervals.slice(nextIdx + 1),
  ];

  return intervals;
};

console.log(
  insert(
    [
      [6, 9],
      [20, 30],
    ],
    [40, 55]
  )
);
