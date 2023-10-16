/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  let arr = num.toString().split("").sort();
  let nums = ["", ""];
  for (let i = 0; i < arr.length; i++) nums[i % 2] += arr[i];
  return parseInt(nums[0]) + parseInt(nums[1]);
};

console.log(splitNum(4325));
