/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  let result = [...restaurants].filter(
    ([, , vf, price, distance]) =>
      price <= maxPrice &&
      distance <= maxDistance &&
      (veganFriendly === 0 || (veganFriendly === 1 && vf === 1))
  );

  result.sort((a, b) =>
    a[1] > b[1] || (a[1] === b[1] && a[0] > b[0]) ? -1 : 1
  );

  result = result.map(([id]) => id);

  return result;
};

console.log(
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    1,
    50,
    10
  )
);
