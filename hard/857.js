/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const n = quality.length;

  // try sorting by rate
  const people = [];
  for (let i = 0; i < n; i++)
    people.push({ q: quality[i], w: wage[i], r: wage[i] / quality[i] });

  people.sort((a, b) => (a.r > b.r ? -1 : 1));

  // => keep another array `sorted` of the right `k` elements of `people`
  // => this array is sorted by ascending quality, keep track of the sum of
  //    quality
  // => start at the (n-k)th element of `people`, the total money needed at this
  //    index `i` is `people[i].r*sum` where sum is the sum quality
  // => insert this person into our `sorted` array, update `sum`, and `pop()` it
  //    to keep it at `k` elements and also removing the highest quality worker
  // => keep doing this until we reach index 0

  // binary search through `sorted` for index to insert at (search for the first
  // index `idx` where `sorted[idx].q >= person.q`)
  function binarySearch(sorted, person) {
    let min = 0;
    let max = sorted.length;
    let idx = Math.floor((min + max) / 2);

    while (min < max) {
      if (sorted[idx].q >= person.q) max = idx;
      else min = idx + 1;
      idx = Math.floor((min + max) / 2);
    }

    return idx;
  }

  const sorted = people.slice(-k).sort((a, b) => (a.q > b.q ? 1 : -1));
  let sum = sorted.reduce((sum, person) => person.q + sum, 0);
  let ans = people[n - k].r * sum;

  for (let i = n - k - 1; i >= 0; i--) {
    const idx = binarySearch(sorted, people[i]);
    sorted.splice(idx, 0, people[i]);
    sum += people[i].q - sorted.pop().q;
    ans = Math.min(ans, people[i].r * sum);
  }

  return ans;
};

console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2));
