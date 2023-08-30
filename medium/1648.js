/**
 * @param {number[]} inventory
 * @param {number} orders
 * @return {number}
 */
var maxProfit = function (inventory, orders) {
  orders = BigInt(orders);
  inventory = inventory.map((num) => BigInt(num));
  inventory.sort((a, b) => (a > b ? -1 : 1));
  inventory.push(0n);

  let value = 0n;
  for (let i = 0n; i < inventory.length - 1; i++) {
    let balls = (inventory[i] - inventory[i + 1n]) * (i + 1n);
    if (balls <= orders) {
      value +=
        ((inventory[i] * (inventory[i] + 1n)) / 2n -
          (inventory[i + 1n] * (inventory[i + 1n] + 1n)) / 2n) *
        (i + 1n);
      orders -= balls;
    } else {
      let rows = orders / (i + 1n);
      let remainder = orders % (i + 1n);
      value +=
        ((inventory[i] * (inventory[i] + 1n)) / 2n -
          ((inventory[i] - rows) * (inventory[i] + 1n - rows)) / 2n) *
        (i + 1n);
      value += remainder * (inventory[i] - rows);
      break;
    }
  }

  return Number(value % (10n ** 9n + 7n));
};

console.log(maxProfit([2, 5], 4));
