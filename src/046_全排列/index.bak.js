/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length <= 1) {
    return [nums]
  }

  let storage = [
    [nums.shift(), nums.shift()],
  ];
  storage.push([storage[0][1], storage[0][0]]);

  if (nums.length === 0) {
    return storage;
  }

  function getPermute(arr, accumulate) {
    let tag = arr.shift();
    let temp;
    let tempStorage = [];

    for (let i = 0; i < accumulate.length; i++) {
      for (let j = 0; j <= accumulate[i].length; j++) {
        temp = accumulate[i].slice();
        temp.splice(j, 0, tag);
        tempStorage.push(temp);
      }
      temp = null;
    }

    if (arr.length === 0) {
      return tempStorage;
    }

    return getPermute(arr, tempStorage);
  }

  return getPermute(nums, storage);
};

module.exports = permute;
