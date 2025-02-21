/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const contentPathMap = {};

  for (const str of paths) {
    const arr = str.split(" ");
    const path = arr[0];
    const files = arr.slice(1);
    for (const file of files) {
      const idx = file.indexOf("(");
      const content = file.slice(idx);
      const fullPath = path + "/" + file.slice(0, idx);
      if (!contentPathMap[content]) contentPathMap[content] = [];
      contentPathMap[content].push(fullPath);
    }
  }

  return Object.values(contentPathMap).filter(
    (duplicates) => duplicates.length > 1
  );
};
