/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let arrs = [];
  let arr = [];
  for (let i = 0; i <= nums.length; i++)
    if (!nums[i]) {
      if (arr.length) {
        arrs.push(arr);
        arr = [];
      }
    } else arr.push(nums[i]);

  let max = 0;
  loop: for (const arr of arrs) {
    let negFreq = [0];
    let count = 0;
    for (const val of arr) {
      if (val < 0) count++;
      negFreq.push(count);
    }
    for (let length = negFreq.length; length >= 1 && length > max; length--) {
      for (let i = 0; i + length < negFreq.length; i++) {
        if ((negFreq[i + length] - negFreq[i]) % 2 === 0) {
          max = length;
          continue loop;
        }
      }
    }
  }

  return max;
};

console.log(getMaxLen([1, -2, -3, 4]));
