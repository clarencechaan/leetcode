/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  const peakIdx = arr.findIndex((num, idx) => num > arr[idx + 1]);
  if (peakIdx < 1) return false;

  for (let i = 0; i < peakIdx; i++) if (arr[i] >= arr[i + 1]) return false;
  for (let i = peakIdx; i < arr.length - 1; i++)
    if (arr[i] <= arr[i + 1]) return false;

  return true;
};

console.log(validMountainArray([0, 3, 2, 1]));
