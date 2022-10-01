/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let ranges = [];
  let idx = -1;
  for (let i = 0; i < nums.length; i++) {
    if (idx >= 0 && nums[i] === ranges[idx][1] + 1) ranges[idx][1]++;
    else {
      ranges.push([nums[i], nums[i]]);
      idx++;
    }
  }
  return ranges.map((range) =>
    range[0] === range[1] ? `${range[0]}` : `${range[0]}->${range[1]}`
  );
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
