/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  // choose k houses where no two are adjacent and the max element is minimized

  // helper function to check if it is possible to choose k homes with a given capability
  function isValidCapability(capability) {
    let houses = 0;
    for (let i = 0; i < nums.length && houses < k; i++) {
      if (nums[i] <= capability) {
        houses++;
        i++;
      }
    }
    return houses >= k;
  }

  // binary search for capability;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (isValidCapability(mid)) max = mid;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }
  return mid;
};

console.log(minCapability([2, 3, 5, 9], 2));
