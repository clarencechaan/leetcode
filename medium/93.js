/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  function validNum(str) {
    const integer = parseInt(str);
    return integer.toString() === str && integer >= 0 && integer <= 255;
  }

  let result = [];

  for (let i = 1; i <= 3; i++)
    for (let j = 1; j <= 3; j++)
      for (let k = 1; k <= 3; k++)
        for (let l = 1; l <= 3; l++) {
          let [a, b, c, d] = [i, i + j, i + j + k, i + j + k + l];
          if (d !== s.length) continue;
          if (
            validNum(s.substring(0, a)) &&
            validNum(s.substring(a, b)) &&
            validNum(s.substring(b, c)) &&
            validNum(s.substring(c, d))
          ) {
            result.push(
              s.substring(0, a) +
                "." +
                s.substring(a, b) +
                "." +
                s.substring(b, c) +
                "." +
                s.substring(c)
            );
          }
        }

  return result;
};

console.log(restoreIpAddresses("101023"));
