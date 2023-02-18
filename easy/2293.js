/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  let prev = [...nums];
  let newNums = [...nums];
  for (let n = nums.length; n > 1; n /= 2) {
    for (let i = 0; i < n; i++)
      if (i % 2 === 0) newNums[i] = Math.min(prev[2 * i], prev[2 * i + 1]);
      else newNums[i] = Math.max(prev[2 * i], prev[2 * i + 1]);
    prev = [...newNums];
  }

  return newNums[0];
};

console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]));
