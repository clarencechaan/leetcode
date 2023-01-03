/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let tokens = [];

  for (const char of s) {
    if (char === " ") continue;
    if (char === "*" || char === "/" || char === "+" || char === "-")
      tokens.push(char);
    else if (
      tokens[tokens.length - 1]?.[0] >= "0" &&
      tokens[tokens.length - 1]?.[0] <= "9"
    )
      tokens[tokens.length - 1] += char;
    else tokens.push(char);
  }

  tokens = tokens.map((token) =>
    token[0] >= "0" && token[0] <= "9" ? parseInt(token) : token
  );

  for (let i = 0; i < tokens.length; i++) {
    if (tokens === null) continue;
    if (tokens[i] === "*") {
      tokens[i + 1] *= tokens[i - 1];
      tokens[i - 1] = null;
      tokens[i] = null;
    } else if (tokens[i] === "/") {
      tokens[i + 1] = tokens[i - 1] / tokens[i + 1];
      if (tokens[i + 1] >= 0) tokens[i + 1] = Math.floor(tokens[i + 1]);
      else tokens[i + 1] = Math.ceil(tokens[i + 1]);
      tokens[i - 1] = null;
      tokens[i] = null;
    }
  }

  tokens = tokens.filter((token) => token !== null);

  for (let i = 0; i < tokens.length; i++) {
    if (tokens === null) continue;
    if (tokens[i] === "+") {
      tokens[i + 1] += tokens[i - 1];
      tokens[i - 1] = null;
      tokens[i] = null;
    } else if (tokens[i] === "-") {
      tokens[i + 1] = tokens[i - 1] - tokens[i + 1];
      tokens[i - 1] = null;
      tokens[i] = null;
    }
  }

  return tokens[tokens.length - 1];
};

console.log(calculate("3+2*2"));
