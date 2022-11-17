/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let result = 0;
  let indices = { a: [], b: [], c: [] };

  for (let i = 0; i < s.length; i++) indices[s[i]].push(i);
  for (const char in indices) indices[char] = indices[char].reverse();
  for (let start = 0; start < s.length; start++) {
    const end = Math.max(indices.a.at(-1), indices.b.at(-1), indices.c.at(-1));
    if (!end) break;
    result += s.length - end;
    if (indices.a.at(-1) === start) indices.a.pop();
    else if (indices.b.at(-1) === start) indices.b.pop();
    else if (indices.c.at(-1) === start) indices.c.pop();
  }

  return result;
};

console.log(numberOfSubstrings("abcabc"));
