/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
  let yearGrowths = {};
  for (const log of logs) {
    if (!yearGrowths[log[0]]) yearGrowths[log[0]] = 0;
    if (!yearGrowths[log[1]]) yearGrowths[log[1]] = 0;
    yearGrowths[log[0]]++;
    yearGrowths[log[1]]--;
  }

  let yearPopulations = {};
  let years = Object.keys(yearGrowths).sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < years.length; i++) {
    yearPopulations[years[i]] = yearPopulations[years[i - 1]] || 0;
    yearPopulations[years[i]] += yearGrowths[years[i]];
  }

  let max = 0;
  let maxYear;

  for (const year of years)
    if (yearPopulations[year] > max) {
      max = yearPopulations[year];
      maxYear = year;
    }

  return maxYear;
};

console.log(
  maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ])
);
