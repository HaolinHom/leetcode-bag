const utils = require('../../utils');
const sortNum = require('../../algorithms/sortNum');
const threeSum = require('./index');

function expectedAdaptor(expected) {
  return expected.map(item => sortNum(item));
}

const testData = utils.getEachTestParams([
  {
    args: [[-1, 0, 1, 2, -1, -4]],
    expected: [
      [-1, 0, 1],
      [-1, -1, 2],
    ],
  },
  {
    args: [[0, 0 ,0 ,0 ,0 ,0]],
    expected: [
      [0, 0, 0]
    ],
  },
  {
    args: [[5, -2, -3, -3, -2, 5]],
    expected: [
      [5, -2, -3]
    ],
  },
  {
    args: [[1, -1]],
    expected: [],
  },
  {
    args: [[]],
    expected: [],
  },
].map((item) => {
  item.expected = expectedAdaptor(item.expected);
  return item;
}));

test.each(testData)(
  '三数之和(%j): ',
  (numArr, expected) => {
    const result = expectedAdaptor(threeSum(numArr));

    expect(result).toEqual(
      expect.arrayContaining(expected)
    );
    expect(result).toHaveLength(expected.length);
  }
);

// test command: jest hot100/015_三数之和/index.test.js