/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  let max = 0;

  for (let i = 0; i < colors.length - 1; i++)
    for (let j = colors.length - 1; j >= 0 && j - i > max; j--)
      if (colors[i] !== colors[j]) max = j - i;

  return max;
};

console.log(maxDistance([0, 1]));
