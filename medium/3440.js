/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, startTime, endTime) {
  const n = startTime.length;
  const meetings = startTime.map((start, idx) => [start, endTime[idx]]);
  meetings.sort((a, b) => (a[0] > b[0] ? 1 : -1));

  const freeSpaces = [];
  for (let i = 0; i <= n; i++) {
    const [start] = meetings[i] ?? [eventTime];
    const prev = meetings[i - 1] ?? [0, 0];
    const freeSpace = start - prev[1];
    freeSpaces.push(freeSpace);
  }

  let freeSpaceFreq = {};
  for (const freeSpace of freeSpaces)
    freeSpaceFreq[freeSpace] = (freeSpaceFreq[freeSpace] || 0) + 1;
  freeSpaceFreq = Object.entries(freeSpaceFreq)
    .map(([freeSpace, freq]) => [+freeSpace, freq])
    .sort((a, b) => (a[0] > b[0] ? -1 : 1));

  function canRearrange(duration, freeSpaceBefore, freeSpaceAfter) {
    for (let [freeSpace, freq] of freeSpaceFreq) {
      if (freeSpace < duration) return false;
      if (freeSpace === freeSpaceBefore) freq--;
      if (freeSpace === freeSpaceAfter) freq--;
      if (freq > 0) return true;
    }
  }

  let max = 0;
  for (let i = 0; i < n; i++) {
    const [start, end] = meetings[i];
    const duration = end - start;
    const prev = meetings[i - 1] ?? [0, 0];
    const next = meetings[i + 1] ?? [eventTime, eventTime];

    const freeSpaceBefore = freeSpaces[i];
    const freeSpaceAfter = freeSpaces[i + 1];

    const rearrange = canRearrange(duration, freeSpaceBefore, freeSpaceAfter)
      ? next[0] - prev[1]
      : 0;
    const freeTime = next[0] - (prev[1] + duration);

    max = Math.max(max, rearrange, freeTime);
  }

  return max;
};
