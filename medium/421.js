/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  nums.sort((a, b) => (a > b ? -1 : 1));
  let depth = nums[0].toString(2).length;

  let set = new Set();
  for (const num of nums) {
    let str = num.toString(2);
    str = "0".repeat(depth - str.length) + str;
    let x = 0;
    let val = 0;
    for (const bit of str) {
      if (bit === "0") {
        if (x === 0) val = 0;
        else val += Math.pow(2, x);
      } else if (bit === "1") {
        if (x === 0) val = 1;
        else val += Math.pow(2, x + 1);
      }
      set.add(val);
      x++;
    }
  }

  function maxXOR(num) {
    let x = 0;
    let exponent = depth - 1;
    let sum = 0;
    let str = num.toString(2);
    str = "0".repeat(depth - str.length) + str;
    let val = 0;
    for (const bit of str) {
      if (bit === "0") {
        if (x === 0 && set.has(1)) {
          sum += Math.pow(2, exponent);
          val = 1;
        } else if (x === 0) {
          val = 0;
        } else if (set.has(val + Math.pow(2, x + 1))) {
          sum += Math.pow(2, exponent);
          val += Math.pow(2, x + 1);
        } else {
          val += Math.pow(2, x);
        }
      } else if (bit === "1") {
        if (x === 0 && set.has(0)) {
          sum += Math.pow(2, exponent);
          val = 0;
        } else if (x === 0) {
          val = 1;
        } else if (set.has(val + Math.pow(2, x))) {
          sum += Math.pow(2, exponent);
          val += Math.pow(2, x);
        } else {
          val += Math.pow(2, x + 1);
        }
      }
      x++;
      exponent--;
    }
    return sum;
  }

  let max = 0;
  for (const num of nums) max = Math.max(maxXOR(num), max);

  return max;
};

console.log(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]));
