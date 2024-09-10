/**
 * @param {number[]} nums
 * @return {number}
 */
var countAlternatingSubarrays = function (nums) {
  function getMaxLength(idx) {
    let length = 1;
    while (
      idx + length < nums.length &&
      nums[idx + length] !== nums[idx + length - 1]
    )
      length++;
    return length;
  }

  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    const length = getMaxLength(i);
    ans += (length * (length + 1)) / 2;
    i += length - 1;
  }

  return ans;
};

console.log(countAlternatingSubarrays([0, 1, 1, 1]));

// 1 => 1
// 1 0 => 3
// 1 0 1 => 6
// 1 0 1 0 => 10

// length => length * (length + 1) / 2
