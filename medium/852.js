/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let min = 1;
  let max = arr.length - 2;
  let mid = Math.round((min + max) / 2);

  while (min < max) {
    if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) max = mid - 1;
    else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) min = mid + 1;
    else break;
    mid = Math.round((min + max) / 2);
  }

  return mid;
};

console.log(peakIndexInMountainArray([0, 10, 5, 2]));
