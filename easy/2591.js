/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  const distribution = Array(children).fill(1);
  money -= children;
  if (money < 0) return -1;

  for (let i = 0; i < distribution.length && money > 0; i++) {
    const add = Math.min(7, money);
    money -= add;
    distribution[i] += add;
  }

  let receive8 = distribution.filter((d) => d === 8).length;
  if (money > 0) receive8--;
  else if (distribution.includes(4) && receive8 === distribution.length - 1)
    receive8--;

  return receive8;
};
