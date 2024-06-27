/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
  function getVariance(letter1, letter2) {
    let str = "";
    for (const char of s) if (char === letter1 || char === letter2) str += char;
    const counts1 = [0];
    const counts2 = [0];
    for (let i = 0; i < str.length; i++) {
      counts1.push(counts1[i] + +(str[i] === letter1));
      counts2.push(counts2[i] + +(str[i] === letter2));
    }

    let variance = 0;
    for (let i = 0; i < counts1.length; i++)
      for (let j = i + 1; j < counts1.length; j++) {
        const diff1 = counts1[j] - counts1[i];
        const diff2 = counts2[j] - counts2[i];
        if (!diff1 || !diff2) continue;
        variance = Math.max(variance, Math.abs(diff2 - diff1));
      }
    return variance;
  }

  let letters = new Set();
  for (const char of s) letters.add(char);

  let ans = 0;
  letters = [...letters];
  for (let i = 0; i < letters.length; i++)
    for (let j = i + 1; j < letters.length; j++)
      ans = Math.max(ans, getVariance(letters[i], letters[j]));
  return ans;
};

console.log(largestVariance("aababbb"));
