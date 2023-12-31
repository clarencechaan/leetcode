/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function (piles, k) {
  piles.sort((a, b) => (a > b ? -1 : 1));

  const numBuckets = Math.ceil(piles[0] / 10);

  function getBucketIdx(pile) {
    const size = Math.ceil(piles[0] / numBuckets);
    return numBuckets - Math.floor(pile / size);
  }

  let buckets = [];
  for (let i = 0; i <= numBuckets; i++) buckets.push([]);
  for (const pile of piles) buckets[getBucketIdx(pile)].push(pile);

  let result = 0;
  for (let bucketIdx = 0; bucketIdx < buckets.length; bucketIdx++) {
    if (buckets[bucketIdx].length <= k && bucketIdx < numBuckets) {
      for (let i = 0; i < buckets[bucketIdx].length && k > 0; i++, k--) {
        let pile = buckets[bucketIdx][i];
        result -= Math.floor(pile / 2);
        pile = Math.ceil(pile / 2);
        buckets[getBucketIdx(pile)].push(pile);
      }
    } else {
      buckets[bucketIdx].sort((a, b) => (a > b ? -1 : 1));
      while (k) {
        result -= Math.floor(buckets[bucketIdx][0] / 2);
        buckets[bucketIdx][0] = Math.ceil(buckets[bucketIdx][0] / 2);
        for (
          let i = 0;
          i < buckets[bucketIdx].length &&
          buckets[bucketIdx][i] < buckets[bucketIdx][i + 1];
          i++
        )
          [buckets[bucketIdx][i], buckets[bucketIdx][i + 1]] = [
            buckets[bucketIdx][i + 1],
            buckets[bucketIdx][i],
          ];
        k--;
      }
    }
  }

  result += piles.reduce((sum, pile) => sum + pile, 0);
  return result;
};

console.log(minStoneSum([5, 4, 9], 2));
