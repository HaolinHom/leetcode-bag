const utils = require('../utils');
const findMedianSortedArrays = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[1, 3], [2]],
    expected: 2,
  },
  {
    args: [[1, 2], [3, 4]],
    expected: 2,
  },
  {
    args: [[23, 29], [20, 32, 23, 21, 33, 25]],
    expected: 24,
  },
  {
    args: [[10, 20, 20, 20, 30], []],
    expected: 20,
  },
]);

test.each(testData)(
  '寻找两个正序数组的中位数(%j, %j): ',
  (numArr1, numArr2, expected) => {
    expact(findMedianSortedArrays(numArr1, numArr2)).toEqual(expected);
  }
);

// test command: jest hot100/004_寻找两个正序数组的中位数/index.test.js