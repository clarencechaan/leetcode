/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  function sortedByEnd() {
    events.sort(([a1, a2], [b1, b2]) =>
      a2 > b2 || (a2 === b2 && a1 < b1) ? 1 : -1
    );

    let length = events[events.length - 1][1] + 1;

    events = new Set(events);
    let result = 0;

    for (let i = 0; i < length; i++) {
      for (const event of events) {
        if (event[0] <= i && i <= event[1]) {
          result++;
          events.delete(event);
          break;
        }
      }
    }

    return result;
  }

  function sortedByStart() {
    events.sort(([a1, a2], [b1, b2]) =>
      a1 > b1 || (a1 === b1 && a2 > b2) ? 1 : -1
    );

    events = new Set(events);
    let result = 0;

    for (let i = 0; i < length; i++) {
      let best;
      for (const event of events) {
        if (event[0] <= i && i <= event[1] && (!best || event[1] < best[1]))
          best = event;
        if (event[0] > i) break;
      }
      if (best) {
        result++;
        events.delete(best);
      }
    }

    return result;
  }

  let length = 0;
  for (let i = 0; i < events.length; i++) {
    events[i][0]--;
    events[i][1]--;
    length = Math.max(length, events[i][1] + 1);
  }
  let mid = Math.min(length / 2);
  let filteredLength = events.filter(
    ([start, end]) => start <= mid && mid <= end
  ).length;

  if (filteredLength >= mid) return sortedByEnd();
  else return sortedByStart();
};

console.log(
  maxEvents([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
