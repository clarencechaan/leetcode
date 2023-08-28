/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  function differByOne(a, b) {
    let differ = 0;
    for (let i = 0; i < a.length && differ <= 1; i++)
      if (a[i] !== b[i]) differ++;
    return differ === 1;
  }

  let count = 0;
  for (let length = 1; length <= s.length; length++)
    for (let i = 0; i + length <= s.length; i++)
      for (let j = 0; j + length <= t.length; j++)
        if (differByOne(s.slice(i, i + length), t.slice(j, j + length)))
          count++;

  return count;
};

console.log(countSubstrings("aba", "baba"));
