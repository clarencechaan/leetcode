/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1) sort array
// 2) create new array, push first element, push last element
//  a) repeat until sorted array is empty
// 3) return new array
var rearrangeArray = function (nums) {
  const sorted = nums.sort((a, b) => (a > b ? 1 : -1));
  const rearranged = [];
  while (sorted.length) {
    rearranged.push(sorted.shift());
    if (sorted.length) rearranged.push(sorted.pop());
  }
  return rearranged;
};

console.log(rearrangeArray([6, 2, 0, 9, 7]));
