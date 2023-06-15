/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  nums.sort((a, b) => (a > b ? -1 : 1));
  let remainders = [[], [], []];

  for (const num of nums) remainders[num % 3].push(num);
  let result = remainders[0].reduce((sum, val) => sum + val, 0);

  let idx1 = 0;
  let idx2 = 0;
  while (remainders[1].length - idx1 >= 3 && remainders[2].length - idx2 >= 3) {
    result += remainders[1][idx1];
    result += remainders[2][idx2];
    idx1++;
    idx2++;
  }

  function recurse(idx1, idx2) {
    let max = 0;
    if (remainders[1].length - idx1 >= 3)
      max = Math.max(
        max,
        remainders[1][idx1] +
          remainders[1][idx1 + 1] +
          remainders[1][idx1 + 2] +
          recurse(idx1 + 3, idx2)
      );
    if (remainders[1].length - idx1 >= 1 && remainders[2].length - idx2 >= 1)
      max = Math.max(
        max,
        remainders[1][idx1] + remainders[2][idx2] + recurse(idx1 + 1, idx2 + 1)
      );
    if (remainders[2].length - idx2 >= 3)
      max = Math.max(
        max,
        remainders[2][idx2] +
          remainders[2][idx2 + 1] +
          remainders[2][idx2 + 2] +
          recurse(idx1, idx2 + 3)
      );
    return max;
  }

  result += recurse(idx1, idx2);
  return result;
};

console.log(maxSumDivThree([3, 6, 5, 1, 8]));
