/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const robots = [];
  for (let i = 0; i < positions.length; i++)
    robots.push({ p: positions[i], h: healths[i], d: directions[i], i });

  robots.sort((a, b) => (a.p > b.p ? 1 : -1));

  // move the right-facing robot `robot` until no more collisions by this robot
  // are possible
  function moveRobot(robot, lRobots) {
    while (lRobots.length) {
      const other = lRobots[lRobots.length - 1];
      if (robot.h === other.h) {
        robot.h = 0;
        other.h = 0;
      } else if (robot.h < other.h) {
        robot.h = 0;
        other.h--;
      } else if (robot.h > other.h) {
        robot.h--;
        other.h = 0;
      }
      if (other.h <= 0) lRobots.pop();
      if (robot.h <= 0) return;
    }
  }

  const lRobots = [];
  for (let i = robots.length - 1; i >= 0; i--)
    if (robots[i].d === "L") lRobots.push(robots[i]);
    else moveRobot(robots[i], lRobots);

  const ans = robots
    .filter((robot) => robot.h)
    .sort((a, b) => (a.i > b.i ? 1 : -1))
    .map((robot) => robot.h);
  return ans;
};

console.log(
  survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], "RRRRR")
);
