/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 1) loop through both strings:
//  a) find first "#"
//  b) remove "#" and remove preceding character if it exists
//  c) repeat until no "#" is found
// 2) return s === t
var backspaceCompare = function (s, t) {
  let resultS = s;
  let resultT = t;

  while (resultS.includes("#")) {
    const idx = resultS.indexOf("#");
    resultS = resultS.slice(0, Math.max(0, idx - 1)) + resultS.slice(idx + 1);
  }

  while (resultT.includes("#")) {
    const idx = resultT.indexOf("#");
    resultT = resultT.slice(0, Math.max(0, idx - 1)) + resultT.slice(idx + 1);
  }

  return resultS === resultT;
};

console.log(backspaceCompare("ab#c", "ad#c"));
