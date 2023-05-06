/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  let equalMap = {};
  let nonequalMap = {};
  for (const equation of equations) {
    let x = equation[0];
    let y = equation[3];
    if (!equalMap[x]) equalMap[x] = new Set([x]);
    if (!equalMap[y]) equalMap[y] = new Set([y]);
    if (!nonequalMap[x]) nonequalMap[x] = new Set();
    if (!nonequalMap[y]) nonequalMap[y] = new Set();

    if (equation[1] === "=") {
      for (const v of equalMap[y]) equalMap[x].add(v);
      equalMap[y] = equalMap[x];
    } else {
      nonequalMap[x].add(y);
      nonequalMap[y].add(x);
    }
  }

  for (const variable in equalMap)
    for (const a of equalMap[variable])
      if (nonequalMap[variable].has(a)) return false;

  return true;
};

console.log(equationsPossible(["c==c", "f!=a", "f==b", "b==c"]));
