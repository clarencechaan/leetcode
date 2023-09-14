/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let totalWait = 0;
  let currTime = customers[0][0];
  for (const [arrival, time] of customers) {
    totalWait += Math.max(0, currTime - arrival) + time;
    currTime = Math.max(currTime, arrival) + time;
  }

  return totalWait / customers.length;
};

console.log(
  averageWaitingTime([
    [1, 2],
    [2, 5],
    [4, 3],
  ])
);
