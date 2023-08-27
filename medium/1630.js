/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  function isValidRange(left, right) {
    let subArr = nums.slice(left, right + 1);
    subArr.sort((a, b) => (a > b ? 1 : -1));
    let diff = subArr[1] - subArr[0];
    for (let i = 2; i < subArr.length; i++)
      if (subArr[i] - subArr[i - 1] !== diff) return false;
    return true;
  }

  let result = [];
  for (let i = 0; i < l.length; i++) result.push(isValidRange(l[i], r[i]));
  return result;
};

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
