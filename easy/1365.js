/**
 * @param {number[]} nums
 * @return {number[]}
 */
//
var smallerNumbersThanCurrent = function (nums) {
  let smallerArr = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[j] < nums[i]) count++;
    }
    smallerArr.push(count);
  }
  return smallerArr;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
