/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  let fractions = [];

  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) fractions.push([arr[i], arr[j]]);

  fractions.sort((a, b) => (a[0] / a[1] > b[0] / b[1] ? 1 : -1));
  // fractions = quickSort(fractions);

  return fractions[k - 1];
};

// own implementation of sort if necessary
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++)
    if (arr[i][0] / arr[i][1] <= pivot[0] / pivot[1]) left.push(arr[i]);
    else right.push(arr[i]);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));
