/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length === 0) {
    return [];
  } else if (strs.length === 1) {
    return [strs];
  }

  let result = [];
  let indexMap = {};

  for (let str of strs) {
    let tempKey = str === '' ? str : str.split('').sort().join('');
    if (typeof indexMap[tempKey] === 'number') {
      result[indexMap[tempKey]].push(str);
    } else {
      indexMap[tempKey] = result.length;
      result[indexMap[tempKey]] = [str];
    }
  }

  return result;
};

module.exports = groupAnagrams;