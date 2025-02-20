/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function (items, k) {
  items.sort((a, b) => (a[0] > b[0] ? -1 : 1));

  let takenItems = items.slice(0, k).sort((a, b) => (a[0] > b[0] ? 1 : -1));
  let remainingItems = items.slice(k);

  let totalProfit = 0;
  let distinctCategories = 0;
  const categoryFreq = {};
  for (const [, category] of items) categoryFreq[category] = 0;
  for (const [profit, category] of takenItems) {
    totalProfit += profit;
    categoryFreq[category]++;
    if (categoryFreq[category] === 1) distinctCategories++;
  }

  let max = totalProfit + distinctCategories ** 2;

  let idxR = 0;
  for (
    let idxT = 0;
    idxT < takenItems.length && idxR < remainingItems.length;
    idxT++
  ) {
    const [profitT, categoryT] = takenItems[idxT];
    if (categoryFreq[categoryT] <= 1) continue;

    let [profitR, categoryR] = remainingItems[idxR];
    while (categoryFreq[categoryR] >= 1) {
      idxR++;
      [profitR, categoryR] = remainingItems[idxR] ?? [-Infinity, -1];
    }

    categoryFreq[categoryT]--;
    categoryFreq[categoryR]++;

    totalProfit = totalProfit - profitT + profitR;
    distinctCategories++;
    const elegance = totalProfit + distinctCategories ** 2;
    max = Math.max(max, elegance);
  }

  return max;
};
