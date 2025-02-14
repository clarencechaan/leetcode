/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function (left, right) {
  const numLeft = +left;
  const numRight = +right;

  // find number of palindromes in range [min, max];
  const min = Math.ceil(Math.sqrt(numLeft));
  const max = Math.floor(Math.sqrt(numRight));

  function isPalindrome(num) {
    const str = num.toString();
    for (let i = 0; i < str.length / 2; i++)
      if (str[i] !== str.at(-1 - i)) return false;
    return true;
  }

  function countSuperpalindromes(str = "") {
    const num = BigInt(str);
    if (num > max) return 0;
    if (str[0] === "0") return 0;

    let sum = +(num >= min && isPalindrome(num) && isPalindrome(num ** 2n));
    sum += countSuperpalindromes(str + "0");
    sum += countSuperpalindromes(str + "1");
    sum += countSuperpalindromes(str + "2");
    return sum;
  }

  let answer = 0;
  if (min <= 3 && 3 <= max) answer++;
  answer += countSuperpalindromes();
  return answer;
};
