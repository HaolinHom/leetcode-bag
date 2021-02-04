function ListNode(val) {
  this.val = val;
  this.next = null;
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

module.exports = {
  namespace: 'utils',
  getEachTestParams(testData) {
    if (Array.isArray(testData)) {
      return testData.map((item) => {
        if (!Array.isArray(item.args)) {
          item.args = [];
        }
        if (item.hasOwnProperty('expected')) {
          item.args.push(item.expected);
        }
        return item.args;
      });
    }
    return [];
  },
  createListNode(numArr) {
    let result, temp;
    if (Array.isArray(numArr)) {
      numArr.reverse().forEach((num) => {
        if (result) {
          temp = result;
          result = new ListNode(num);
          result.next = temp;
        } else {
          result = new ListNode(num);
        }
      });
    }
    return result;
  },
  createTreeNode(arr) {
    let tree = new TreeNode(arr.shift());

    if (arr.length === 0) {
      return tree;
    }

    const bfs = function (rootArr) {
      let storage = [];
      for (let root of rootArr) {
        if (arr.length > 0) {
          root.left = new TreeNode(arr.shift());
          storage.push(root.left);
        }
        if (arr.length > 0) {
          root.right = new TreeNode(arr.shift());
          storage.push(root.right);
        }
      }
      if (arr.length > 0) {
        return bfs(storage);
      }
    };

    bfs([tree]);

    return tree;
  },
};