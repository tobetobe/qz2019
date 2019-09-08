/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let hash = {},
    res = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      hash[0 - nums[i] - nums[j]] = [i, j];
    }
  }

  for (let i = 0; i < nums.length - 2; i++) {
    console.log(hash[nums[i]]);
    if (hash[nums[i]] !== undefined) {
      const [a, b] = hash[nums[i]];
      if (a !== i && b !== i) {
        res.push([nums[i], nums[a], nums[b]]);
        hash[nums[i]] = undefined;
      }
    }
  }

  console.log(hash);
  console.log(res);
};

const nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
