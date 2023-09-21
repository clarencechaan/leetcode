/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  triplets = triplets.filter(
    (triplet) =>
      triplet[0] <= target[0] &&
      triplet[1] <= target[1] &&
      triplet[2] <= target[2]
  );

  let x = false;
  let y = false;
  let z = false;
  for (const [a, b, c] of triplets) {
    if (a === target[0]) x = true;
    if (b === target[1]) y = true;
    if (c === target[2]) z = true;
  }

  return x && y && z;
};

console.log(
  mergeTriplets(
    [
      [2, 5, 3],
      [1, 8, 4],
      [1, 7, 5],
    ],
    [2, 7, 5]
  )
);
