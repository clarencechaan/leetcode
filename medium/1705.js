/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  let priority = [];
  for (let i = 0; i < apples.length; i++)
    priority.push([apples[i], i, i + days[i]]);
  priority.sort((a, b) =>
    a[2] > b[2] || (a[2] === b[2] && a[1] > b[1]) ? 1 : -1
  );
  let maxDay = priority[priority.length - 1][2];
  priority = new Set(priority);

  let answer = 0;
  for (let i = 0; i < maxDay; i++)
    for (const p of priority) {
      if (!p[0] || p[2] <= i) priority.delete(p);
      else {
        if (p[1] <= i && i < p[2]) {
          answer++;
          p[0]--;
          break;
        }
      }
    }

  return answer;
};

console.log(eatenApples([1, 2, 3, 5, 2], [3, 2, 1, 4, 2]));
