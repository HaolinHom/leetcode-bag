const utils = require('../../utils');
const removeDuplicates = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[1, 1, 2]],
    expected: 2,
  },
  {
    args: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]],
    expected: 5,
  },
  {
    args: [[2, 2]],
    expected: 1,
  },
  {
    args: [[1, 2]],
    expected: 2,
  },
]);

test.each(testData)(
  '删除排序数组中的重复项 (输入: %j，目标值: %d): ',
  (numArr, expected) => {
    expect(removeDuplicates(numArr)).toEqual(expected);
  }
);

// test command: jest src/026_删除排序数组中的重复项/index.test.js
