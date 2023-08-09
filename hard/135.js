/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candies = Array(ratings.length).fill(1);

  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1])
        while (candies[i] <= candies[i - 1]) {
          candies[i]++;
          done = false;
        }
      if (ratings[i] > ratings[i + 1])
        while (candies[i] <= candies[i + 1]) {
          candies[i]++;
          done = false;
        }
    }
  }

  return candies.reduce((sum, val) => sum + val, 0);
};

console.log(candy([1, 0, 2]));
