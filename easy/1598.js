/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let depth = 0;
  for (const operation of logs) {
    if (operation[0] === "." && operation[1] === ".")
      depth = Math.max(0, depth - 1);
    else if (operation[0] === "." && operation[1] === "/");
    else depth++;
  }
  return depth;
};

console.log(minOperations(["d1/", "../", "../", "../"]));
