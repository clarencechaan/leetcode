/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  const MAX_NUM = nums.reduce((max, num) => Math.max(max, num), 0);

  // helper function to check if a penalty is possible/valid
  function isValid(penalty) {
    let operations = 0;
    for (const num of nums) {
      const splits = Math.ceil(num / penalty) - 1;
      operations += splits;
    }
    return operations <= maxOperations;
  }

  // binary search for smallest penalty that is valid
  function binarySearch() {
    let min = 0;
    let max = MAX_NUM;
    let mid = Math.floor((min + max) / 2);

    while (min < max) {
      if (isValid(mid)) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }

    return mid;
  }

  return binarySearch();
};

console.log(minimumSize([9], 2));
