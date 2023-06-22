/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  let horizontal = s.split(" ");
  let result = [];
  for (let i = 0; i < horizontal.length; i++)
    for (let j = 0; j < horizontal[i].length; j++) {
      if (!result[j]) result[j] = [];
      result[j][i] = horizontal[i][j];
    }

  result = result.map((arr) => {
    let str = "";
    for (const char of arr) str += char || " ";
    return str;
  });

  return result;
};

console.log(printVertically("HOW ARE YOU"));
