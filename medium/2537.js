/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  let result = 0;

  // sliding window
  const freq = {};
  let right = 0;
  let pairs = 0;
  for (let left = 0; left < nums.length; left++) {
    while (pairs < k && right < nums.length) {
      freq[nums[right]] = (freq[nums[right]] ?? 0) + 1;
      pairs += freq[nums[right]] - 1;
      right++;
    }
    if (pairs >= k) result += nums.length - right + 1;
    freq[nums[left]]--;
    pairs -= freq[nums[left]];
  }

  return result;
};

// subarray is good if there are >= k pairs

// 5 occurrences => 4 + 3 + 2 + 1 pairs
// 4 occurrences => 3 + 2 + 1 pairs
// 3 occurrences => 2 + 1 pairs
// 2 occurrences => 1 pair

// n occurrences => n * (n - 1) / 2 pairs
