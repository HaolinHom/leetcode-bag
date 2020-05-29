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
].map((item) => {
  item.expected = expectedAdaptor(item.expected);
  return item;
}));

test.each(testData)(
  '三数之和(%j): ',
  (numArr, expected) => {
    expect(expected).toEqual(
      expect.arrayContaining(expectedAdaptor(threeSum(numArr)))
    );
  }
);

// test command: jest hot100/015_三数之和/index.test.js