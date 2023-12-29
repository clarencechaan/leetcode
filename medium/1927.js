/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
  let sum = 0;
  let turns = 0;
  for (let i = 0; i < num.length / 2; i++)
    if (num[i] !== "?") sum += parseInt(num[i]);
    else turns++;
  for (let i = num.length / 2; i < num.length; i++)
    if (num[i] !== "?") sum -= parseInt(num[i]);
    else turns--;

  return sum + (turns * 9) / 2 !== 0;
};

console.log(sumGame("5023"));
