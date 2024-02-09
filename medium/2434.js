/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  s = s.split("").reverse();
  let min = [s[0]];
  for (let i = 1; i < s.length; i++)
    if (s[i] < min[i - 1]) min.push(s[i]);
    else min.push(min[i - 1]);

  let t = [];
  let result = [];
  while (s.length) {
    if (
      t[t.length - 1] <= s[s.length - 1] &&
      t[t.length - 1] <= min[s.length - 1]
    )
      result.push(t.pop());
    else if (
      s[s.length - 1] <= t[t.length - 1] &&
      s[s.length - 1] <= min[s.length - 1]
    )
      result.push(s.pop());
    else t.push(s.pop());
  }
  t.reverse();
  result.push(...t);
  result = result.join("");
  return result;
};

console.log(robotWithString("zza"));
