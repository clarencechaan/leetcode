/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let indices = {};
  for (let i = 0; i < s.length; i++)
    if (!indices[s[i]]) indices[s[i]] = [i];
    else indices[s[i]].push(i);

  let max = -1;
  for (const char in indices)
    if (indices[char].length >= 2)
      max = Math.max(
        indices[char][indices[char].length - 1] - indices[char][0] - 1,
        max
      );

  return max;
};

console.log(maxLengthBetweenEqualCharacters("mgntdygtxrvxjnwksqhxuxtrv"));
