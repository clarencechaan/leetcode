/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let all = new Set();
  for (const arr of nums) for (const elem of arr) all.add(elem);

  let result = [];
  for (const num of all)
    if (nums.every((arr) => arr.includes(num))) result.push(num);

  result.sort((a, b) => (a > b ? 1 : -1));
  return result;
};

console.log(
  intersection([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
