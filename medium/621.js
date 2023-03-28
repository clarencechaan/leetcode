/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let freqMap = {};
  for (const task of tasks) {
    if (!freqMap[task]) freqMap[task] = { remaining: 0, timeAvailable: 0 };
    freqMap[task].remaining++;
  }

  let remainingTasks = tasks.length;
  let time = 0;
  while (remainingTasks) {
    let nextTask;
    for (const task in freqMap)
      if (
        freqMap[task].remaining &&
        time >= freqMap[task].timeAvailable &&
        (!nextTask || freqMap[task].remaining > freqMap[nextTask].remaining)
      )
        nextTask = task;

    if (nextTask) {
      freqMap[nextTask].remaining--;
      freqMap[nextTask].timeAvailable = time + n + 1;
      remainingTasks--;
    }
    time++;
  }
  return time;
};

console.log(
  leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2)
);
