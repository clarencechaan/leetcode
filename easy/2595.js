/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
  const binary = n.toString(2);
  let [even, odd] = [0, 0];
  for (let i = 0; i < binary.length; i++)
    if (binary.at(-1 - i) === "1" && i % 2 === 0) even++;
    else if (binary.at(-1 - i) === "1" && i % 2 === 1) odd++;

  return [even, odd];
};
