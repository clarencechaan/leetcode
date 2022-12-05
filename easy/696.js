/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let chunkSizes = [1];

  let char = s[0];
  for (let i = 1; i < s.length; i++)
    if (s[i] === s[i - 1]) chunkSizes[chunkSizes.length - 1]++;
    else {
      char = s[i];
      chunkSizes.push(1);
    }

  let result = 0;
  for (let i = 0; i < chunkSizes.length - 1; i++)
    result += Math.min(chunkSizes[i], chunkSizes[i + 1]);
  return result;
};

console.log(countBinarySubstrings("00110011"));
