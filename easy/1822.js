/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1;
  for (const num of nums)
    if (num < 0) sign = -sign;
    else if (num === 0) return 0;

  return sign;
};

console.log(arraySign([-1, 1, -1, 1, -1]));
