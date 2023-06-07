/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function (nums) {
  function getIdxFirstUglyPair(left = 0) {
    for (let i = left; i < nums.length; i += 2)
      if (nums[i] === nums[i + 1]) return i;
    if ((nums.length - left) % 2 === 0) return -1;
    else return nums.length - 1;
  }

  let result = 0;
  let uglyIdx = getIdxFirstUglyPair();
  while (uglyIdx >= 0) {
    result++;
    uglyIdx = getIdxFirstUglyPair(uglyIdx + 1);
  }

  return result;
};

console.log(minDeletion([1, 1, 2, 3, 5]));
