/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  let refills = 0;
  let alice = capacityA;
  let bob = capacityB;

  let i = 0;
  let j = plants.length - 1;
  while (i < j) {
    if (plants[i] > alice) {
      refills++;
      alice = capacityA;
    }

    if (plants[j] > bob) {
      refills++;
      bob = capacityB;
    }

    alice -= plants[i];
    bob -= plants[j];
    i++;
    j--;
  }

  if (i === j && plants[i] > Math.max(alice, bob)) refills++;
  return refills;
};
