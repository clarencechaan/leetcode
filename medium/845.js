/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let posSlopes = [];
  let negSlopes = [];

  let left = 0;
  for (let right = 1; right <= arr.length; right++)
    if (right === arr.length || arr[right - 1] >= arr[right]) {
      if (left < right - 1) posSlopes.push([left, right - 1]);
      left = right;
    }
  left = 0;
  for (let right = 1; right <= arr.length; right++)
    if (right === arr.length || arr[right - 1] <= arr[right]) {
      if (left < right - 1) negSlopes.push([left, right - 1]);
      left = right;
    }

  posSlopes = posSlopes.map((range) => ({ slope: 1, range }));
  negSlopes = negSlopes.map((range) => ({ slope: -1, range }));

  let slopes = [...negSlopes, ...posSlopes];
  slopes.sort((a, b) => (a.range[0] >= b.range[1] ? 1 : -1));

  let max = 0;
  for (let i = 1; i < slopes.length; i++)
    if (
      slopes[i - 1].slope === 1 &&
      slopes[i].slope === -1 &&
      slopes[i - 1].range[1] === slopes[i].range[0]
    )
      max = Math.max(max, 1 + slopes[i].range[1] - slopes[i - 1].range[0]);

  return max;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
