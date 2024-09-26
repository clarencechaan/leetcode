/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  const n = nums.length;
  const freq = Array(n + 1).fill(0);
  for (const num of nums) freq[num]++;

  const result = [];
  let remaining = n;

  while (remaining) {
    const row = [];
    for (let num = 1; num <= n; num++)
      if (freq[num]) {
        freq[num]--;
        row.push(num);
        remaining--;
      }
    result.push(row);
  }

  return result;
};

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
