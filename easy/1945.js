/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  function letterPosition(letter) {
    return letter.charCodeAt() - 96;
  }

  function sumDigits(str) {
    let result = 0;
    for (const char of str) result += parseInt(char);
    return result.toString();
  }

  let result = "";
  for (const char of s) result += letterPosition(char);

  for (let i = 0; i < k; i++) result = sumDigits(result);

  return result;
};

console.log(getLucky("zbax", 2));
