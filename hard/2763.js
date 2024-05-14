/**
 * @param {number[]} nums
 * @return {number}
 */
var sumImbalanceNumbers = function (nums) {
  // naive approach:
  // 1. for every subarray possible:
  //    => sort it
  //    => find the number of imbalance numbers
  //    => add it to our sum

  // slightly better approach => instead of creating a new subarray every time,
  // add the new element to the already sorted array at the correct index

  const n = nums.length;

  // return the index of the first element that in `sarr` that is greater than
  // or equal to `num`
  function binarySearch(sarr, num) {
    let min = 0;
    let max = sarr.length;
    let mid = Math.floor((min + max) / 2);

    while (min < max) {
      if (sarr[mid] >= num) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }

    return mid;
  }

  let ans = 0;

  for (let left = 0; left < n; left++) {
    const sarr = [];
    let imba = 0;

    for (let right = left + 1; right <= n; right++) {
      const idx = binarySearch(sarr, nums[right - 1]);

      // decrement because one imbalance number will be lost on insertion
      if (sarr[idx] - sarr[idx - 1] > 1) imba--;

      sarr.splice(idx, 0, nums[right - 1]);

      // check for new imbalance numbers
      if (sarr[idx + 1] - sarr[idx] > 1) imba++;
      if (sarr[idx] - sarr[idx - 1] > 1) imba++;

      ans += imba;
    }
  }

  return ans;
};

console.log(sumImbalanceNumbers([2, 3, 1, 4]));
