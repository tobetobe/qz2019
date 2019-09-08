/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // method[i][j] = method[i-1][j] + method[i][j-1];

  let method = [];

  for (let i = 0; i < m; i++) {
    method[i] = [];
    for (let j = 0; j < n; j++) {
      if (i == 0) {
        method[i][j] = 1;
      } else if (j == 0) {
        method[i][j] = 1;
      } else {
        method[i][j] = method[i - 1][j] + method[i][j - 1];
      }
    }
  }

//   console.log(method);

  return method[m - 1][n - 1];
};
