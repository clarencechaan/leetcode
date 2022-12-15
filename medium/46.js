/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  (function recurse(arr, curr = []) {
    if (!arr.length) result.push(curr);
    for (let i = 0; i < arr.length; i++)
      recurse([...arr.slice(0, i), ...arr.slice(i + 1)], [...curr, arr[i]]);
  })(nums);

  return result;
};

console.log(permute([1]));
