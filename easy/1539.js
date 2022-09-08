/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// 1) start a counter at 1, "numsMissing" at 0
// 2) loop:
//  a) check if counter and first element of "arr" are equal
//      true: shift array
//      false: increment "numsMissing"
//  b) if "numsMissing" is equal to k, return counter
//  c) increment counter
var findKthPositive = function (arr, k) {
  let tempArr = arr;
  let counter = 1;
  let numsMissing = 0;

  while (numsMissing < k) {
    if (counter === tempArr[0]) tempArr.shift();
    else numsMissing++;
    if (numsMissing === k) return counter;
    counter++;
  }
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
