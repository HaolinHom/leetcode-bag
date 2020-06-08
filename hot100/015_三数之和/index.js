/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => (a - b));

  let len = nums.length;

  if (len < 3 || nums[0] > 0 || nums[len - 1] < 0) {
    return [];
  }

  let result = [];

  let first, last, temp;

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    first = i + 1;
    last = len - 1;

    do {
      if (first >= last) {
        break;
      }

      temp = nums[i] + nums[first] + nums[last];
      if (temp === 0) {
        result.push([nums[i], nums[first], nums[last]]);
      }

      if (temp <= 0) {
        do {
          first++;
        } while (first < last && nums[first] === nums[first - 1]);
      } else {
        do {
          last--;
        } while (first < last && nums[last] === nums[last + 1]);
      }
    } while (first < last);
  }

  return result;
};

module.exports = threeSum;
