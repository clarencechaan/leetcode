/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let count = 0;
  let temp = [...tickets];
  while (temp[k]) {
    for (let i = 0; i < temp.length; i++) {
      if (!temp[i]) continue;
      count++;
      temp[i]--;
      if (i === k && !temp[k]) break;
    }
  }

  return count;
};

console.log(timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3));
