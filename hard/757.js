/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function (intervals) {
  function contains(interval1, interval2) {
    const [a1, b1] = interval1;
    const [a2, b2] = interval2;
    return a1 <= a2 && b2 <= b1;
  }

  intervals.sort((a, b) =>
    a[0] > b[0] || (a[0] === b[0] && a[1] < b[1]) ? 1 : -1
  );

  const stack = [];
  for (const interval of intervals) {
    while (stack.length && contains(stack[stack.length - 1], interval))
      stack.pop();
    stack.push(interval);
  }

  const points = new Set();
  stack.reverse();

  while (stack.length) {
    const [start, end] = stack.pop();
    let count = 0;
    for (const point of points)
      if (start <= point && point <= end) {
        count++;
        if (count === 2) break;
      }
    for (let i = end; count < 2; i--)
      if (!points.has(i)) {
        count++;
        points.add(i);
      }
  }

  return points.size;
};

console.log(
  intersectionSizeTwo([
    [1, 3],
    [3, 7],
    [8, 9],
  ])
);
