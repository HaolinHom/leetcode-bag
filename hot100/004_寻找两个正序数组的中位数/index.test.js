const utils = require('../../utils');
const findMedianSortedArrays = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[1, 3], [2]],
    expected: 2,
  },
  {
    args: [[1, 2], [3, 4]],
    expected: 2.5,
  },
  {
    args: [[23, 26], [20, 21, 23, 25, 29, 32, 33]],
    expected: 25,
  },
  {
    args: [[10, 15, 20], [30, 35]],
    expected: 20,
  },
]);

test.each(testData)(
  '寻找两个正序数组的中位数(%j, %j): ',
  (numArr1, numArr2, expected) => {
    expect(findMedianSortedArrays(numArr1, numArr2)).toEqual(expected);
  }
);

// test command: jest hot100/004_寻找两个正序数组的中位数/index.test.js