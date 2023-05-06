/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let set = new Set();

  for (const [start1, end1] of firstList) {
    let idx = secondList.findIndex(
      (interval) =>
        (interval[0] <= start1 && start1 <= interval[1]) ||
        (interval[0] <= end1 && end1 <= interval[1])
    );
    if (idx >= 0) {
      const [start2, end2] = secondList[idx];
      let start = Math.max(start1, start2);
      let end = Math.min(end1, end2);
      set.add(start + "," + end);
    }
  }

  for (const [start1, end1] of secondList) {
    let idx = firstList.findIndex(
      (interval) =>
        (interval[0] <= start1 && start1 <= interval[1]) ||
        (interval[0] <= end1 && end1 <= interval[1])
    );
    if (idx >= 0) {
      const [start2, end2] = firstList[idx];
      let start = Math.max(start1, start2);
      let end = Math.min(end1, end2);
      set.add(start + "," + end);
    }
  }

  let result = [...set];
  result = result.map((str) => str.split(",").map((str) => parseInt(str)));
  result.sort((a, b) => (a[0] > b[0] ? 1 : -1));
  return result;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);
