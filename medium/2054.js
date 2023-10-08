/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) =>
    a[0] > b[0] ||
    (a[0] === b[0] && (a[1] > b[1] || (a[1] === b[1] && a[2] < b[2])))
      ? 1
      : -1
  );

  events = events.filter(
    (ev, idx) =>
      ev[0] !== events[idx - 1]?.[0] || ev[1] !== events[idx - 1]?.[1]
  );

  events.sort((a, b) => (a[2] > b[2] ? -1 : 1));

  let max = events.reduce((max, ev) => Math.max(max, ev[2]), 0);

  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      if (events[i][2] + events[j][2] <= max) break;
      else if (events[i][1] < events[j][0] || events[j][1] < events[i][0]) {
        max = events[i][2] + events[j][2];
        break;
      }
    }
  }

  return max;
};

console.log(
  maxTwoEvents([
    [1, 3, 2],
    [4, 5, 2],
    [2, 4, 3],
  ])
);
