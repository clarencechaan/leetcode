/**
 * @param {string} s
 * @return {string}
 */
var minimizeStringValue = function (s) {
  const freq = Array(26).fill(0);
  let question = 0;
  for (const char of s)
    if (char === "?") question++;
    else freq[char.charCodeAt() - 97]++;

  const addFreq = Array(26).fill(0);
  for (let i = 0; i < question; i++) {
    let minIdx = 0;
    for (let j = 1; j < 26; j++)
      if (freq[j] + addFreq[j] < freq[minIdx] + addFreq[minIdx]) minIdx = j;
    addFreq[minIdx]++;
  }

  let result = s.split("");
  let idx = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== "?") continue;
    while (addFreq[idx] === 0) idx++;
    addFreq[idx]--;
    result[i] = String.fromCharCode(idx + 97);
  }

  result = result.join("");
  return result;
};

console.log(minimizeStringValue("???"));
