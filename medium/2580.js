/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  ranges.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  let numGroups = 0n;
  for (let i = 0; i < ranges.length; i++) {
    let end = ranges[i][1];
    let j = i + 1;
    for (; j < ranges.length && ranges[j][0] <= end; j++)
      end = Math.max(end, ranges[j][1]);
    numGroups++;
    i = j - 1;
  }

  return Number(2n ** numGroups % (10n ** 9n + 7n));
};
