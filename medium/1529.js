/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let start = parseInt(target[0]);
  let splits = 0;
  for (let i = 1; i < target.length; i++)
    if (target[i] !== target[i - 1]) splits++;

  return splits + start;
};

console.log(minFlips("10111"));
