/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let counts = {};
  for (const num of arr)
    if (!counts[num]) counts[num] = 1;
    else counts[num]++;

  let occurrences = new Set();
  for (const num in counts)
    if (occurrences.has(counts[num])) return false;
    else occurrences.add(counts[num]);

  return true;
};

console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
