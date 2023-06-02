/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let arr = [];
  let parenthesisIndices = [];
  let depth = 0;

  for (const char of s) {
    if (char >= "a" && char <= "z") arr.push(char);
    else if (char === "(") {
      if (!parenthesisIndices[depth]) parenthesisIndices[depth] = [];
      parenthesisIndices[depth].push(arr.length);
      depth++;
    } else if (char === ")") {
      depth--;
      parenthesisIndices[depth].push(arr.length);
    }
  }

  function reverseArr(start, end) {
    arr = [
      ...arr.slice(0, start),
      ...arr.slice(start, end).reverse(),
      ...arr.slice(end),
    ];
  }

  while (parenthesisIndices.length) {
    let indices = parenthesisIndices.pop();
    for (let i = 0; i < indices.length; i += 2)
      reverseArr(indices[i], indices[i + 1]);
  }

  return arr.join("");
};

console.log(reverseParentheses("(ed(et(oc))el)"));
