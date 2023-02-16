/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  let result = s;
  while (result.length > k) {
    let arr = [];
    for (let i = 0; i < result.length; i += k)
      arr.push(result.substring(i, i + k));
    arr = arr.map((str) => {
      let replaced = 0;
      for (const digit of str) replaced += parseInt(digit);
      return replaced.toString();
    });
    result = arr.join("");
  }
  return result;
};

console.log(digitSum("00000000", 3));
