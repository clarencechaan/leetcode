/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sorted = [...nums].sort((a, b) => (a > b ? 1 : -1));
  let triplets = new Set();

  for (let i = 0; i < sorted.length - 2; i++)
    for (let j = i + 1; j < sorted.length - 1; j++) {
      const idx = sortedFindIndex(sorted, -sorted[i] - sorted[j], j + 1);
      if (idx !== -1)
        triplets.add([sorted[i], sorted[j], sorted[idx]].sort().join(","));
    }

  let result = [];
  triplets.forEach((str) =>
    result.push(str.split(",").map((val) => parseInt(val)))
  );

  return result;
};

function sortedFindIndex(arr, num, min = 0) {
  let max = arr.length - 1;
  let mid = Math.round((min + max) / 2);

  while (max >= min) {
    if (num < arr[mid]) {
      max = mid - 1;
      mid = Math.round((min + max) / 2);
    } else if (num > arr[mid]) {
      min = mid + 1;
      mid = Math.round((min + max) / 2);
    } else return mid;
  }

  return -1;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
