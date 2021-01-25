const utils = require('../../utils');
const mergeKLists = require('./index');

const testData = utils.getEachTestParams([
  {
    args: [[
      utils.createListNode([1, 2, 4]),
      utils.createListNode([1, 3, 4]),
    ]],
    expected: utils.createListNode([1, 1, 2 , 3, 4 , 4]),
  },
  {
    args: [[
      utils.createListNode([1, 4, 5]),
      utils.createListNode([1, 3, 4]),
      utils.createListNode([2, 6]),
    ]],
    expected: utils.createListNode([1, 1, 2, 3, 4, 4, 5, 6]),
  },
]);

test.each(testData)(
  '* 合并K个排序链表: ',
  (lists, expected) => {
    expect(mergeKLists(lists).toEqual(expected);
  },
);

// test command: jest hot100/023_合并K个排序链表/index.test.js
