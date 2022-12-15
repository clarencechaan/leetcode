/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = new Set();

  (function recurse(arr, curr = []) {
    if (!arr.length) result.add(curr.join(","));
    for (let i = 0; i < arr.length; i++)
      recurse([...arr.slice(0, i), ...arr.slice(i + 1)], [...curr, arr[i]]);
  })(nums);

  result = [...result].map((str) =>
    str.split(",").map((char) => parseInt(char))
  );

  return result;
};

console.log(permuteUnique([1, 1, 2]));
