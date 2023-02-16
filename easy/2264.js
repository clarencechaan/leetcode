/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let result = "";
  for (let i = 0; i < num.length - 2; i++)
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2] && num[i] > result)
      result = num[i].repeat(3);
  return result;
};

console.log(largestGoodInteger("42352338"));
