/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let ans = 0;

  let open = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") open++;
    else if (s[i] === ")" && s[i + 1] === ")" && open >= 1) {
      open--;
      i++;
    } else if (s[i] === ")" && s[i + 1] === ")" && open === 0) {
      ans++;
      i++;
    } else if (s[i] === ")" && open >= 1) {
      open--;
      ans++;
    } else if (s[i] === ")" && open === 0) {
      ans += 2;
    }
  }

  ans += open * 2;

  return ans;
};

console.log(minInsertions("(()))"));
