/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  if (num === target.toString()) return [num];
  let result = [];

  function recurse(idx = 0, arr = [], expr = "") {
    if (idx >= num.length) {
      let sum = arr.reduce((sum, val) => sum + val, 0);
      if (sum === target) result.push(expr);
    } else if (idx === 0) {
      for (let i = 1; i < num.length && !(num[idx] === "0" && i > idx + 1); i++)
        recurse(i, [parseInt(num.slice(idx, i))], expr + num.slice(idx, i));
    } else {
      for (
        let i = idx + 1;
        i <= num.length && !(num[idx] === "0" && i > idx + 1);
        i++
      ) {
        {
          recurse(
            i,
            [...arr, parseInt(num.slice(idx, i))],
            expr + "+" + num.slice(idx, i)
          );
          recurse(
            i,
            [...arr, -parseInt(num.slice(idx, i))],
            expr + "-" + num.slice(idx, i)
          );
          let nextArr = [...arr];
          let nextExpr = expr;
          nextArr[nextArr.length - 1] *= parseInt(num.slice(idx, i));
          nextExpr += "*" + num.slice(idx, i);
          recurse(i, nextArr, nextExpr);
        }
      }
    }
  }

  recurse();
  return result;
};
console.log(addOperators("123", 6));
