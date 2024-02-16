/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let result = 0;

  for (let i = low; i <= high; i++) {
    const str = i.toString();
    if (str.length % 2 === 1) continue;
    else {
      let sum1 = 0;
      let sum2 = 0;
      for (let j = 0; j < str.length / 2; j++) sum1 += parseInt(str[j]);
      for (let j = str.length / 2; j < str.length; j++)
        sum2 += parseInt(str[j]);
      if (sum1 === sum2) result++;
    }
  }

  return result;
};

console.log(countSymmetricIntegers(1, 100));
