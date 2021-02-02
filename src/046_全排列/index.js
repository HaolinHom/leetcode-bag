/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let storage = [];
  let usedMap = {};

  function getPermute(accumulate) {
    if (accumulate.length === nums.length) {
      return storage.push(accumulate.slice());
    }

    for (let num of nums) {
      if (usedMap[num]) {
        continue;
      }
      accumulate.push(num);
      usedMap[num] = true;

      getPermute(accumulate);

      accumulate.pop();
      usedMap[num] = false;
    }
  }

  getPermute([]);

  return storage;
};

module.exports = permute;