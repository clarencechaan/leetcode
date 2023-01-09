/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  function shiftArrRight(idx, arr) {
    for (let i = arr.length - 1; i >= idx; i--) arr[i] = arr[i - 1];
  }

  for (let i = 0; i < arr.length; i++)
    if (arr[i] === 0) {
      shiftArrRight(i + 1, arr);
      i++;
    }
};

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
