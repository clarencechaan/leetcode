/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  // one cursor each for `s` and `t`
  // keep incrementing the `s` cursor, increment the `t` cursor if chars match
  // return `t.length` minus the value of the `t` cursor

  let j = 0;
  for (let i = 0; i < s.length; i++) if (s[i] === t[j]) j++;
  return t.length - j;
};

console.log(appendCharacters("coaching", "coding"));
