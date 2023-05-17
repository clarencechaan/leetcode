/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
  let swapIdx1 = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      swapIdx1 = i;
      break;
    }
  }

  if (swapIdx1 === -1) return arr;

  let swapIdx2 = swapIdx1 + 1;
  for (let i = arr.length - 1; i > swapIdx1; i--)
    if (arr[i] >= arr[swapIdx2] && arr[i] < arr[swapIdx1]) swapIdx2 = i;

  [arr[swapIdx1], arr[swapIdx2]] = [arr[swapIdx2], arr[swapIdx1]];
  return arr;
};

console.log(prevPermOpt1([1, 9, 4, 6, 7]));
