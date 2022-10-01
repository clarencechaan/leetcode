/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let longest0 = 0;
  let longest1 = 0;

  let count0 = 0;
  let count1 = 0;
  for (const char of s) {
    if (char === "0") {
      count1 = 0;
      count0++;
      longest0 = Math.max(count0, longest0);
    } else if (char === "1") {
      count0 = 0;
      count1++;
      longest1 = Math.max(count1, longest1);
    }
  }

  return longest1 > longest0;
};

console.log(checkZeroOnes("110100010"));
