/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  // use sliding window

  // return the minimum and maximum values of an object's keys
  function getMinMax(map) {
    let min = Infinity;
    let max = -Infinity;
    for (let num in map) {
      num = parseInt(num);
      min = Math.min(min, num);
      max = Math.max(max, num);
    }
    return [min, max];
  }

  let left = 0;
  let map = {};
  let result = 0;
  for (let right = 0; right < nums.length; right++) {
    map[nums[right]] = (map[nums[right]] || 0) + 1;

    let [min, max] = getMinMax(map);
    while (max - min > 2) {
      map[nums[left]]--;
      if (!map[nums[left]]) delete map[nums[left]];
      [min, max] = getMinMax(map);
      left++;
    }
    result += right - left + 1;
  }

  return result;
};

console.log(continuousSubarrays([5, 4, 2, 4]));

// continuous:
// 1. the elements are next to each other
// 2. no pair of elements differ by more than 2

// naive approach:
// for each index i:
// => check if subarray of length 1, starting from i is continuous;
//    if so increment result, check subarray of length 2;
//    keep going until subarray is not continuous

// first thing I notice:
// if a subarray is continuous, all subarrays within that subarray are also continuous
// => a subarray of length e.g., 5 => there are 1 + 2 + 3 + 4 + 5 = 15 continuous subarrays total
// => a subarray of length n => there are n*(n+1)/2

// idea: find longest continuous subarray starting from index i
// => assume j is the last index of the continuous subarray
// => add the number of continuous subarrays between i to j, to result
// => find longest continuous subarray starting from j + 1,
// => continue until end of nums is reached
// doesn't work because of overlapping subarrays that are continuous

// better approach ?:
// using sliding window: check every possible subarray of length 1
//                       check every possible subarray of length 2
//                        ...
//                       check every possible subarray of length n === nums.length
