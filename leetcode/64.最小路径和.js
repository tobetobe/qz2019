/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let arr = [];

  // arr[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]);

  for (let i = 0; i < grid.length; i++) {
    arr[i] = [];

    for (let j = 0; j < grid[i].length; j++) {
      if (j == 0 && i !== 0) {
        arr[i][j] = arr[i - 1][j] + grid[i][j];
      } else if (i == 0 && j !== 0) {
        arr[i][j] = arr[i][j - 1] + grid[i][j];
      } else if (i == 0 && j == 0) {
        arr[i][j] = grid[i][j];
      } else {
        arr[i][j] = Math.min(arr[i][j - 1], arr[i - 1][j]) + grid[i][j];
      }
    }
  }
  //   console.log(arr);
  return arr[grid.length - 1][arr[grid.length - 1].length - 1];
};
