/**
 * @param {string[][]} paths
 * @return {string[][]}
 */
var deleteDuplicateFolder = function (paths) {
  const root = {};

  function addPathToRoot(path) {
    let curr = root;
    for (const folder of path) {
      if (!curr[folder]) curr[folder] = {};
      curr = curr[folder];
    }
  }

  for (const path of paths) addPathToRoot(path);

  function isDuplicate(folder1, folder2) {
    for (const child in folder1) if (!folder2[child]) return false;
    for (const child in folder2) if (!folder1[child]) return false;
    for (const child in folder1)
      if (!isDuplicate(folder1[child], folder2[child])) return false;
    return true;
  }

  const allFolders = new Set();
  (function addAllFolders(folder = root) {
    if (!folder || Object.entries(folder).length === 0) return;
    allFolders.add(folder);
    for (const child in folder) addAllFolders(folder[child]);
  })();

  const duplicates = new Set();

  for (const folder1 of allFolders)
    for (const folder2 of allFolders)
      if (folder1 === folder2) continue;
      else if (isDuplicate(folder1, folder2)) {
        duplicates.add(folder1);
        duplicates.add(folder2);
      }

  (function deleteDuplicates(folder = root) {
    for (const child in folder)
      if (duplicates.has(folder[child])) delete folder[child];
      else deleteDuplicates(folder[child]);
  })();

  function doesPathExist(path) {
    let curr = root;
    for (const name of path)
      if (!curr[name]) return false;
      else curr = curr[name];
    return true;
  }

  paths = paths.filter(doesPathExist);

  return paths;
};

console.log(
  deleteDuplicateFolder([
    ["a"],
    ["c"],
    ["d"],
    ["a", "b"],
    ["c", "b"],
    ["d", "a"],
  ])
);
