/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  function lexicallyGreater(a, b) {
    let strA = a.toString();
    let strB = b.toString();
    for (let i = 0; i < Math.min(strA.length, strB.length); i++) {
      if (strA[i] > strB[i]) return true;
      else if (strA[i] < strB[i]) return false;
    }

    if (strA.length > strB.length) return true;
    else return false;
  }

  let result = [];
  for (let i = 1; i <= n; i++) result.push(i);
  result.sort((a, b) => (lexicallyGreater(a, b) ? 1 : -1));
  return result;
};

console.log(lexicalOrder(100));

// 10 > 1
// 2 > 13
// 220 > 22
// 221 > 22
// 224 > 220
// 224 > 2
// 2103 > 22

// 2200 > 220
