/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let leftToRight = true;
  let length = n;
  let interval = 1;
  let start = 1;

  while (length > 1) {
    let nextLeftToRight = !leftToRight;
    let nextLength = Math.floor(length / 2);
    let nextInterval = interval * 2;
    let nextStart;
    if (leftToRight) nextStart = start + interval;
    else nextStart = length % 2 === 0 ? start : start + interval;

    leftToRight = nextLeftToRight;
    length = nextLength;
    interval = nextInterval;
    start = nextStart;
  }

  return start;
};

console.log(lastRemaining(4932837));
