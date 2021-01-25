/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  function getResult(numArr, tag) {
    let current = numArr.splice(0, 1)[0];
    let difference = tag - current.value;

    let result = numArr.find(item => item.value === difference);

    if (result) {
      return [current.index, result.index];
    } else if (numArr.length > 1) {
      return getResult(numArr, tag);
    } else {
      return [];
    }
  }

  nums = nums.map((value, index) => ({ value, index }));

  return getResult(nums, target);
};

module.exports = twoSum;