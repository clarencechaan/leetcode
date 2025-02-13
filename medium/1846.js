/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  // 1. sort in ascending order
  // 2. for each element, decrease if necessary (according to previous element)

  arr.sort((a, b) => (a > b ? 1 : -1));
  arr[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  return arr.at(-1);
};
