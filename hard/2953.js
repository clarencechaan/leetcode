/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countCompleteSubstrings = function (word, k) {
  const dividers = [0];
  for (let i = 1; i < word.length; i++)
    if (Math.abs(word[i - 1].charCodeAt() - word[i].charCodeAt()) > 2)
      dividers.push(i);
  dividers.push(word.length);

  function getCompleteCount(length, left, right) {
    let count = 0;
    const freq = Array(26).fill(0);
    let off = new Set();

    for (let i = 0; i < length; i++) {
      const charIdx = word[left + i].charCodeAt() - 97;
      freq[charIdx]++;
      if (freq[charIdx] === k) off.delete(charIdx);
      else off.add(charIdx);
    }

    if (!off.size) count++;

    for (let i = left; i + length < right; i++) {
      const charIdx1 = word[i].charCodeAt() - 97;
      const charIdx2 = word[i + length].charCodeAt() - 97;
      freq[charIdx1]--;
      if (freq[charIdx1] === k || freq[charIdx1] === 0) off.delete(charIdx1);
      else off.add(charIdx1);
      freq[charIdx2]++;
      if (freq[charIdx2] === k || freq[charIdx2] === 0) off.delete(charIdx2);
      else off.add(charIdx2);
      if (!off.size) count++;
    }

    return count;
  }

  let ans = 0;
  for (let i = 1; i < dividers.length; i++) {
    const left = dividers[i - 1];
    const right = dividers[i];
    for (
      let length = k;
      length <= right - left && length / k <= 26;
      length += k
    )
      ans += getCompleteCount(length, left, right);
  }

  return ans;
};

console.log(countCompleteSubstrings("igigee", 2));
