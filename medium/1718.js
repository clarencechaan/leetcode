/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  // we know:
  // "1" occurs once
  // every integer between 2 and n occer twice
  // => sequence is of length 2*n-1
  // distance of each pair is exactly equal to its value

  const length = 2 * n - 1;

  function getSequence(
    idx = 0,
    arr = Array(length).fill(null),
    taken = new Set()
  ) {
    if (taken.size === n) return arr;
    if (idx >= length) return;
    if (arr[idx]) return getSequence(idx + 1, arr, taken);

    for (let i = n; i >= 2; i--) {
      if (taken.has(i) || arr[idx + i] || idx + i >= length) continue;
      taken.add(i);
      arr[idx] = i;
      arr[idx + i] = i;
      const result = getSequence(idx + 1, arr, taken);
      if (result) return result;
      arr[idx] = null;
      arr[idx + i] = null;
      taken.delete(i);
    }

    if (!taken.has(1)) {
      taken.add(1);
      arr[idx] = 1;
      const result = getSequence(idx + 1, arr, taken);
      if (result) return result;
      taken.delete(1);
      arr[idx] = null;
    }
  }

  return getSequence();
};

console.log(constructDistancedSequence(3));
