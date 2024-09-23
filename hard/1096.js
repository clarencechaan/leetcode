/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function (expression) {
  function isUnion(expr) {
    let depth = 0;
    if (expr[0] !== "{" || expr[expr.length - 1] !== "}") return false;
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] === "{") depth++;
      else if (expr[i] === "}") {
        depth--;
        if (depth === 0 && i < expr.length - 1) return false;
      }
    }
    return true;
  }

  function evaluate(expr) {
    if (!expr.includes("{") && !expr.includes("}")) return [expr];
    if (isUnion(expr)) return evaluateUnion(expr);
    else return evaluateConcat(expr);
  }

  function evaluateUnion(expr) {
    let depth = 0;
    let ranges = [[1, null]];
    for (let i = 1; i < expr.length - 1; i++) {
      if (expr[i] === "{") depth++;
      else if (expr[i] === "}") depth--;
      else if (expr[i] === "," && depth === 0) {
        ranges[ranges.length - 1][1] = i;
        ranges.push([i + 1, null]);
      }
    }

    ranges[ranges.length - 1][1] = expr.length - 1;
    ranges = ranges.filter(([a, b]) => a !== b);

    let exprs = ranges.map(([start, end]) => expr.slice(start, end));
    exprs = exprs.map(evaluate);

    const set = new Set();
    for (const arr of exprs) for (const elem of arr) set.add(elem);
    return [...set].sort();
  }

  function evaluateConcat(expr) {
    let depth = 0;
    let ranges = [[0, null]];
    for (let i = 0; i < expr.length; i++) {
      if (expr[i] === "{") {
        depth++;
        if (depth === 1) {
          ranges[ranges.length - 1][1] = i;
          ranges.push([i, null]);
        }
      } else if (expr[i] === "}") {
        depth--;
        if (depth === 0) {
          ranges[ranges.length - 1][1] = i + 1;
          ranges.push([i + 1, null]);
        }
      }
    }

    ranges[ranges.length - 1][1] = expr.length;
    ranges = ranges.filter(([a, b]) => a !== b);

    let exprs = ranges.map(([start, end]) => expr.slice(start, end));
    exprs = exprs.map(evaluate);

    let set = new Set(exprs[0]);
    for (let i = 1; i < exprs.length; i++) {
      const nextSet = new Set();
      for (const word of set)
        for (const suffix of exprs[i]) nextSet.add(word + suffix);
      set = nextSet;
    }

    return [...set].sort();
  }

  return evaluate(expression);
};

console.log(braceExpansionII("{a,b}{c,{d,e}}"));
