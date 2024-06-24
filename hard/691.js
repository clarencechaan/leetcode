/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
  const tFreq = {};
  for (const char of target) tFreq[char] = (tFreq[char] || 0) + 1;

  let sFreqs = [];
  for (const sticker of stickers) {
    const sFreq = {};
    for (const char of sticker)
      if (!tFreq[char]) continue;
      else sFreq[char] = (sFreq[char] || 0) + 1;
    sFreqs.push(sFreq);
  }

  function isStrictlyBetter(freq1, freq2) {
    function contains(freq1, freq2) {
      for (const char in freq2)
        if ((freq1[char] || 0) < freq2[char]) return false;
      return true;
    }

    if (!contains(freq1, freq2)) return false;
    for (const char in freq1) if (freq1[char] > (freq2[char] || 0)) return true;
    return false;
  }

  sFreqs = sFreqs.filter(
    (freq1) => !sFreqs.some((freq2) => isStrictlyBetter(freq2, freq1))
  );

  function isValid(freq) {
    for (const char in tFreq) if ((freq[char] || 0) < tFreq[char]) return false;
    return true;
  }

  function shouldTake(idx, freq) {
    const sFreq = sFreqs[idx];
    for (const char in sFreq) if ((freq[char] || 0) < tFreq[char]) return true;
    return false;
  }

  let ans = Infinity;
  function getAns(idx = 0, freq = {}, count = 0) {
    if (count >= ans) return;
    if (isValid(freq)) {
      ans = count;
      return;
    }
    if (idx >= stickers.length) return;

    // skip
    getAns(idx + 1, freq, count);

    // take
    const sFreq = sFreqs[idx];
    if (shouldTake(idx, freq)) {
      for (const char in sFreq) freq[char] = (freq[char] || 0) + sFreq[char];
      getAns(idx, freq, count + 1);
      for (const char in sFreq) freq[char] = (freq[char] || 0) - sFreq[char];
    }
  }

  getAns();

  if (ans === Infinity) ans = -1;
  return ans;
};

console.log(minStickers(["with", "example", "science"], "thehat"));
