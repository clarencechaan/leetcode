/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let workersLongestTask = {};
  let time = 0;
  for (const log of logs) {
    const length = log[1] - time;
    if (!workersLongestTask[log[0]]) workersLongestTask[log[0]] = length;
    else if (length > workersLongestTask[log[0]])
      workersLongestTask[log[0]] = length;
    time = log[1];
  }

  let longestTaskLength = 0;
  let longestTaskWorker = -1;
  for (const worker in workersLongestTask)
    if (
      workersLongestTask[worker] > longestTaskLength ||
      (workersLongestTask[worker] === longestTaskLength &&
        worker < parseInt(longestTaskWorker))
    ) {
      longestTaskLength = workersLongestTask[worker];
      longestTaskWorker = parseInt(worker);
    }
  return longestTaskWorker;
};

console.log(
  hardestWorker(16, [
    [4, 1],
    [0, 2],
    [1, 3],
    [15, 4],
    [2, 10],
    [15, 16],
    [5, 20],
  ])
);
