/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  let counts = {};

  for (const digit of num)
    if (!counts[digit]) counts[digit] = 1;
    else counts[digit]++;

  for (let i = 0; i < num.length; i++)
    if ((counts[i] || 0) != num[i]) return false;

  return true;
};

console.log(digitCount("030"));
