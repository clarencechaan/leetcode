/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  for (let i = 0; i < num.length && k; i++)
    if (num[i] > num[i + 1] || i === num.length - 1) {
      num = num.substring(0, i) + num.substring(i + 1);
      i -= 2;
      k--;
    }

  while (num[0] === "0") num = num.substring(1);
  if (!num) num = "0";
  return num;
};

console.log(removeKdigits("1111111", 3));
