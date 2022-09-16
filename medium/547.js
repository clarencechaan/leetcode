/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let provinces = [];

  for (let i = 0; i < isConnected.length; i++) {
    provinces.push([i]);
  }

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (i === j || !isConnected[i][j]) continue;
      const iIdx = provinces.findIndex((province) => province.includes(i));
      const jIdx = provinces.findIndex((province) => province.includes(j));
      if (iIdx !== jIdx) {
        provinces[iIdx] = [...provinces[iIdx], ...provinces[jIdx]];
        provinces = [...provinces.slice(0, jIdx), ...provinces.slice(jIdx + 1)];
      }
    }
  }

  return provinces.length;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
