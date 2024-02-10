/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  directions = directions.split("");
  let result = 0;
  let queue = [];
  for (let i = 0; i < directions.length; i++) queue.push(i);

  for (const idx of queue) {
    if (directions[idx] === "R" && directions[idx + 1] === "L") {
      directions[idx] = "S";
      directions[idx + 1] = "S";
      result += 2;
      queue.push(idx - 1);
      queue.push(idx + 1);
    } else if (directions[idx] === "R" && directions[idx + 1] === "S") {
      directions[idx] = "S";
      result++;
      queue.push(idx - 1);
      queue.push(idx);
    } else if (directions[idx] === "S" && directions[idx + 1] === "L") {
      directions[idx + 1] = "S";
      result++;
      queue.push(idx);
      queue.push(idx + 1);
    }
  }

  return result;
};

console.log(countCollisions("RLRSLL"));
