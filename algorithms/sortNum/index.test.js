const utils = require('../../utils');
const sortNum = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[1, 1, 1, 2, 3, 4, 1, 9, 2]],
    expected: [1, 1, 1, 1, 2, 2, 3, 4, 9],
  },
  {
    args: [[7, 6, 9, 1, 3, 5, 8, 2, 4]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
]);

test.each(testData)(
  'sortNum: ',
  (numArr, expected) => {
    expect(sortNum(numArr)).toEqual(expected);
  }
);

// test command: jest algorithms/sortNum/index.test.js