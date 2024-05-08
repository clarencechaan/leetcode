/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, people) {
  const personArr = people.map((time, idx) => ({
    type: "1:person",
    time,
    idx,
  }));

  const timeEvents = [...personArr];
  for (const [start, end] of flowers) {
    timeEvents.push({ type: "0:flower-start", time: start });
    timeEvents.push({ type: "2:flower-end", time: end });
  }
  77;
  timeEvents.sort((a, b) =>
    a.time > b.time || (a.time === b.time && a.type > b.type) ? 1 : -1
  );

  let numFullBloom = 0;

  const ans = [];
  for (const te of timeEvents) {
    switch (te.type) {
      case "0:flower-start":
        numFullBloom++;
        break;
      case "1:person":
        ans[te.idx] = numFullBloom;
        break;
      case "2:flower-end":
        numFullBloom--;
        break;
    }
  }

  return ans;
};

console.log(
  fullBloomFlowers(
    [
      [1, 6],
      [3, 7],
      [9, 12],
      [4, 13],
    ],
    [2, 3, 7, 11]
  )
);
