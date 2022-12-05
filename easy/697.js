/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let counts = {};

  for (const num of nums)
    if (!counts[num]) counts[num] = 1;
    else counts[num]++;

  let degree = 0;
  for (const num in counts) if (counts[num] > degree) degree = counts[num];

  let degreeNums = [];
  for (const num in counts) if (counts[num] === degree) degreeNums.push(num);

  let ranges = [];
  for (const num of degreeNums)
    ranges.push([nums.indexOf(parseInt(num)), nums.lastIndexOf(parseInt(num))]);

  return ranges.reduce(
    (min, range) => Math.min(range[1] - range[0] + 1, min),
    Infinity
  );
};

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
