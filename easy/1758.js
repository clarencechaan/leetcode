/**
 * @param {string} s
 * @return {number}
 */
// 1) count the number of "1"s and "0"s in even positions and odd positions
// 2) calculate the number of characters in the correct position if the
//    first character is "0"
// 3) calculate the same for the case where the first character is "1"
// 4) return the lower of either calculation
var minOperations = function (s) {
  let even0 = 0;
  let odd1 = 0;
  let even1 = 0;
  let odd0 = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === "0") even0++;
      if (s[i] === "1") even1++;
    } else {
      if (s[i] === "1") odd1++;
      if (s[i] === "0") odd0++;
    }
  }

  return Math.min(even0 + odd1, even1 + odd0);
};

console.log(minOperations("1111"));
