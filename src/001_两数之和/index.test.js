const utils = require('../../utils');
const twoSum = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[2, 7, 11, 15], 9],
    expected: [0, 1],
  },
  {
    args: [[-3, 7, 12, 4, -5], 2],
    expected: [1, 4],
  },
]);

test.each(testData)(
  '两数之和(整数数组: %j，目标值: %d): ',
  (numArr, target, expected) => {
    expect(twoSum(numArr, target)).toEqual(expected);
  }
);

// test command: jest hot100/001_两数之和/index.test.js
