/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  // method[i][j] = method[i-1][j] + method[i][j-1];

  if (obstacleGrid[0][0] == 1) {
    return 0;
  }
  let method = [];

  for (let i = 0; i < obstacleGrid.length; i++) {
    method[i] = [];
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (i == 0 && j == 0) {
        method[i][j] = 1;
      } else if (obstacleGrid[i][j] !== 1) {
        if (i == 0 && j >= 1) {
          method[i][j] = method[i][j - 1];
        } else if (j == 0 && i >= 1) {
          method[i][j] = method[i - 1][j];
        } else {
          method[i][j] = method[i - 1][j] + method[i][j - 1];
        }
      } else {
        method[i][j] = 0;
      }
    }
  }

  // console.log(method);
  //  '[[0,0],[1,1],[0,0]]'

  return method[obstacleGrid.length - 1][
    obstacleGrid[obstacleGrid.length - 1].length - 1
  ];
};
