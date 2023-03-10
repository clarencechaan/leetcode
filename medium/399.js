/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let variables = {};

  for (const equation of equations) {
    let a = equation[0];
    let b = equation[1];
    variables[a] = { [a]: [1n, 1n] };
    variables[b] = { [b]: [1n, 1n] };
  }

  for (let i = 0; i < equations.length; i++) {
    let a = equations[i][0];
    let b = equations[i][1];
    let val = [values[i], 1];
    while (val[0] % 1 !== 0) {
      val[0] *= 10;
      val[1] *= 10;
    }
    val = [BigInt(val[0]), BigInt(val[1])];
    variables[a][b] = [val[0], val[1]];
    variables[b][a] = [val[1], val[0]];
  }

  let done = false;
  while (!done) {
    done = true;
    for (const a in variables)
      for (const c in variables)
        if (a !== c && !variables[a][c])
          for (const b in variables)
            if (a !== b && b !== c && variables[b][c] && variables[a][b]) {
              variables[a][c] = [
                variables[a][b][0] * variables[b][c][0],
                variables[a][b][1] * variables[b][c][1],
              ];
              done = false;
            }
  }

  let result = [];
  for (const query of queries) {
    let a = query[0];
    let b = query[1];
    let answer = -1;
    if (variables[a]?.[b])
      answer =
        Number((variables[a][b][0] * 1000000n) / variables[a][b][1]) / 1000000;
    result.push(answer);
  }

  return result;
};

console.log(
  calcEquation(
    [
      ["a", "c"],
      ["b", "e"],
      ["c", "d"],
      ["e", "d"],
    ],
    [2.0, 3.0, 0.5, 5.0],
    [["a", "b"]]
  )
);
