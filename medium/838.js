/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let result = dominoes.split("");

  let done = false;
  while (!done) {
    let prev = [...result];
    done = true;
    for (let i = 0; i < result.length; i++) {
      if (prev[i] === "." && prev[i - 1] === "R" && prev[i + 1] !== "L") {
        result[i] = "R";
        done = false;
      } else if (
        prev[i] === "." &&
        prev[i - 1] !== "R" &&
        prev[i + 1] === "L"
      ) {
        result[i] = "L";
        done = false;
      }
    }
  }

  return result.join("");
};

console.log(pushDominoes(".L.R...LR..L.."));
