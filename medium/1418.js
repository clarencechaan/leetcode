/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  let rows = {};

  let dishes = new Set();
  let tables = new Set();
  for (const [, tableNumber, foodItem] of orders) {
    dishes.add(foodItem);
    tables.add(tableNumber);
  }

  dishes = [...dishes].sort();
  tables = [...tables].sort((a, b) => (a > b ? 1 : -1));

  for (const table of tables) {
    rows[table] = {};
    for (const dish of dishes) rows[table][dish] = 0;
  }

  for (const [, tableNumber, foodItem] of orders) rows[tableNumber][foodItem]++;

  rows = Object.entries(rows).map(([table, dishes]) => [
    table,
    ...Object.entries(dishes).map(([, count]) => count.toString()),
  ]);

  rows = [["Table", ...dishes], ...rows];

  return rows;
};

console.log(
  displayTable([
    ["David", "3", "Ceviche"],
    ["Corina", "10", "Beef Burrito"],
    ["David", "3", "Fried Chicken"],
    ["Carla", "5", "Water"],
    ["Carla", "5", "Ceviche"],
    ["Rous", "3", "Ceviche"],
  ])
);
