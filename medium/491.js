/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let result = new Set();

  function recurse(idx = 0, history = []) {
    if (history.length >= 2) result.add(history.toString());
    for (let i = idx; i < nums.length; i++)
      if (!history.length || nums[i] >= history[history.length - 1])
        recurse(i + 1, [...history, nums[i]]);
  }

  recurse();
  result = [...result].map((seq) => seq.split(",").map((str) => parseInt(str)));
  return result;
};

console.log(findSubsequences([4, 6, 7, 7]));
