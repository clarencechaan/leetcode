/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  function recursiveCheckRecord(
    day = 0,
    absences = 0,
    consecutiveLates = 0,
    dp = Array(2)
      .fill()
      .map(() =>
        Array(3)
          .fill()
          .map(() => [])
      )
  ) {
    if (absences === 2 || consecutiveLates === 3) return 0;
    if (day >= n) return 1;
    if (dp[absences][consecutiveLates][day] >= 0)
      return dp[absences][consecutiveLates][day];

    const absent = recursiveCheckRecord(day + 1, absences + 1, 0, dp);
    const late = recursiveCheckRecord(
      day + 1,
      absences,
      consecutiveLates + 1,
      dp
    );
    const present = recursiveCheckRecord(day + 1, absences, 0, dp);

    const result = (absent + late + present) % (10 ** 9 + 7);
    dp[absences][consecutiveLates][day] = result;

    return result;
  }

  return recursiveCheckRecord();
};

console.log(checkRecord(2));
