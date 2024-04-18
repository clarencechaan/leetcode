/**
 * @param {number[]} rolls
 * @param {number} k
 * @return {number}
 */
var shortestSequence = function (rolls, k) {
  // 1. create a helper function sequenceExists(seq) that returns true if the
  // sequence `seq` exists in `rolls`
  // 2. from shortest to longest, go through every possible sequence until it
  // returns false
  // (too slow)

  // another idea:
  // create a helper function everySequenceExists(len) that returns true
  // if every sequence of length `len` exists in `rolls`
  // (too slow)

  // idea, passes:
  // find the `length` of the longest sequence where every sequence of rolls can
  // be taken from `rolls`
  // => do this by counting how many sets of k different rolls can be created
  // return `length+1`

  let length = 0;
  let seen = new Set();
  for (const roll of rolls) {
    seen.add(roll);
    if (seen.size >= k) {
      length++;
      seen = new Set();
    }
  }
  return length + 1;
};

console.log(shortestSequence([4, 2, 1, 2, 3, 3, 2, 4, 1], 4));
