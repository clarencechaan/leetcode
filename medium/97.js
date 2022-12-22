/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let arr1 = s1.split("");
  let arr2 = s2.split("");
  let arr3 = s3.split("");

  let seen = {};

  function recurse(pos1 = 0, pos2 = 0) {
    if (arr1.length + arr2.length !== arr3.length) return false;
    if (pos1 === arr1.length && pos2 === arr2.length) return true;
    let shift1 = false;
    let shift2 = false;
    if (arr1[pos1] === arr3[pos1 + pos2]) {
      if (seen[pos1 + 1 + "," + pos2] !== undefined)
        shift1 = seen[pos1 + 1 + "," + pos2];
      else {
        shift1 = recurse(pos1 + 1, pos2);
        seen[pos1 + "," + pos2] = shift1;
      }
    }
    if (arr2[pos2] === arr3[pos1 + pos2]) {
      if (seen[pos1 + "," + (pos2 + 1)] !== undefined)
        shift2 = seen[pos1 + "," + pos2];
      else {
        shift2 = recurse(pos1, pos2 + 1);
        seen[pos1 + "," + (pos2 + 1)] = shift2;
      }
    }

    return shift1 || shift2;
  }

  return recurse();
};

console.log(
  isInterleave(
    "abababababababababababababababababababababababababababababababababababababababababababababababababbb",
    "babababababababababababababababababababababababababababababababababababababababababababababababaaaba",
    "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb"
  )
);
