/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let min = Infinity;
  for (let i = 0; i <= blocks.length - k; i++) {
    let count = 0;
    for (let j = 0; j < k; j++) {
      if (blocks[i + j] === "W") count++;
    }
    if (count < min) min = count;
  }
  return min;
};

console.log(minimumRecolors("BWWWBB", 6));
