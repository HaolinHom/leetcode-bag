const utils = require('../../utils');
const maxSubArray = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
    expected: 6,
  },
  {
    args: [[5, -5, 6, 3, -8, -1, 2, 3, -1, 2, 1]],
    expected: 9,
  },
]);

test.each(testData)(
  '最大子序和 (输入: %j，目标值: %d): ',
  (nums, expected) => {
    expect(maxSubArray(nums)).toEqual(expected);
  }
);

// test command: jest src/053_最大子序和/index.test.js
