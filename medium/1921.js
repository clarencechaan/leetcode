/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
  // 1. using dist and speed, convert each monster to minutes until reaching the city
  // 2. eliminate each monster based on time to reaching the city (can sort the array in ascending order)

  const minutes = [];
  for (let i = 0; i < dist.length; i++) minutes.push(dist[i] / speed[i]);

  minutes.sort((a, b) => (a > b ? 1 : -1));

  let time = 0;
  for (const m of minutes)
    if (m <= time) break;
    else time++;

  return time;
};

console.log(eliminateMaximum([1, 3, 4], [1, 1, 1]));
