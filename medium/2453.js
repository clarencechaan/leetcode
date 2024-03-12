/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function (nums, space) {
  // seeding: seeding nums[i] means destroying all numbers nums[i] + c * space, where c is a non-negative integer
  //      => seeding nums[i] means destroying all numbers "num" where num >= nums[i] and (num - nums[i]) % space === 0
  // goal: return the minimum value of nums[i] where seeding nums[i] destroys the maximum number of targets
  // idea:
  // 1. create helper function targetsDestroyed(num) that returns the number of targets destroyed by seeding a number "num"
  // 2. create a map where map[num] is the number of targets destroyed by seeding num
  // 3. call helper function through each nums[i], update map with the value returned
  // 4. get max value from map
  // 5. return the minimum num where map[num] === the max value
  // too slow

  // other ideas:
  // maybe we can keep track of the number of targets destroyed for each num without calling a helper function on each number,
  //    and just by iterating through the array nums once
  // 1. sort nums in ascending order
  // 2. have an array called seeds, where seeds[i] === [seedNum, numOfTargetsDestroyed]
  // 3. loop through sorted nums, for each iteration i:
  //    => if there exists some seed in the seeds array where seed would destroy nums[i], increment seeds[i][1] by 1
  //          (this is the bottleneck, can we find a way to figure out if there exists such a seed without checking
  //           every element currently in seeds? yes, use a map)
  //    => otherwise push [nums[i], 1] to seeds
  // 4. return seed with highest numOfTargetsDestroyed

  // optimized:
  // 1. have a map called seeds where seeds[num % space] is the number of targets destroyed by seeding (num % space)
  // 2. return the smallest num in nums where seeds[num % space] is the max value

  let seeds = {};
  for (const num of nums) {
    if (!seeds[num % space]) seeds[num % space] = 0;
    seeds[num % space]++;
  }

  let maxTargets = 0;
  for (const seed in seeds) maxTargets = Math.max(maxTargets, seeds[seed]);

  let result = Infinity;
  for (const num of nums)
    if (seeds[num % space] === maxTargets) result = Math.min(result, num);

  return result;
};

console.log(destroyTargets([3, 7, 8, 1, 1, 5], 2));
