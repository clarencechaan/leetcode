/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  let bLeft = [];
  let aRight = [];

  let b = 0;
  for (let i = 0; i <= s.length; i++) {
    bLeft[i] = b;
    if (s[i] === "b") b++;
  }

  let a = 0;
  for (let i = s.length; i >= 0; i--) {
    if (s[i] === "a") a++;
    aRight[i] = a;
  }

  let min = Infinity;
  for (let i = 0; i <= s.length; i++) min = Math.min(bLeft[i] + aRight[i], min);
  return min;
};

console.log(minimumDeletions("bbaaaaabb"));
