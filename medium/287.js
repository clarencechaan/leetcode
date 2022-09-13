/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
  let min = 1;
  let max = nums.length - 1;
  let mid = Math.round((min + max) / 2);

  do {
    let count = 0;

    for (const num of nums) {
      if (num <= mid) count++;
    }

    if (count > mid) {
      max = mid;
      mid = Math.floor((min + max) / 2);
    } else {
      min = mid;
      mid = Math.ceil((min + max) / 2);
      if (mid === max) break;
    }
  } while (min !== max);

  return mid;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
