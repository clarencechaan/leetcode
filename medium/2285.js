/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  // 1. keep a frequency map of how often each city appears in `roads`
  // 2. sort the cities by frequency (descending)
  // 3. assign the cities values n..1

  const freqMap = {};
  for (let city = 0; city < n; city++) freqMap[city] = 0;
  for (const [a, b] of roads) {
    freqMap[a]++;
    freqMap[b]++;
  }

  const cities = Array(n)
    .fill()
    .map((_, index) => ({ city: index }));
  cities.sort((a, b) => (freqMap[a.city] > freqMap[b.city] ? -1 : 1));
  cities.forEach((city, index) => (city.value = n - index));
  cities.sort((a, b) => (a.city > b.city ? 1 : -1));

  let sum = 0;
  for (const [a, b] of roads) {
    sum += cities[a].value;
    sum += cities[b].value;
  }
  return sum;
};
