/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  const n = nums.length;
  const m = nums.reduce((max, arr) => Math.max(max, arr.length), 0);

  let positions = [[0]];

  for (let i = 1; i < nums.length; i++)
    positions[i] = [positions[i - 1][0] + Math.min(i, m)];

  for (let i = 0; i < nums.length; i++)
    for (let j = 1; j < nums[i].length; j++)
      positions[i][j] =
        positions[i][j - 1] +
        Math.min(i, m - 1 - (j - 1)) +
        Math.min(n - 1 - i, j) +
        1;

  let map = {};
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums[i].length; j++) map[positions[i][j]] = nums[i][j];

  return Object.entries(map)
    .sort(([a], [b]) => (parseInt(a) > parseInt(b) ? 1 : -1))
    .map(([, val]) => val);
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
