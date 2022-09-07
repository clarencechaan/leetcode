/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
// 1) check if the element at a "distance" (starting from 0) after or before
//    index "start" is equal to target, return distance if it is
// 2) repeat, incrementing "distance" by 1
var getMinDistance = function (nums, target, start) {
  for (let distance = 0; true; distance++) {
    if (nums[start + distance] === target || nums[start - distance] === target)
      return distance;
  }
};

console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
