/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  let diff1 = [];
  let diff2 = [];
  for (let i = 0; i < Math.max(s1.length, s2.length); i++) {
    if (s1[i] !== s2[i]) {
      diff1.push(s1[i]);
      diff2.push(s2[i]);
    }
  }

  return (
    (!diff1.length && !diff2.length) ||
    (diff1.length === 2 &&
      diff2.length === 2 &&
      diff1[0] === diff2[1] &&
      diff1[1] === diff2[0])
  );
};

console.log(areAlmostEqual("bank", "kanb"));
