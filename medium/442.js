/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "number") continue;
    let num = nums[i];
    nums[i] = "";
    while (typeof nums[num - 1] === "number") {
      let temp = nums[num - 1];
      nums[num - 1] = "X";
      num = temp;
    }
    nums[num - 1] += "X";
  }

  let result = [];
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === "XX") result.push(i + 1);

  return result;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

// ["X", "XX", "XX", "X", "", "", "X", "X"];
// [4, 3, 2, 7, 8, 2, 3, 1];
