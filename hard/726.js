/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  const brackets = {};
  const stack = [];
  for (let i = 0; i < formula.length; i++)
    if (formula[i] === "(") stack.push(i);
    else if (formula[i] === ")") brackets[stack.pop()] = i;

  function getMap(left = 0, right = formula.length) {
    const map = {};
    for (let i = left; i < right; ) {
      if (formula[i] === "(") {
        const bracketMap = getMap(i + 1, brackets[i]);
        const numStr = getNumStr(brackets[i] + 1);
        const number = parseInt(numStr) || 1;
        multMap(bracketMap, number);
        mergeMap(map, bracketMap);
        i = brackets[i] + numStr.length + 1;
      } else {
        const atom = getAtom(i);
        i += atom.length;
        const numStr = getNumStr(i);
        i += numStr.length;
        mergeMap(map, { [atom]: parseInt(numStr) || 1 });
      }
    }

    return map;
  }

  function mergeMap(map1, map2) {
    for (let atom in map2) map1[atom] = (map1[atom] || 0) + map2[atom];
  }

  function multMap(map, number) {
    for (let atom in map) map[atom] *= number;
  }

  function getAtom(idx) {
    let atom = formula[idx];
    for (idx = idx + 1; "a" <= formula[idx] && formula[idx] <= "z"; idx++)
      atom += formula[idx];
    return atom;
  }

  function getNumStr(idx) {
    let numStr = formula[idx];
    if (!numStr || numStr < "0" || numStr > "9") return "";
    for (idx = idx + 1; "0" <= formula[idx] && formula[idx] <= "9"; idx++)
      numStr += formula[idx];
    return numStr;
  }

  const map = getMap();
  const entries = Object.entries(map).sort((a, b) => (a[0] > b[0] ? 1 : -1));

  let result = "";
  for (const [atom, number] of entries) {
    result += atom;
    if (number >= 2) result += number;
  }

  return result;
};

console.log(countOfAtoms("H2O"));
