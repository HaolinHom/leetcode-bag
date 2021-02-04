// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  function verify(left, right) {
    if (left === null && right === null) {
      return true;
    }
    if ((left && left.val) === (right && right.val)) {
      return verify(left.left, right.right) && verify(left.right, right.left);
    }
    return false;
  }

  return verify(root.left, root.right);
};

module.exports = isSymmetric;