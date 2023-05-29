/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function (text) {
  let freqMap = {};
  let left = 0;
  let right = 0;
  for (; right < text.length; right++) {
    freqMap[text[right]] = (freqMap[text[right]] || 0) + 1;
    let entries = Object.entries(freqMap);
    entries.sort((a, b) => (a[1] > b[1] ? 1 : -1));
    if (
      entries.length > 2 ||
      (entries.length === 2 && entries[0][1] > 1 && entries[1][1] > 1)
    ) {
      freqMap[text[left]]--;
      if (!freqMap[text[left]]) delete freqMap[text[left]];
      left++;
    }
  }

  let freqMapLR = [{}];
  for (let i = 1; i <= text.length; i++) {
    freqMapLR[i] = { ...freqMapLR[i - 1] };
    freqMapLR[i][text[i - 1]] = (freqMapLR[i][text[i - 1]] || 0) + 1;
  }

  function getFreqMaps(start = 0, end = text.length) {
    let freqMapSubstring = { ...freqMapLR[end] };
    for (const char in freqMapLR[start])
      freqMapSubstring[char] -= freqMapLR[start][char];
    for (const char in freqMapSubstring)
      if (!freqMapSubstring[char]) delete freqMapSubstring[char];

    let freqMapRest = { ...freqMapLR[text.length] };
    for (const char in freqMapLR[end])
      freqMapRest[char] -= freqMapLR[end][char];
    for (const char in freqMapLR[start])
      freqMapRest[char] += freqMapLR[start][char];
    for (const char in freqMapRest)
      if (!freqMapRest[char]) delete freqMapRest[char];

    return [freqMapSubstring, freqMapRest];
  }

  function repetitionPossible(freqMapSubstring, freqMapRest) {
    let entries = Object.entries(freqMapSubstring);
    if (entries.length === 1) return true;
    if (entries.length > 2) return false;
    entries.sort((a, b) => (a[1] > b[1] ? 1 : -1));
    if (entries[0][1] === 1 && freqMapRest[entries[1][0]]) return true;
    return false;
  }

  let length = right - left;
  for (let i = 0; i + (right - left) <= text.length; i++) {
    let [freqMapSubstring, freqMapRest] = getFreqMaps(i, i + length);
    if (repetitionPossible(freqMapSubstring, freqMapRest)) return length;
  }

  return length - 1;
};

console.log(maxRepOpt1("aaabaaa"));
