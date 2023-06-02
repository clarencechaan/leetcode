/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function (neededApples) {
  function treesOnPerimeter(sl) {
    return 3n * sl * sl;
  }

  let apples = 12n;
  let sideLength = 2n;
  while (apples < neededApples) {
    sideLength += 2n;
    apples += treesOnPerimeter(sideLength);
  }

  return Number(sideLength * 4n);
};

console.log(minimumPerimeter(13));
