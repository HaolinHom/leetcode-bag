const utils = require('../../utils');
const search = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[4,5,6,7,0,1,2], 0],
    expected: 4,
  },
  {
    args: [[4,5,6,7,0,1,2], 3],
    expected: -1,
  },
  {
    args: [[1], 0],
    expected: -1,
  },
]);

test.each(testData)(
  '搜索旋转排序数组 (输入: %j，目标值: %d): ',
  (nums, target, expected) => {
    expect(search(nums, target)).toEqual(expected);
  }
);

// test command: jest src/033_搜索旋转排序数组/index.test.js
