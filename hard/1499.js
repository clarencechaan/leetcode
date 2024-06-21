/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function (points, k) {
  // notice that for every comparison of points[i] and points[j], the
  // calculation we are interested in is xi - yi + xj + yj, thus we should save
  // (x-y) for each point
  // we keep an array that contains all points where `x` does not differ by more
  // than k. we also make sure to keep the array sorted by the (x-y) value as we
  // are interested in the max value of (x-y)
  // as we add more points to the array, we calculate the x + y value of the new
  // point and add it to the max (x-y) value in the sorted array
  // we also remove any points in the array with an `x` value that differs by
  // more than `k` to the newly added array

  points.forEach((point) => point.push(point[1] - point[0]));

  const arr = [];

  // arr is sorted by arr[i][2]
  function binarySearch(arr, point) {
    let min = 0;
    let max = arr.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (arr[mid][2] < point[2]) min = mid + 1;
      else max = mid;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  let ans = -Infinity;
  for (const point of points) {
    const [x, y] = point;
    while (x - arr[arr.length - 1]?.[0] > k) arr.pop();
    if (arr.length) ans = Math.max(ans, arr[arr.length - 1][2] + x + y);
    const insertIdx = binarySearch(arr, point);
    arr.splice(insertIdx, 0, point);
  }

  return ans;
};

console.log(
  findMaxValueOfEquation(
    [
      [1, 3],
      [2, 0],
      [5, 10],
      [6, -10],
    ],
    1
  )
);
