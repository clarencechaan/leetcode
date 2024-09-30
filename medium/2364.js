/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  // maybe count the number of good pairs? and then subtract the number of good
  // pairs from the total number of pairs to get the number of bad pairs

  const n = nums.length;

  const difference = [];
  for (let i = 0; i < n; i++) difference[i] = i - nums[i];

  const freq = {};
  for (const d of difference) freq[d] = (freq[d] || 0) + 1;

  let goodPairs = 0;
  for (let i = 0; i < n; i++) {
    freq[difference[i]]--;
    goodPairs += freq[difference[i]];
  }

  const totalPairs = (n * (n - 1)) / 2;
  const badPairs = totalPairs - goodPairs;

  return badPairs;
};

console.log(countBadPairs([4, 1, 3, 3]));

// good pairs:
// j - i === nums[j] - nums[i]
// j - nums[j] === i - nums[i]

// length => total number of pairs
// length of 4 => 3 + 2 + 1 == 6
// length of 5 => 4 + 3 + 2 + 1 == 10
// length of n => n * (n - 1) / 2
