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
]);

test.each(testData)(
  '寻找两个正序数组的中位数(%j, %j): ',
  (numArr1, numArr2, expected) => {
    expact(findMedianSortedArrays(numArr1, numArr2)).toEqual(expected);
  }
);

// test command: jest hot100/004_寻找两个正序数组的中位数/index.test.js