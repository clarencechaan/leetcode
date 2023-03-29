/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  function lowest(idx = 0, remaining = [...needs]) {
    if (remaining.every((remaining) => !remaining)) return 0;
    let result = Infinity;

    for (let i = idx; i < special.length; i++)
      if (
        special[i].every(
          (q, idx) => q <= remaining[idx] || idx === special[i].length - 1
        )
      )
        result = Math.min(
          result,
          special[i][special[i].length - 1] +
            lowest(
              i,
              remaining.map((q, j) => q - special[i][j])
            )
        );

    result = Math.min(
      result,
      remaining.reduce((sum, val, idx) => sum + val * price[idx], 0)
    );

    return result;
  }

  return lowest();
};

console.log(
  shoppingOffers(
    [0, 0, 0],
    [
      [1, 1, 0, 4],
      [2, 2, 1, 9],
    ],
    [1, 1, 1]
  )
);
