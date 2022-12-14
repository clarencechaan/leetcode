/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let result = new Set();
  const sorted = [...nums].sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < sorted.length - 3; i++)
    for (let j = i + 1; j < sorted.length - 2; j++)
      for (let k = j + 1; k < sorted.length - 1; k++) {
        const idx = sortedFindIndex(
          sorted,
          target - sorted[i] - sorted[j] - sorted[k],
          k + 1
        );
        if (idx !== -1)
          result.add(
            [sorted[i], sorted[j], sorted[k], sorted[idx]].sort().join(",")
          );
      }

  result = [...result].map((str) => str.split(",").map((num) => parseInt(num)));
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

console.log(
  fourSum(
    [
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    ],
    8
  )
);
