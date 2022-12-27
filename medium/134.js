/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let net = gas.map((gas, idx) => gas - cost[idx]);
  if (net.reduce((val, sum) => val + sum, 0) < 0) return -1;

  function runCycle(idx, net) {
    let arr = [...net.slice(idx), ...net.slice(0, idx)];
    let sum = 0;
    for (const val of arr) {
      sum += val;
      if (sum < 0) return false;
    }
    return true;
  }

  for (let i = net.length - 1; i >= 0; i--) if (runCycle(i, net)) return i;
  return net;
};
