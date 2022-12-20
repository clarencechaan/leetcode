/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = new Set();

  nums.sort();

  (function recurse(curr = [], pos = 0) {
    result.add(curr.join(","));
    if (pos === nums.length) return;
    for (let i = pos; i < nums.length; i++) {
      recurse([...curr, nums[i]], i + 1);
    }
  })();

  result = [...result].map((str) =>
    str ? str.split(",").map((char) => parseInt(char)) : []
  );
  return result;
};

console.log(subsetsWithDup([1, 2, 2]));
