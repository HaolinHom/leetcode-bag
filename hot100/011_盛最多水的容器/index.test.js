const utils = require('../utils');
const maxArea = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[1,8,6,2,5,4,8,3,7]],
    expected: 49,
  },
  {
    args: [[1,1]],
    expected: 1,
  },
]);

test.each(testData)(
  '盛最多水的容器(%j): ',
  (numArr, expected) => {
    expect(maxArea(numArr)).toEqual(expected);
  }
);

// test command: jest hot100/011_盛最多水的容器/index.test.js