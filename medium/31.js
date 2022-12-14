/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let rightMostSwitch = -1;
  let idx = nums.length - 1;

  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--)
      if (nums[j] < nums[i] && j > rightMostSwitch) {
        rightMostSwitch = j;
        idx = i;
      }
  }

  if (rightMostSwitch >= 0) {
    const temp = nums[rightMostSwitch];
    nums[rightMostSwitch] = nums[idx];
    nums[idx] = temp;
  }

  // sort right side after switch
  let done;
  while (!done) {
    done = true;
    for (let i = rightMostSwitch + 1; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        done = false;
      }
    }
  }

  return nums;
};

console.log(nextPermutation([1, 2, 3, 4]));

// put last number infront of the rightmost number that is smaller than it
// then sort the array to the right of the newly placed number
// if none, continue with second last number, third, fourth, etc...
// if none return sorted nums array

// 1 2 3 4
// 1 2 4 3
// 1 3 2 4
// 1 3 4 2
// 1 4 2 3
// 1 4 3 2
// 2 1 3 4
// 2 1 4 3
// 2 3 1 4
// 2 3 4 1
// 2 4 1 3
// 2 4 3 1
// 3 1 2 4
// 3 1 4 2
// 3 2 1 4
// 3 2 4 1
// 3 4 1 2
// 3 4 2 1
// 4 1 2 3
// 4 1 3 2
// 4 2 1 3
// 4 2 3 1
// 4 3 1 2
// 4 3 2 1
