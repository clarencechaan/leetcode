/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function (nums, target) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  target.sort((a, b) => (a > b ? 1 : -1));

  const oddN = nums.filter((num) => num % 2 !== 0);
  const oddT = target.filter((num) => num % 2 !== 0);
  const evenN = nums.filter((num) => num % 2 === 0);
  const evenT = target.filter((num) => num % 2 === 0);

  let count = 0;

  for (let i = 0; i < oddN.length; i++)
    if (oddN[i] > oddT[i]) count += (oddN[i] - oddT[i]) / 2;

  for (let i = 0; i < evenN.length; i++)
    if (evenN[i] > evenT[i]) count += (evenN[i] - evenT[i]) / 2;

  return count;
};

console.log(makeSimilar([8, 12, 6], [2, 14, 10]));
