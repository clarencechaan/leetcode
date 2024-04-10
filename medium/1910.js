/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  // let replaced = s.replace(part, "");
  // while (replaced.length < s.length) {
  //   s = replaced;
  //   replaced = s.replace(part, "");
  // }
  // return replaced;

  // without .replace() method:
  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, i + part.length) === part) {
      s = s.slice(0, i) + s.slice(i + part.length);
      i -= part.length;
    }
  }

  return s;
};

console.log(removeOccurrences("daabcbaabcbc", "abc"));
