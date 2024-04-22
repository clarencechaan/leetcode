/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function (s) {
  // count how many times each character appears in `s`
  const freq = {};
  for (const char of s) freq[char] = (freq[char] || 0) + 1;

  // returns the start and end index of shortest valid substring starting from
  // `idx`
  function getValidSubstrRange(idx = 0) {
    let substrFreq = {};
    let valid = 0;
    for (let i = idx; i < s.length; i++) {
      if (!substrFreq[s[i]]) {
        valid++;
        substrFreq[s[i]] = 0;
      }
      substrFreq[s[i]]++;
      if (substrFreq[s[i]] === freq[s[i]]) valid--;
      if (valid === 0) return [idx, i + 1];
    }
    return null;
  }

  // returns all substring ranges that are valid
  function getAllSubstrRanges() {
    const seen = new Set();
    const ranges = [];
    for (let i = 0; i < s.length; i++) {
      if (!seen.has(s[i])) {
        const substrRange = getValidSubstrRange(i);
        if (substrRange) ranges.push(substrRange);
      }
      seen.add(s[i]);
    }
    return ranges;
  }

  const ranges = getAllSubstrRanges();

  // choose the maximum number of elements in `ranges` that do not overlap
  function getOptimalRangeIndices(
    rIdx = 0,
    sIdx = 0,
    memo = Array(s.length + 1)
      .fill()
      .map(() => [])
  ) {
    if (rIdx >= ranges.length || sIdx >= s.length) return [];
    if (memo[sIdx][rIdx]) return memo[sIdx][rIdx];
    const notTake = getOptimalRangeIndices(rIdx + 1, sIdx, memo);
    const [left, right] = ranges[rIdx];
    let take = [];
    if (sIdx <= left)
      take = [rIdx, ...getOptimalRangeIndices(rIdx + 1, right, memo)];
    let result;
    if (notTake.length >= take.length) result = notTake;
    else result = take;
    memo[sIdx][rIdx] = result;
    return result;
  }

  let result = getOptimalRangeIndices();
  result = result
    .map((idx) => ranges[idx])
    .map(([left, right]) => s.slice(left, right));
  return result;
};

console.log(maxNumOfSubstrings("abbaccd"));
