/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let arr = [[0, 0]];
  let count = [0, 0];

  for (const num of nums) {
    if (num) count[1]++;
    else count[0]++;
    arr.push([...count]);
  }

  for (
    let length = nums.length % 2 === 0 ? nums.length : nums.length - 1;
    length > 0;
    length -= 2
  )
    for (let i = 0; i + length <= nums.length; i++) {
      if (arr[i + length][0] - arr[i][0] === arr[i + length][1] - arr[i][1])
        return length;
    }

  return 0;
};

console.log(findMaxLength([0, 1, 0, 1]));
