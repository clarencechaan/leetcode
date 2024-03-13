/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
  // divide nums into arrays of size 3, where the max and min of each array differ by at most k
  // idea:
  // 1. sort nums in ascending order
  // 2. declare the result array
  // 3. if nums.slice(0,3) satisfies the condition, push this array to result; otherwise return []
  //    => continue with (3,6), (6,9), ... (n-3, n)

  nums.sort((a, b) => (a > b ? 1 : -1));

  let result = [];
  for (let i = 0; i < nums.length; i += 3) {
    const arr = nums.slice(i, i + 3);
    if (Math.max(...arr) - Math.min(...arr) <= k) result.push(arr);
    else return [];
  }

  return result;
};

console.log(divideArray([1, 3, 3, 2, 7, 3], 3));
