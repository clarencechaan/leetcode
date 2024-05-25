/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function (fruits, startPos, k) {
  let leftFruits = fruits
    .filter(([pos]) => pos < startPos && startPos - pos <= k)
    .reverse();
  let rightFruits = fruits.filter(
    ([pos]) => pos >= startPos && pos - startPos <= k
  );

  let leftFruitsAmount = 0;
  let rightFruitsAmount = rightFruits.reduce(
    (sum, [, amount]) => sum + amount,
    0
  );

  let max = rightFruitsAmount;

  for (const [pos, amount] of leftFruits) {
    leftFruitsAmount += amount;
    const leftSteps = startPos - pos;
    let lastRightFruit = rightFruits[rightFruits.length - 1];
    while (
      rightFruits.length &&
      leftSteps * 2 + lastRightFruit[0] - startPos > k
    ) {
      rightFruits.pop();
      rightFruitsAmount -= lastRightFruit[1];
      lastRightFruit = rightFruits[rightFruits.length - 1];
    }
    max = Math.max(max, leftFruitsAmount + rightFruitsAmount);
  }

  leftFruits = fruits
    .filter(([pos]) => pos < startPos && startPos - pos <= k)
    .reverse();
  rightFruits = fruits.filter(
    ([pos]) => pos >= startPos && pos - startPos <= k
  );

  leftFruitsAmount = leftFruits.reduce((sum, [, amount]) => sum + amount, 0);
  rightFruitsAmount = 0;

  for (const [pos, amount] of rightFruits) {
    rightFruitsAmount += amount;
    const rightSteps = pos - startPos;
    let lastLeftFruit = leftFruits[leftFruits.length - 1];
    while (
      leftFruits.length &&
      rightSteps * 2 + startPos - lastLeftFruit[0] > k
    ) {
      leftFruits.pop();
      leftFruitsAmount -= lastLeftFruit[1];
      lastLeftFruit = leftFruits[leftFruits.length - 1];
    }
    max = Math.max(max, leftFruitsAmount + rightFruitsAmount);
  }

  return max;
};

console.log(
  maxTotalFruits(
    [
      [2, 8],
      [6, 3],
      [8, 6],
    ],
    5,
    4
  )
);
